import { Component, h, Host, Prop, Event, EventEmitter, Element, Watch } from '@stencil/core'
import { createPopper, Instance, Placement } from '@popperjs/core'
import { TriggerOn } from './types'

/**
 * @slot control - The element on which the popover should apply.
 * @slot content - The content of the popover.
 */

@Component({
    tag: 'bk-popover',
    shadow: true,
    styleUrl: './index.scss',
})
export class Popover {
    private popperInstance?: Instance
    private popoverRef?: HTMLDivElement

    @Element() el!: HTMLElement

    /** This will set the trigger even */
    @Prop() triggerOn: TriggerOn = 'click'

    /** show or hide the popover. */
    @Prop({ reflect: true, mutable: true }) show = false

    /** This will set the trigger even */
    @Prop() placement: Placement = 'auto'

    /** Enable or disable popover */
    @Prop() disabled = false

    /** Fired when opened */
    @Event() bkOpened!: EventEmitter

    /** Fired when destroyed */
    @Event() bkClosed!: EventEmitter

    @Watch('triggerOn')
    onTriggerOnUpdated(current: TriggerOn, previous: TriggerOn) {
        if (current !== previous) {
            this.show = false
            this.destroyPopper()
            this.registerEvents(false, previous)
            this.registerEvents(true, current)
        }
    }

    componentWillLoad() {
        this.registerEvents(true, this.triggerOn)
    }

    componentDidUpdate() {
        if (this.show && !this.disabled) {
            this.initPopper()
        } else {
            this.destroyPopper()
        }
    }

    componentDidUnload() {
        this.destroyPopper()
        this.registerEvents(false, this.triggerOn)
    }

    onOpenHandler() {
        this.show = true
    }

    onCloseHandler() {
        this.show = false
    }

    onClickHandler = () => (this.show ? this.onCloseHandler() : this.onOpenHandler())

    registerEvents(register: boolean, eventType: TriggerOn) {
        const type = register ? 'addEventListener' : 'removeEventListener'
        switch (eventType) {
            case 'click':
                this.el[type]('click', this.onClickHandler, {
                    capture: true,
                })
                break
            case 'hover':
                this.el[type]('mouseenter', this.onOpenHandler, { capture: true })
                this.el[type]('mouseout', this.onCloseHandler, { capture: true })
                break
            case 'focus':
                this.el[type]('focus', this.onOpenHandler, { capture: true })
                this.el[type]('blur', this.onCloseHandler, { capture: true })
                break
        }
    }

    initPopper() {
        if (this.popoverRef) {
            this.popperInstance = createPopper(this.el, this.popoverRef, {
                placement: this.placement,
                modifiers: [
                    {
                        name: 'arrow',
                        options: {
                            padding: 12,
                        },
                    },
                ],
            })
            this.popoverRef.style.opacity = '1'
            this.bkOpened.emit()
        }
    }

    destroyPopper() {
        if (this.popperInstance) {
            this.popperInstance.destroy()
            this.popperInstance = undefined
            this.bkClosed.emit()
        }
    }

    render() {
        return (
            <Host aria-label="popover" class={this.disabled ? 'bk-popover--disabled' : ''}>
                <slot name="control" />

                {this.show && !this.disabled && (
                    <div class="bk-popover bk-popper" ref={(el) => (this.popoverRef = el)} role="tooltip">
                        <div class="bk-popover__inner">
                            <div class="bk-popper__arrow" data-popper-arrow></div>
                            <slot name="content"></slot>
                        </div>
                    </div>
                )}
            </Host>
        )
    }
}
