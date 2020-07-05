import { Component, h, Host, Prop, Listen, Element, Event, EventEmitter } from '@stencil/core'
import { createPopper, Instance } from '@popperjs/core'

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
    private timer?: number
    private popperInstance?: Instance
    private popoverRef?: HTMLDivElement
    private menuRef?: HTMLDivElement
    private controlRef?: HTMLElement

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

    componentDidLoad() {
        this.menuHandler()
        this.controlRef = this.el.querySelector('[slot="control"]') as HTMLElement
    }

    componentWillUpdate() {
        if (this.open && this.disabled) {
            this.open = false
        }
    }

    componentDidUpdate() {
        this.menuHandler()
    }

    componentDidUnload() {
        this.destroyPopper()
    }

    menuHandler() {
        if (this.open && !this.disabled) {
            this.initPopper()
        } else {
            this.destroyPopper()
        }

        this.registerDomClick(this.clickOutsideToClose && this.open)
    }

    initPopper() {
        if (this.popoverRef) {
            this.popperInstance = createPopper(this.el, this.popoverRef, {
                placement: 'bottom-end',
                modifiers: [
                    {
                        name: 'arrow',
                        options: {
                            padding: 12,
                        },
                    },
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: ['bottom-start', 'top-end', 'top-start'],
                        },
                    },
                ],
            })

            this.popoverRef.style.opacity = '1'

            if (this.menuRef) {
                this.setFocus(this.menuRef)
            }

            this.bkOpened.emit()
        }
    }

    setFocus = (ref: HTMLElement) => {
        if (ref) {
            ref.focus()
        }
    }

    destroyPopper() {
        if (this.popperInstance) {
            this.popperInstance.destroy()
            this.popperInstance = undefined
            this.bkClosed.emit()
        }

        if (this.timer) {
            clearTimeout(this.timer)
        }
    }

    @Listen('click')
    onClickHandler(e: Event) {
        e.stopImmediatePropagation()
        if (!this.disabled) {
            this.open = !this.open
        }
    }

    @Listen('bkCloseDropdownMenu')
    onCloseMenu() {
        this.open = false
        if (this.controlRef) {
            this.timer = setTimeout(() => this.setFocus(this.controlRef as HTMLElement))
        }
    }

    @Listen('keydown')
    onKeyboardHandler(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                e.stopImmediatePropagation()
                this.open = true
                break
            case 'Enter':
                e.stopImmediatePropagation()
                if (this.open && this.controlRef) {
                    this.setFocus(this.controlRef)
                }
                break
            case 'Escape':
                e.stopImmediatePropagation()
                this.open = false
                if (this.controlRef) {
                    this.setFocus(this.controlRef)
                }
                break
        }

        this.bkMenuKeydown.emit(e.key)
    }

    onMenuClick = (e: Event) => {
        e.stopPropagation()
    }

    onOutsideClickHandler = (e: Event) => {
        if (!this.el.contains(e.target as HTMLElement)) {
            this.open = false
        }
    }

    onMenuKeydownHandler = (e: KeyboardEvent) => {
        this.bkMenuKeydown.emit(e.key)
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

    render() {
        return (
            <Host
                role="button"
                aria-haspopup="true"
                aria-expanded={this.open}
                class={this.disabled ? 'bk-dropdown--disabled' : ''}
            >
                <div class="bk-dropdown">
                    <slot name="control"></slot>
                    {this.open && (
                        <div
                            class="bk-dropdown-menu bk-popper"
                            onClick={this.onMenuClick}
                            ref={(el) => (this.popoverRef = el)}
                            tabIndex={-1}
                        >
                            <div class="bk-dropdown-menu__inner" tabIndex={-1} ref={(el) => (this.menuRef = el)}>
                                <div class="bk-popper__arrow" data-popper-arrow></div>
                                <slot name="content"></slot>
                            </div>
                        </div>
                    )}
                </div>
            </Host>
        )
    }
}
