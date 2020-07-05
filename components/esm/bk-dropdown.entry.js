import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9596b62d.js';
import { c as createPopper } from './popper-7dab1803.js';

const indexCss = ".bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:\" \";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#ebeef5;border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:#ffffff;border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:#ffffff}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#ebeef5;border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:#ffffff;border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#ebeef5}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#ffffff}:host{display:inline-block}:host(.bk-dropdown--disabled){opacity:0.5;pointer-events:none}.bk-dropdown{display:inline-block;position:relative;color:#606266;font-size:14px}.bk-dropdown-menu{position:absolute;top:0;left:0;z-index:10;opacity:0;transition:opacity 0.2s ease-in;padding:10px;box-sizing:border-box}.bk-dropdown-menu__inner{position:relative;padding:20px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);background-color:#ffffff;border:1px solid #ebeef5;border-radius:4px;box-sizing:border-box;min-width:150px;max-width:300px;outline:none}.bk-dropdown-menu:focus:active,.bk-dropdown-menu:focus{outline-width:0}";

const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Open or close the menu */
        this.open = false;
        /** Close the menu when clicked outside */
        this.clickOutsideToClose = true;
        /** Enable or disable the dropdown */
        this.disabled = false;
        this.setFocus = (ref) => {
            if (ref) {
                ref.focus();
            }
        };
        this.onMenuClick = (e) => {
            e.stopPropagation();
        };
        this.onOutsideClickHandler = (e) => {
            if (!this.el.contains(e.target)) {
                this.open = false;
            }
        };
        this.onMenuKeydownHandler = (e) => {
            this.bkMenuKeydown.emit(e.key);
        };
        this.bkOpened = createEvent(this, "bkOpened", 7);
        this.bkClosed = createEvent(this, "bkClosed", 7);
        this.bkMenuKeydown = createEvent(this, "bkMenuKeydown", 7);
    }
    componentDidLoad() {
        this.menuHandler();
        this.controlRef = this.el.querySelector('[slot="control"]');
    }
    componentWillUpdate() {
        if (this.open && this.disabled) {
            this.open = false;
        }
    }
    componentDidUpdate() {
        this.menuHandler();
    }
    componentDidUnload() {
        this.destroyPopper();
    }
    menuHandler() {
        if (this.open && !this.disabled) {
            this.initPopper();
        }
        else {
            this.destroyPopper();
        }
        this.registerDomClick(this.clickOutsideToClose && this.open);
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
            });
            this.popoverRef.style.opacity = '1';
            if (this.menuRef) {
                this.setFocus(this.menuRef);
            }
            this.bkOpened.emit();
        }
    }
    destroyPopper() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = undefined;
            this.bkClosed.emit();
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    onClickHandler(e) {
        e.stopImmediatePropagation();
        if (!this.disabled) {
            this.open = !this.open;
        }
    }
    onCloseMenu() {
        this.open = false;
        if (this.controlRef) {
            this.timer = setTimeout(() => this.setFocus(this.controlRef));
        }
    }
    onKeyboardHandler(e) {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                e.stopImmediatePropagation();
                this.open = true;
                break;
            case 'Enter':
                e.stopImmediatePropagation();
                if (this.open && this.controlRef) {
                    this.setFocus(this.controlRef);
                }
                break;
            case 'Escape':
                e.stopImmediatePropagation();
                this.open = false;
                if (this.controlRef) {
                    this.setFocus(this.controlRef);
                }
                break;
        }
        this.bkMenuKeydown.emit(e.key);
    }
    registerDomClick(register = true) {
        if (register) {
            document.addEventListener('click', this.onOutsideClickHandler);
            document.addEventListener('keyup', this.onOutsideClickHandler);
        }
        else {
            document.removeEventListener('click', this.onOutsideClickHandler);
            document.removeEventListener('keyup', this.onOutsideClickHandler);
        }
    }
    render() {
        return (h(Host, { role: "button", "aria-haspopup": "true", "aria-expanded": this.open, class: this.disabled ? 'bk-dropdown--disabled' : '' }, h("div", { class: "bk-dropdown" }, h("slot", { name: "control" }), this.open && (h("div", { class: "bk-dropdown-menu bk-popper", onClick: this.onMenuClick, ref: (el) => (this.popoverRef = el), tabIndex: -1 }, h("div", { class: "bk-dropdown-menu__inner", tabIndex: -1, ref: (el) => (this.menuRef = el) }, h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }), h("slot", { name: "content" })))))));
    }
    get el() { return getElement(this); }
};
Dropdown.style = indexCss;

export { Dropdown as bk_dropdown };
