import { Component, h, Host, Prop, Event, EventEmitter, Element, Watch, Listen } from '@stencil/core'
import { Placement } from '@popperjs/core'
import SetPopper, { SetPopperInstance } from '../../shared/decorators/popper'
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
    // @ts-ignore
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
    @Event({ bubbles: false }) bkOpened!: EventEmitter

    /** Fired when destroyed */
    @Event({ bubbles: false }) bkClosed!: EventEmitter

    @SetPopper({
        reference: 'el',
        popper: 'popoverRef',
        controllingProp: 'show',
        eventAfterOpened: 'bkOpened',
        eventAfterClosed: 'bkClosed',
    })
    popperInstance?: SetPopperInstance

    @Watch('triggerOn')
    watchTriggerOn(current: TriggerOn, previous: TriggerOn) {
        if (current !== previous) {
            this.show = false
            this.popperInstance?.destroy()
            this.registerEvents(false, previous)
            this.registerEvents(true, current)
        }
    }

    @Watch('placement')
    async watchPlacement(current: Placement, previous: Placement) {
        if (current !== previous) {
            await this.setPlacement()
        }
    }

    componentWillLoad() {
        this.registerEvents(true, this.triggerOn)
    }

    disconnectedCallback() {
        this.registerEvents(false, this.triggerOn)
    }

    setPlacement = async () =>
        await this.popperInstance?.setOptions({
            placement: this.placement,
        })

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

    @Listen('bkOpened')
    async onPopoverOpened() {
        await this.setPlacement()
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
