import { Component, h, Host, Prop, Element, Event, EventEmitter, Listen } from '@stencil/core'
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
    // private popperInstance?: Instance
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

    componentDidLoad() {
        this.controlRef = this.el.querySelector('[slot="control"]') as HTMLElement
    }

    componentDidUpdate() {
        this.setFocus(this.open ? this.menuRef : this.controlRef)
    }

    disconnectedCallback() {
        this.popperInstance?.destroy()
        this.toggleMenuVisibility(false)
    }

    handleMenuState = (open = true) => {
        this.open = open
        if (open) {
            this.bkOpened.emit()
            this.toggleMenuVisibility(true)
        } else {
            this.toggleMenuVisibility(false)
            this.popperInstance?.destroy()
            this.bkClosed.emit()
        }
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

    @Listen('click')
    onClickHandler(e: Event) {
        e.stopImmediatePropagation()
        if (!this.disabled) {
            this.handleMenuState(!this.open)
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
                        <div class="bk-dropdown-menu bk-popper" ref={(el) => (this.menuRef = el)} tabIndex={-1}>
                            <div class="bk-popper__arrow" data-popper-arrow></div>
                            <slot name="content"></slot>
                        </div>
                    )}
                </div>
            </Host>
        )
    }

    // componentDidUpdate() {
    //     this.initPopper()
    // }

    // initPopper() {
    //     if (this.menuRef) {
    //         this.popperInstance = createPopper(this.el, this.menuRef, {
    //             placement: 'bottom-end',
    //             modifiers: [
    //                 {
    //                     name: 'arrow',
    //                     options: {
    //                         padding: 12,
    //                     },
    //                 },
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom-start', 'top-end', 'top-start'],
    //                     },
    //                 },
    //             ],
    //         })

    //         this.menuRef.style.opacity = '1'

    //         //this.setFocus(this.menuRef)

    //         this.bkOpened.emit()
    //     }
    // }

    // componentDidLoad() {
    //     this.menuHandler()
    //     this.controlRef = this.el.querySelector('[slot="control"]') as HTMLElement
    // }

    // componentWillUpdate() {
    //     if (this.open && this.disabled) {
    //         this.open = false
    //     }
    // }

    // componentDidUpdate() {
    //     this.menuHandler()
    // }

    // componentDidUnload() {
    //     this.destroyPopper()
    // }

    // menuHandler() {
    //     if (this.open && !this.disabled) {
    //         this.initPopper()
    //     } else {
    //         this.destroyPopper()
    //     }

    //     this.registerDomClick(this.clickOutsideToClose && this.open)
    // }

    // setFocus = (ref: HTMLElement) => {
    //     if (ref) {
    //         ref.focus()
    //     }
    // }

    // destroyPopper() {
    //     if (this.popperInstance) {
    //         this.popperInstance.destroy()
    //         this.popperInstance = undefined
    //         this.bkClosed.emit()
    //     }

    //     if (this.timer) {
    //         clearTimeout(this.timer)
    //     }
    // }

    // @Listen('click')
    // onClickHandler(e: Event) {
    //     e.stopImmediatePropagation()
    //     if (!this.disabled) {
    //         this.open = !this.open
    //     }
    // }

    // @Listen('bkCloseDropdownMenu')
    // onCloseMenu() {
    //     this.open = false
    //     if (this.controlRef) {
    //         this.timer = setTimeout(() => this.setFocus(this.controlRef as HTMLElement))
    //     }
    // }

    // @Listen('keydown')
    // onKeyboardHandler(e: KeyboardEvent) {
    //     switch (e.key) {
    //         case 'ArrowDown':
    //         case 'ArrowUp':
    //             e.stopImmediatePropagation()
    //             this.open = true
    //             break
    //         case 'Enter':
    //             e.stopImmediatePropagation()
    //             if (this.open && this.controlRef) {
    //                 this.setFocus(this.controlRef)
    //             }
    //             break
    //         case 'Escape':
    //             e.stopImmediatePropagation()
    //             this.open = false
    //             if (this.controlRef) {
    //                 this.setFocus(this.controlRef)
    //             }
    //             break
    //     }

    //     this.bkMenuKeydown.emit(e.key)
    // }

    // onMenuClick = (e: Event) => {
    //     e.stopPropagation()
    // }

    // onOutsideClickHandler = (e: Event) => {
    //     if (!this.el.contains(e.target as HTMLElement)) {
    //         this.open = false
    //     }
    // }

    // onMenuKeydownHandler = (e: KeyboardEvent) => {
    //     this.bkMenuKeydown.emit(e.key)
    // }

    // registerDomClick(register = true) {
    //     if (register) {
    //         document.addEventListener('click', this.onOutsideClickHandler)
    //         document.addEventListener('keyup', this.onOutsideClickHandler)
    //     } else {
    //         document.removeEventListener('click', this.onOutsideClickHandler)
    //         document.removeEventListener('keyup', this.onOutsideClickHandler)
    //     }
    // }

    // render() {
    //     return (
    //         <Host
    //             role="button"
    //             aria-haspopup="true"
    //             aria-expanded={this.open}
    //             class={{
    //                 'bk-dropdown--disabled': this.disabled,
    //             }}
    //         >
    //             <div class="bk-dropdown">
    //                 <slot name="control"></slot>
    //                 {this.open && (
    //                     <div
    //                         class="bk-dropdown-menu bk-popper"
    //                         onClick={this.onMenuClick}
    //                         ref={(el) => (this.popoverRef = el)}
    //                         tabIndex={-1}
    //                     >
    //                         <div class="bk-dropdown-menu__inner" tabIndex={-1} ref={(el) => (this.menuRef = el)}>
    //                             <div class="bk-popper__arrow" data-popper-arrow></div>
    //                             <slot name="content"></slot>
    //                         </div>
    //                     </div>
    //                 )}
    //             </div>
    //         </Host>
    //     )
    // }
}
