import { Component, h, Prop, Host, Event } from '@stencil/core';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
/**
 * @slot - Use this to render the content.
 */
export class Alert {
    constructor() {
        /** Type of the alert */
        this.variant = 'default';
        /** Light or dark */
        this.shade = 'light';
        /** Make alert dismissible */
        this.dismissible = true;
        this.onCloseHandler = (e) => {
            e.preventDefault();
            this.bkClosed.emit();
        };
    }
    render() {
        return (h(Host, { role: "alert" },
            h("div", { class: `bk-alert bk-alert--${this.variant} bk-alert--${this.shade} ${this.dismissible ? 'bk-alert--dismissible' : ''}` },
                this.dismissible && (h("button", { class: "bk-button bk-button--text bk-alert__close-btn", onClick: this.onCloseHandler },
                    h("iron-icon", { icon: "close", class: "bk-icon" }))),
                h("slot", null))));
    }
    static get is() { return "bk-alert"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Variants",
                "resolved": "\"danger\" | \"default\" | \"info\" | \"success\" | \"warning\"",
                "references": {
                    "Variants": {
                        "location": "import",
                        "path": "../../shared/types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Type of the alert"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "'default'"
        },
        "shade": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Shades",
                "resolved": "\"dark\" | \"light\"",
                "references": {
                    "Shades": {
                        "location": "import",
                        "path": "../../shared/types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Light or dark"
            },
            "attribute": "shade",
            "reflect": false,
            "defaultValue": "'light'"
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
                "text": "Make alert dismissible"
            },
            "attribute": "dismissible",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "bkClosed",
            "name": "bkClosed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event fired when close button is clicked"
            },
            "complexType": {
                "original": "null",
                "resolved": "null",
                "references": {}
            }
        }]; }
}
