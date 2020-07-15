import { Component, h, Prop, Host, EventEmitter, Event } from '@stencil/core'
import { uniqueId } from 'lodash'
import { composite, tween, styler, ColdSubscription } from 'popmotion'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'

/**
 * @slot header - Use this to render the collapse header.
 * @slot content - Use this to render the collapse body.
 */

const DURATION = 300
// ! Test cases

@Component({
    tag: 'bk-collapse',
    shadow: true,
    styleUrl: './index.scss',
})
export class Collapse {
    private id = uniqueId()
    private tabPanelRef?: HTMLElement
    private subscription?: ColdSubscription
    private uiState?: boolean

    /** Open or close the collapse */
    @Prop({ mutable: true, reflect: true }) open = false

    /** Enable or disable collapse */
    @Prop() disabled = false

    /** This event is fired after the panel is opened */
    @Event() bkOpened!: EventEmitter

    /** This event is fired after the panel is closed */
    @Event() bkClosed!: EventEmitter

    componentDidLoad() {
        this.animateIn()
    }

    componentWillUpdate() {
        this.animateOut()
        return new Promise((res) => setTimeout(res, this.open ? 0 : DURATION / 2))
    }

    componentDidUpdate() {
        this.animateIn()
    }

    disconnectedCallback() {
        if (this.subscription) {
            this.subscription.stop()
        }
    }

    animateIn = () => {
        if (this.open) {
            this.animate(true, () => this.bkOpened.emit())
        }
    }

    animateOut = () => {
        if (!this.open) {
            this.animate(false, () => this.bkClosed.emit())
        }
    }

    animate = (open: boolean, cb: VoidFunction) => {
        if (this.tabPanelRef && this.uiState !== open) {
            const element = styler(this.tabPanelRef)
            this.subscription = composite({
                opacity: tween({
                    ...(open ? { from: 0, to: 1 } : { from: 1, to: 0 }),
                    duration: open ? DURATION * 2 : DURATION / 2,
                }),
                y: tween({
                    ...(open ? { from: '-50%', to: '0%' } : { from: '0%', to: '-50%' }),
                    duration: DURATION,
                }),
            }).start({
                update: ({ y, opacity }: { [key: string]: number | number }) => {
                    element.set('opacity', opacity).set('y', y)
                },
                complete: () => {
                    this.uiState = this.open
                    cb()
                },
            })
        }
    }

    onClickHandler = () => (this.open = !this.open)

    onKeydownHandler = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            this.open = !this.open
        }
    }

    render() {
        return (
            <Host
                class={{
                    'bk-collapse-item': true,
                    'is-active': this.open,
                    'is-disabled': this.disabled,
                }}
            >
                <div
                    role="tab"
                    aria-expanded={this.open}
                    aria-controls={`bk-collapse-content-${this.id}`}
                    aria-describedby={`bk-collapse-content-${this.id}`}
                >
                    <div
                        role="button"
                        id={`bk-collapse-head-${this.id}`}
                        tabIndex={0}
                        class={{
                            'bk-collapse-item__header': true,
                            focusing: this.open,
                        }}
                        onClick={this.onClickHandler}
                        onKeyDown={this.onKeydownHandler}
                    >
                        <slot name="header"></slot>
                        <iron-icon icon="chevron-right" class="bk-collapse-item__arrow" />
                    </div>
                </div>
                {this.open && (
                    <div
                        role="tabpanel"
                        aria-labelledby={`bk-collapse-head-${this.id}`}
                        id={`bk-collapse-content-${this.id}`}
                        class="bk-collapse-item__wrap"
                        ref={(el) => (this.tabPanelRef = el)}
                    >
                        <div class="bk-collapse-item__content">
                            <slot name="content"></slot>
                        </div>
                    </div>
                )}
            </Host>
        )
    }
}
