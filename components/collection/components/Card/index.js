import { Component, h, Prop } from '@stencil/core';
/**
 * @slot header - Use this to render the card header.
 * @slot body - Use this to render the card body.
 */
export class Card {
    constructor() {
        /** Set shadow of the component */
        this.shadow = 'never';
    }
    render() {
        return (h("div", { role: "card", class: `bk-card is-${this.shadow}-shadow` },
            h("slot", { name: "header" }),
            h("slot", { name: "body" })));
    }
    static get is() { return "bk-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "shadow": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Shadow",
                "resolved": "\"always\" | \"hover\" | \"never\"",
                "references": {
                    "Shadow": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set shadow of the component"
            },
            "attribute": "shadow",
            "reflect": false,
            "defaultValue": "'never'"
        }
    }; }
}
