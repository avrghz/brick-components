import { Component, h, Host, Prop, Element, Event, EventEmitter, Listen, Watch } from '@stencil/core'
import SetPopper, { SetPopperInstance } from '../../decorators/popper'

/**
 * @slot control - Controlling element.
 * @slot content - The content of the menu.
 */

@Component({
    tag: 'bk-dropdown',
    shadow: true,
    styleUrl: './index.scss',
})
export class Dropdown {
    private timer?: ReturnType<typeof setTimeout>
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
    @Event() bkOpened!: EventEmitter

    /** Fired when destroyed */
    @Event() bkClosed!: EventEmitter

    /** Fired on keydown on menu */
    @Event() bkMenuKeydown!: EventEmitter

    @SetPopper({
        reference: 'el',
        popper: 'menuRef',
        controllingProp: 'open',
    })
    popperInstance?: SetPopperInstance

    @Watch('open')
    watchOpen() {
        this.handleMenuState()
    }

    componentWillLoad() {
        this.handleDisabledState()
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open)
    }

    componentWillUpdate() {
        this.handleDisabledState()
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open)
    }

    componentDidLoad() {
        this.controlRef = this.el.querySelector('[slot="control"]') as HTMLElement
        this.handleMenuState(true)
    }

    componentDidUpdate() {
        if (this.open) {
            this.setFocus(this.menuRef)
        }
    }

    disconnectedCallback() {
        this.toggleMenuVisibility(false)
    }

    handleDisabledState = () => {
        if (this.disabled) {
            this.open = false
        }
    }

    handleMenuState = (initialLoad = false) => {
        if (this.open) {
            this.bkOpened.emit()
        } else if (!initialLoad) {
            this.popperInstance?.destroy()
            this.bkClosed.emit()
        }
        this.toggleMenuVisibility(this.open)
    }

    setFocus = (ref: HTMLElement | undefined) => {
        if (ref) {
            ref.focus()
        }
    }

    toggleMenuVisibility = (visible = true) => {
        if (visible) {
            this.timer = setTimeout(() => {
                if (this.menuRef) {
                    this.menuRef.style.opacity = '1'
                }
            }, 150)
        } else {
            if (this.timer) {
                clearTimeout(this.timer)
            }
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

    @Listen('keydown')
    onKeyboardHandler(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
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

        this.bkMenuKeydown.emit(e.key)
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
