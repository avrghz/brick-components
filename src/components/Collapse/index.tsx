import { Component, h, Prop, Host, EventEmitter, Event } from '@stencil/core'
import uniqueId from 'lodash/uniqueId'
import { tween, styler, ColdSubscription, easing } from 'popmotion'
import chevronRight from '../../assets/icons/chevronRight.svg'

/**
 * @slot header - Use this to render the collapse header.
 * @slot content - Use this to render the collapse body.
 */

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
    private timeout?: ReturnType<typeof setTimeout>

    /** Duration of the animation */
    @Prop() duration = 200

    /** Open or close the collapse */
    @Prop({ mutable: true, reflect: true }) open = false

    /** Enable or disable collapse */
    @Prop() disabled = false

    /** This event is fired just before the panel opens */
    @Event({ bubbles: false }) bkOpen!: EventEmitter

    /** This event is fired after the panel is opened */
    @Event({ bubbles: false }) bkOpened!: EventEmitter

    /** This event is fired just before the panel closes */
    @Event({ bubbles: false }) bkClose!: EventEmitter

    /** This event is fired after the panel is closed */
    @Event({ bubbles: false }) bkClosed!: EventEmitter

    componentDidLoad() {
        this.animateIn()
    }

    componentWillRender() {
        return new Promise((resolve) => {
            if (this.uiState === 'open' && !this.open) {
                this.timeout = setTimeout(resolve, this.duration)
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
        this.subscription?.stop()
        if (!!this.timeout) {
            clearTimeout(this.timeout)
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

    tweenActions = (el: ReturnType<typeof styler>, cb: VoidFunction) => ({
        update: ({ opacity, height, translate }: { opacity: number; height: number; translate: string }) => {
            el.set('opacity', opacity).set('height', height).set('position', 'relative').set('transform', translate)
        },
        complete: cb,
    })

    animate = (open: boolean, cb: VoidFunction) => {
        const height = this.tabPanelRef?.clientHeight || 1
        this.subscription?.stop()

        if (this.tabPanelRef) {
            const element = styler(this.tabPanelRef)

            const tweened = tween({
                from: {
                    opacity: -1,
                    height: 0,
                    translate: 'translate3d(0, -10%, 0)',
                },
                to: {
                    opacity: 1,
                    height,
                    translate: 'translate3d(0, 0%, 0)',
                },
                duration: this.duration,
                ease: easing.linear,
            })

            this.subscription = open
                ? tweened.start(
                      this.tweenActions(element, () => {
                          element.set('height', 'auto')
                          cb()
                      })
                  )
                : tweened.start(this.tweenActions(element, cb)).reverse()
        }
    }

    onClickHandler = () => (this.open = !this.open)

    onKeydownHandler = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
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
                    aria-expanded={`${this.open}`}
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
                        <i class="bk-collapse-item__arrow" innerHTML={chevronRight}></i>
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
                        <slot name="content"></slot>
                    </div>
                )}
            </Host>
        )
    }
}
