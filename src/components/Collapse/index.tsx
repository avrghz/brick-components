import { Component, h, Prop, Host, EventEmitter, Event } from '@stencil/core'
import { uniqueId } from 'lodash'
import { tween, styler, ColdSubscription, easing } from 'popmotion'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'

/**
 * @slot header - Use this to render the collapse header.
 * @slot content - Use this to render the collapse body.
 */

const DURATION = 200

@Component({
    tag: 'bk-collapse',
    shadow: true,
    styleUrl: './index.scss',
})
export class Collapse {
    private id = uniqueId()
    private tabPanelRef?: HTMLElement
    private subscription?: ColdSubscription
    private uiState: 'open' | 'close' = 'close'

    /** Open or close the collapse */
    @Prop({ mutable: true, reflect: true }) open = false

    /** Enable or disable collapse */
    @Prop() disabled = false

    /** This event is fired just before the panel opens */
    @Event() bkOpen!: EventEmitter

    /** This event is fired after the panel is opened */
    @Event() bkOpened!: EventEmitter

    /** This event is fired just before the panel closes */
    @Event() bkClose!: EventEmitter

    /** This event is fired after the panel is closed */
    @Event() bkClosed!: EventEmitter

    componentDidLoad() {
        this.animateIn()
    }

    componentWillRender() {
        return new Promise((resolve) => {
            if (this.uiState === 'open' && !this.open) {
                setTimeout(resolve, DURATION)
            } else {
                resolve()
            }
        })
    }

    async componentWillUpdate() {
        this.animateOut()
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
        if (this.open && this.uiState === 'close') {
            this.animate(true, () => {
                this.uiState = 'open'
                this.bkOpened.emit()
            })
            this.bkOpen.emit()
        }
    }

    animateOut = () => {
        if (!this.open && this.uiState === 'open') {
            this.animate(false, () => {
                this.uiState = 'close'
                this.bkClosed.emit()
            })
            this.bkClose.emit()
        }
    }

    animate = (open: boolean, cb: VoidFunction) => {
        let started = false
        let height = 1
        if (this.tabPanelRef) {
            const element = styler(this.tabPanelRef)
            this.subscription = tween({
                ...(open ? { from: 0, to: 1 } : { from: 1, to: 0 }),
                duration: DURATION,
                ease: easing.linear,
            }).start({
                update: (x: number) => {
                    if (!started) {
                        height = this.tabPanelRef?.clientHeight || 1
                        started = true
                    }
                    element
                        .set('opacity', x)
                        .set('position', 'relative')
                        .set('height', x * height)
                },
                complete: () => {
                    if (open) {
                        element.set('height', 'auto')
                    }
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
