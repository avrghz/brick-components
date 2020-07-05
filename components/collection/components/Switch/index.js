import { Component, h, Prop, Event, Host, Listen } from '@stencil/core';
export class Switch {
    constructor() {
        /** Set default state of the switch */
        this.isOn = false;
        /** Enable or disable switch */
        this.disabled = false;
        /** Type of the alert */
        this.variant = 'default';
        this.updateState = () => {
            if (!this.disabled) {
                this.isOn = !this.isOn;
                this.bkChange.emit({
                    isOn: this.isOn,
                });
            }
        };
    }
    listenOnKeydown(e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            this.updateState();
        }
    }
    listenOnClick() {
        this.updateState();
    }
    render() {
        return (h(Host, { role: "switch", "aria-label": "switch", "aria-readonly": this.disabled, "aria-checked": this.isOn, tabIndex: "0" },
            h("div", { class: `bk-switch bk-switch--${this.variant}` },
                h("input", { type: "checkbox", name: "chk", class: "bk-switch__input", checked: this.isOn, disabled: this.disabled, tabIndex: -1, "aria-hidden": "true" }),
                h("span", { class: "bk-switch__core" }))));
    }
    static get is() { return "bk-switch"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "isOn": {
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
                "text": "Set default state of the switch"
            },
            "attribute": "is-on",
            "reflect": true,
            "defaultValue": "false"
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
                "text": "Enable or disable switch"
            },
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
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
        }
    }; }
    static get events() { return [{
            "method": "bkChange",
            "name": "bkChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired on every state change"
            },
            "complexType": {
                "original": "AVChange",
                "resolved": "AVChange",
                "references": {
                    "AVChange": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            }
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "listenOnKeydown",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "listenOnClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
