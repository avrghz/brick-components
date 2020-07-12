var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Host, Prop, Element, Event, Listen } from '@stencil/core';
import SetPopper from '../../decorators/popper';
/**
 * @slot control - Controlling element.
 * @slot content - The content of the menu.
 */
export class Dropdown {
    constructor() {
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
        this.handleMenuState = (initialLoad = false) => {
            var _a;
            if (this.open) {
                if (this.menuRef) {
                    this.menuRef.style.opacity = '1';
                }
            }
            else if (!initialLoad) {
                (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
            }
        };
        this.emitEvent = (initialLoad = false) => {
            if (this.open) {
                this.bkOpened.emit();
            }
            else if (!initialLoad) {
                this.bkClosed.emit();
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
    }
    componentWillLoad() {
        this.handleDisabledState();
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open);
    }
    componentDidLoad() {
        this.controlRef = this.el.querySelector('[slot="control"]');
        this.handleMenuState(true);
        this.emitEvent(false);
    }
    componentWillUpdate() {
        this.handleDisabledState();
        this.registerDomClick(!this.disabled && this.clickOutsideToClose && this.open);
    }
    componentDidUpdate() {
        this.handleMenuState();
        if (this.open) {
            this.setFocus(this.menuRef);
        }
        this.emitEvent();
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
            } },
            h("div", { class: "bk-dropdown" },
                h("slot", { name: "control" }),
                this.open && (h("div", { class: "bk-dropdown__menu bk-popper", ref: (el) => (this.menuRef = el), tabIndex: -1, onClick: (e) => e.stopPropagation() },
                    h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }),
                    h("slot", { name: "content" }))))));
    }
    static get is() { return "bk-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "open": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Open or close the menu"
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "clickOutsideToClose": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Close the menu when clicked outside"
            },
            "attribute": "click-outside-to-close",
            "reflect": false,
            "defaultValue": "true"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Enable or disable the dropdown"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "bkOpened",
            "name": "bkOpened",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when opened"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bkClosed",
            "name": "bkClosed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when destroyed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "bkCloseDropdownMenu",
            "method": "onCloseMenu",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "onKeyboardHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "onClickHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
__decorate([
    SetPopper({
        reference: 'el',
        popper: 'menuRef',
        controllingProp: 'open',
    })
], Dropdown.prototype, "popperInstance", void 0);
