import { Component, h, Host, Prop, Element, Event, EventEmitter, Listen } from '@stencil/core'
import SetPopper, { SetPopperInstance, Setting } from '../../shared/decorators/popper'

/**
 * @slot control - Controlling element.
 * @slot content - The content of the menu.
 */

const modifiers: Setting['modifiers'] = [
    {
        name: 'flip',
        options: {
            fallbackPlacements: ['bottom-start', 'top-end', 'top-start'],
        },
    },
]

@Component({
    tag: 'bk-dropdown',
    shadow: true,
    styleUrl: './index.scss',
})
export class Dropdown {
    private controlRef?: HTMLElement
    private menuRef?: HTMLDivElement

    @Element() el!: HTMLElement

    /** Open or close the menu */
    @Prop({ reflect: true, mutable: true }) open = false

    /** Close the menu when clicked outside */
    @Prop() clickOutsideToClose = true

    /** Enable or disable the dropdown */
    @Prop() disabled = false

    /** Fired when opened */
    @Event({ bubbles: false }) bkOpened!: EventEmitter

    /** Fired when destroyed */
    @Event({ bubbles: false }) bkClosed!: EventEmitter

    @SetPopper({
        reference: 'el',
        popper: 'menuRef',
        controllingProp: 'open',
        modifiers,
        initialPlacement: 'bottom-end',
        eventAfterOpened: 'bkOpened',
        eventAfterClosed: 'bkClosed',
    })
    popperInstance?: SetPopperInstance

    componentWillLoad() {
        this.handleDisabledState()
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open)
    }

    componentDidLoad() {
        this.controlRef = this.el.querySelector('[slot="control"]') as HTMLElement
    }

    componentWillUpdate() {
        this.handleDisabledState()
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open)
    }

    componentDidUpdate() {
        if (this.open) {
            this.setFocus(this.menuRef)
        }
    }

    handleDisabledState = () => {
        if (this.disabled) {
            this.open = false
        }
    }

    setFocus = (ref: HTMLElement | undefined) => {
        if (ref) {
            ref.focus()
        }
    }

    onOutsideClickHandler = (e: Event) => {
        if (!this.el.contains(e.target as HTMLElement)) {
            this.open = false
        }
    }

    registerDomClick(register = true) {
        if (register) {
            document.addEventListener('click', this.onOutsideClickHandler)
            document.addEventListener('keyup', this.onOutsideClickHandler)
        } else {
            document.removeEventListener('click', this.onOutsideClickHandler)
            document.removeEventListener('keyup', this.onOutsideClickHandler)
        }
    }

    @Listen('bkCloseDropdownMenu')
    onCloseMenu() {
        this.open = false
        this.setFocus(this.controlRef)
    }

    @Listen('keydown')
    onKeyboardHandler(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                e.preventDefault()
                this.open = true
                break
            case 'Enter':
                if (this.open && e.target === e.currentTarget) {
                    this.open = false
                    this.setFocus(this.controlRef)
                }
                break
            case 'Escape':
                e.stopImmediatePropagation()
                this.open = false
                this.setFocus(this.controlRef)
                break
        }
    }

    @Listen('click')
    onClickHandler(e: Event) {
        e.stopImmediatePropagation()
        if (!this.disabled) {
            this.open = !this.open
        }
    }

    render() {
        return (
            <Host
                role="button"
                aria-haspopup="true"
                aria-expanded={this.open}
                class={{
                    'bk-dropdown--disabled': this.disabled,
                }}
            >
                <div class="bk-dropdown">
                    <slot name="control"></slot>
                    {this.open && (
                        <div
                            class="bk-dropdown__menu bk-popper"
                            ref={(el) => (this.menuRef = el)}
                            tabIndex={-1}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div class="bk-popper__arrow" data-popper-arrow></div>
                            <slot name="content"></slot>
                        </div>
                    )}
                </div>
            </Host>
        )
    }
}
