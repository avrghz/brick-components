import { Component, h, Host, Prop, Listen, Element, Event } from '@stencil/core';
import { createPopper } from '@popperjs/core';
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
        return (h(Host, { role: "button", "aria-haspopup": "true", "aria-expanded": this.open, class: this.disabled ? 'bk-dropdown--disabled' : '' },
            h("div", { class: "bk-dropdown" },
                h("slot", { name: "control" }),
                this.open && (h("div", { class: "bk-dropdown-menu bk-popper", onClick: this.onMenuClick, ref: (el) => (this.popoverRef = el), tabIndex: -1 },
                    h("div", { class: "bk-dropdown-menu__inner", tabIndex: -1, ref: (el) => (this.menuRef = el) },
                        h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }),
                        h("slot", { name: "content" })))))));
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
        }, {
            "method": "bkMenuKeydown",
            "name": "bkMenuKeydown",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired on keydown on menu"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClickHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
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
        }]; }
}
