import { Component, h, Element, Prop, Listen } from '@stencil/core';
export class CollapseGroup {
    constructor() {
        this.isAccordion = true;
    }
    componentWillLoad() {
        this.collapsiblePanels = this.el.querySelectorAll('bk-collapse');
    }
    onCollapseOpened(e) {
        var _a;
        if (this.isAccordion) {
            (_a = this.collapsiblePanels) === null || _a === void 0 ? void 0 : _a.forEach((panel) => {
                if (e.target !== panel) {
                    panel.setAttribute('open', 'false');
                }
            });
        }
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "bk-collapse-group"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "isAccordion": {
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
                "text": ""
            },
            "attribute": "is-accordion",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "bkOpen",
            "method": "onCollapseOpened",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
