import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-c7d865b7.js';
import { S as SetPopper } from './popper-60308508.js';

const indexCss = ".bk-popper{position:absolute;z-index:2000;opacity:0;transition:opacity 0.2s ease-in;box-sizing:border-box}.bk-popper:focus:active,.bk-popper:focus{outline-width:0}.bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:\" \";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#ebeef5;border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:#ffffff;border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:#ffffff}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#ebeef5;border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:#ffffff;border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#ebeef5}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#ffffff}:host{display:inline-block}:host(.bk-dropdown--disabled){opacity:0.5;pointer-events:none}.bk-dropdown{display:inline-block;position:relative;color:#606266;font-size:14px}.bk-dropdown__menu{padding:20px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);background-color:#ffffff;border:1px solid #ebeef5;border-radius:4px;min-width:150px;max-width:300px}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @slot control - Controlling element.
 * @slot content - The content of the menu.
 */
const modifiers = [
    {
        name: 'flip',
        options: {
            fallbackPlacements: ['bottom-start', 'top-end', 'top-start'],
        },
    },
];
const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Open or close the menu */
        this.open = false;
        /** Close the menu when clicked outside */
        this.clickOutsideToClose = true;
        /** Enable or disable the dropdown */
        this.disabled = false;
        this.handleDisabledState = () => {
            if (this.disabled) {
                this.open = false;
            }
        };
        this.setFocus = (ref) => {
            if (ref) {
                ref.focus();
            }
        };
        this.onOutsideClickHandler = (e) => {
            if (!this.el.contains(e.target)) {
                this.open = false;
            }
        };
        this.bkOpened = createEvent(this, "bkOpened", 7);
        this.bkClosed = createEvent(this, "bkClosed", 7);
    }
    componentWillLoad() {
        this.handleDisabledState();
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open);
    }
    componentDidLoad() {
        this.controlRef = this.el.querySelector('[slot="control"]');
    }
    componentWillUpdate() {
        this.handleDisabledState();
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open);
    }
    componentDidUpdate() {
        if (this.open) {
            this.setFocus(this.menuRef);
        }
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
    onCloseMenu() {
        this.open = false;
        this.setFocus(this.controlRef);
    }
    onKeyboardHandler(e) {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                this.open = true;
                break;
            case 'Enter':
                if (this.open && e.target === e.currentTarget) {
                    this.open = false;
                    this.setFocus(this.controlRef);
                }
                break;
            case 'Escape':
                e.stopImmediatePropagation();
                this.open = false;
                this.setFocus(this.controlRef);
                break;
        }
    }
    onClickHandler(e) {
        e.stopImmediatePropagation();
        if (!this.disabled) {
            this.open = !this.open;
        }
    }
    render() {
        return (h(Host, { role: "button", "aria-haspopup": "true", "aria-expanded": this.open, class: {
                'bk-dropdown--disabled': this.disabled,
            } }, h("div", { class: "bk-dropdown" }, h("slot", { name: "control" }), this.open && (h("div", { class: "bk-dropdown__menu bk-popper", ref: (el) => (this.menuRef = el), tabIndex: -1, onClick: (e) => e.stopPropagation() }, h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }), h("slot", { name: "content" }))))));
    }
    get el() { return getElement(this); }
};
__decorate([
    SetPopper({
        reference: 'el',
        popper: 'menuRef',
        controllingProp: 'open',
        modifiers,
        initialPlacement: 'bottom-end',
        eventAfterOpened: 'bkOpened',
        eventAfterClosed: 'bkClosed',
    })
], Dropdown.prototype, "popperInstance", void 0);
Dropdown.style = indexCss;

export { Dropdown as bk_dropdown };
