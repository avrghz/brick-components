import { Component, h, Prop, Event, State, Listen, Element } from '@stencil/core';
import '@a11y/focus-trap';
/**
 * @slot - Triggering control goes here
 */
export class PopConfirm {
    constructor() {
        this.show = false;
        /** Confirm button text */
        this.confirmButtonText = 'Confirm';
        /** Cancel button text */
        this.cancelButtonText = 'Cancel';
        /** Confirm button variant */
        this.confirmButtonVariant = 'primary';
        /** Cancel button variant */
        this.cancelButtonVariant = 'default';
        /** Enable or disable popover */
        this.disabled = false;
        this.onActionHandler = (e, eventToEmit) => {
            e.stopImmediatePropagation();
            this.show = false;
            this.focusOnControl();
            eventToEmit.emit();
        };
        this.focusOnControl = () => {
            const control = this.el.querySelector('[slot=control]');
            control.focus();
        };
        this.onPopConfirmOpenHandler = () => {
            var _a;
            (_a = this.cancelButtonRef) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.getButtonVariant = (variant) => (variant !== 'default' ? `bk-button--${variant}` : '');
    }
    onClickHandler() {
        if (!this.disabled && !this.show) {
            this.show = true;
        }
    }
    render() {
        return (h("bk-popover", { show: this.show, triggerOn: "manual", disabled: this.disabled, placement: "bottom-end", onBkOpened: this.onPopConfirmOpenHandler, "aria-label": "confirmation popup" },
            h("div", { class: "bk-pop-confirm", slot: "content" },
                h("focus-trap", null,
                    h("div", { class: "bk-pop-confirm__message" }, this.message),
                    h("div", { class: "bk-pop-confirm__footer" },
                        h("button", { class: `bk-button bk-button--mini ${this.getButtonVariant(this.cancelButtonVariant)}`, onClick: (e) => this.onActionHandler(e, this.bkCancelled), ref: (el) => (this.cancelButtonRef = el) }, this.cancelButtonText),
                        h("button", { class: `bk-button bk-button--mini ${this.getButtonVariant(this.confirmButtonVariant)}`, onClick: (e) => this.onActionHandler(e, this.bkConfirmed) }, this.confirmButtonText)))),
            h("slot", { name: "control" })));
    }
    static get is() { return "bk-pop-confirm"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "message": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Message to show"
            },
            "attribute": "message",
            "reflect": false
        },
        "confirmButtonText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Confirm button text"
            },
            "attribute": "confirm-button-text",
            "reflect": false,
            "defaultValue": "'Confirm'"
        },
        "cancelButtonText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Cancel button text"
            },
            "attribute": "cancel-button-text",
            "reflect": false,
            "defaultValue": "'Cancel'"
        },
        "confirmButtonVariant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ButtonVariants",
                "resolved": "\"danger\" | \"default\" | \"info\" | \"primary\" | \"success\" | \"text\" | \"warning\"",
                "references": {
                    "ButtonVariants": {
                        "location": "import",
                        "path": "../../shared/types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Confirm button variant"
            },
            "attribute": "confirm-button-variant",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "cancelButtonVariant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ButtonVariants",
                "resolved": "\"danger\" | \"default\" | \"info\" | \"primary\" | \"success\" | \"text\" | \"warning\"",
                "references": {
                    "ButtonVariants": {
                        "location": "import",
                        "path": "../../shared/types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Cancel button variant"
            },
            "attribute": "cancel-button-variant",
            "reflect": false,
            "defaultValue": "'default'"
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
                "text": "Enable or disable popover"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "show": {}
    }; }
    static get events() { return [{
            "method": "bkConfirmed",
            "name": "bkConfirmed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "on confirm action"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bkCancelled",
            "name": "bkCancelled",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "on cancel action"
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
        }]; }
}
