import { Component, h, Host, Prop, Element, Event, EventEmitter, Watch, State } from '@stencil/core'
import KeyboardFocus from '../../shared/decorators/keyboardFocus'
import { Variants } from '../../shared/types'
import { consoleWarn } from '../../shared/util'

const eventOptions = {
    capture: true,
}

@Component({
    tag: 'bk-slider',
    shadow: true,
    styleUrl: './index.scss',
})
export class Slider {
    private isMouseEvent = true
    private dragHandle?: HTMLDivElement
    private previousValue = 0

    @KeyboardFocus() @Element() el!: HTMLElement

    @State() toolTipState = false

    /** Set value */
    @Prop({ mutable: true, reflect: true }) value = 0

    /** Set the stepper for the slider */
    @Prop() step = 1

    /** Type of the slider */
    @Prop() variant: Variants = 'default'

    /** Enable or disable slider */
    @Prop() disabled = false

    /** Show or hide the tooltip */
    @Prop() showTooltip = true

    /** Fired when value changed */
    @Event({ bubbles: false }) bkChange!: EventEmitter

    @Watch('step')
    watchStep() {
        this.validateStep()
    }

    @Watch('value')
    watchValue(__: number, previousValue: number) {
        this.previousValue = previousValue
    }

    componentWillLoad() {
        this.validateStep()
        this.previousValue = this.value
    }

    disconnectedCallback() {
        document.removeEventListener(this.isMouseEvent ? 'mousemove' : 'touchmove', this.onDragAction, eventOptions)
        document.removeEventListener(this.isMouseEvent ? 'mouseup' : 'touchend', this.onDragEnd, eventOptions)
    }

    validateStep() {
        if (!this.step || this.step <= 0 || this.step > 100) {
            this.step = 1
            consoleWarn('Slider', 'Invalid value provided for `step`')
        }
    }

    emitEvent() {
        if (this.previousValue !== this.value) {
            this.bkChange.emit(this.value)
        }
    }

    setDraggedValue = (xPosition: number, fireEvent = false) => {
        const { width, x } = this.el.getBoundingClientRect()
        const calculatedValue = Math.ceil(((xPosition - x) * 100) / (width * this.step)) * this.step
        this.value = calculatedValue >= 0 ? (calculatedValue <= 100 ? calculatedValue : 100) : 0
        if (fireEvent) {
            this.emitEvent()
        }
    }

    onDragAction = (e: MouseEvent | TouchEvent) => {
        e.stopImmediatePropagation()
        this.setDraggedValue(e instanceof MouseEvent ? e.clientX : e.touches[0].clientX)
    }

    onDragStart = (e: MouseEvent | TouchEvent) => {
        e.stopImmediatePropagation()
        this.isMouseEvent = e instanceof MouseEvent

        document.addEventListener(this.isMouseEvent ? 'mousemove' : 'touchmove', this.onDragAction, eventOptions)
        document.addEventListener(this.isMouseEvent ? 'mouseup' : 'touchend', this.onDragEnd, {
            ...eventOptions,
            once: true,
        })
    }

    onDragEnd = () => {
        document.removeEventListener(this.isMouseEvent ? 'mousemove' : 'touchmove', this.onDragAction, eventOptions)
        this.emitEvent()
    }

    onBarClick = (e: MouseEvent) => {
        this.setDraggedValue(e.clientX, true)
        this.dragHandle?.focus()
    }

    onHandleKeyDown = (e: KeyboardEvent) => {
        // e.stopImmediatePropagation()
        if (this.value < 100 && (e.which === 38 || e.which === 39)) {
            this.value += this.step
        } else if (this.value > 0 && (e.which === 37 || e.which === 40)) {
            this.value -= this.step
        }
    }

    onHandleKeyUp = (e: KeyboardEvent) => {
        if (e.which === 38 || e.which === 39 || e.which === 37 || e.which === 40) {
            this.emitEvent()
        }
    }

    onHandleClick = (e: Event) => {
        e.stopImmediatePropagation()
    }

    onHandleFocus = () => (this.toolTipState = true)

    onHandleBlur = () => (this.toolTipState = false)

    getButtonUI = (slot?: string) => <div class="bk-slider__button-inner" {...(slot ? { slot } : {})} />

    render() {
        return (
            <Host
                role="slider"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-value={this.value}
                aria-label="slider between 0 and 100"
            >
                <div
                    class={`bk-slider bk-slider--${this.variant} ${this.disabled ? 'bk-slider--disabled' : ''}`}
                    {...(!this.disabled
                        ? {
                              onClick: this.onBarClick,
                          }
                        : {})}
                >
                    <div style={{ width: `${this.value}%` }} class="bk-slider__bar"></div>

                    <div
                        style={{ left: `${this.value}%` }}
                        class="bk-slider__button"
                        tabIndex={0}
                        ref={(el) => (this.dragHandle = el)}
                        {...(!this.disabled
                            ? {
                                  onMouseDown: this.onDragStart,
                                  onTouchStart: this.onDragStart,
                                  onKeyDown: this.onHandleKeyDown,
                                  onKeyUp: this.onHandleKeyUp,
                                  onClick: this.onHandleClick,
                                  ...(this.showTooltip
                                      ? {
                                            onFocus: this.onHandleFocus,
                                            onBlur: this.onHandleBlur,
                                        }
                                      : {}),
                              }
                            : {})}
                    >
                        {this.showTooltip ? (
                            <bk-popover show={this.toolTipState} placement="top" triggerOn="manual">
                                {this.getButtonUI('control')}
                                <span slot="content" class="bk-slider__tooltip-content">
                                    {this.value}
                                </span>
                            </bk-popover>
                        ) : (
                            this.getButtonUI()
                        )}
                    </div>
                </div>
            </Host>
        )
    }
}
