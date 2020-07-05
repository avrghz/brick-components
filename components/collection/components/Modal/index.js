import { Component, h, Host, Prop, Event, Element, State } from '@stencil/core';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
/**
 * @slot body - Body content of the modal popup.
 * @slot footer - footer content of the modal popup.
 */
export class Modal {
    constructor() {
        this.hasFooter = false;
        /** Show or hide the modal */
        this.open = false;
        /** Is dismissible or not */
        this.dismissible = true;
        this.toggleFooter = () => {
            this.hasFooter = this.el.querySelectorAll('[slot=footer]').length === 1;
        };
        this.resetTimeout = () => {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
        };
        this.onAfterModalOpen = () => {
            var _a, _b;
            if (this.open) {
                (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.classList.add('open');
                (_b = this.backdropRef) === null || _b === void 0 ? void 0 : _b.classList.add('open');
                this.el.focus();
            }
        };
        this.onBeforeModalClose = () => {
            if (!this.open) {
                if (this.modalRef && this.backdropRef) {
                    this.modalRef.classList.remove('open');
                    this.backdropRef.classList.remove('open');
                    this.modalRef.classList.add('close');
                }
            }
        };
        this.onCloseHandler = (e) => {
            if (this.dismissible) {
                e.preventDefault();
                this.open = false;
            }
        };
    }
    componentWillLoad() {
        this.emitEvent(this.open, this.bkOpen);
    }
    componentDidLoad() {
        this.emitEvent(this.open, this.bkOpened);
        this.onAfterModalOpen();
    }
    componentWillUpdate() {
        this.toggleFooter();
        this.emitEvent(this.open, this.bkOpen);
        this.emitEvent(!this.open, this.bkClose);
        this.onBeforeModalClose();
        return new Promise((resolve) => (this.timeout = setTimeout(resolve, 300)));
    }
    componentDidUpdate() {
        this.emitEvent(this.open, this.bkOpened);
        this.emitEvent(!this.open, this.bkClosed);
        this.onAfterModalOpen();
    }
    componentDidUnload() {
        this.resetTimeout();
    }
    emitEvent(condition, event) {
        if (condition) {
            event.emit();
        }
    }
    render() {
        if (!this.open) {
            return null;
        }
        return (h(Host, { role: "dialog", tabIndex: 0, "aria-modal": "true", "aria-hidden": this.open },
            h("div", { class: "bk-modal" },
                h("div", { role: "document", class: "bk-modal__content", ref: (el) => (this.modalRef = el) },
                    h("focus-trap", null,
                        this.header && (h("header", { class: "bk-modal__header" },
                            h("span", { class: "bk-modal__title" }, this.header),
                            this.dismissible && (h("button", { tabIndex: 0, "aria-label": "Close", class: "bk-button bk-button--text bk-modal__close-btn", onClick: this.onCloseHandler },
                                h("iron-icon", { icon: "close", class: "bk-icon" }))))),
                        h("main", { class: "bk-modal__body" },
                            h("slot", { name: "body" })),
                        this.hasFooter && (h("footer", { class: "bk-modal__footer" },
                            h("slot", { name: "footer" }))))),
                h("div", Object.assign({ ref: (el) => (this.backdropRef = el), class: "bk-modal__backdrop" }, (this.dismissible ? { onClick: this.onCloseHandler } : {}))))));
    }
    static get is() { return "bk-modal"; }
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
                "text": "Show or hide the modal"
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "header": {
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
                "text": "Header to be shown"
            },
            "attribute": "header",
            "reflect": false
        },
        "dismissible": {
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
                "text": "Is dismissible or not"
            },
            "attribute": "dismissible",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "hasFooter": {}
    }; }
    static get events() { return [{
            "method": "bkOpen",
            "name": "bkOpen",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when modal is about to open"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bkOpened",
            "name": "bkOpened",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired after modal is opened"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bkClose",
            "name": "bkClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when modal is about to close"
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
                "text": "Fired after modal is closed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
