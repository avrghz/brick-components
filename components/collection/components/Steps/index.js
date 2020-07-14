var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Component, h, Prop, State, Event, Host } from '@stencil/core';
import ParsePropTo from '../../shared/decorators/parsePropTo';
import Step from './step';
export class Steps {
    constructor() {
        this._steps = [];
        /** Center title and description */
        this.isCentered = false;
        /** Display direction */
        this.direction = 'horizontal';
        /** Steps to be displayed */
        this.steps = [];
        this.isStyleCentered = () => !!this.isCentered && this.direction === 'horizontal';
        this.computeStepStyle = () => ({
            flexBasis: `${100 / (this.steps.length - (this.isStyleCentered() ? 0 : 1))}%`,
            marginRight: '0',
        });
    }
    render() {
        return (h(Host, { class: `is-${this.direction}` }, this._steps.map((_a, i) => {
            var { icon } = _a, rest = __rest(_a, ["icon"]);
            return (h(Step, Object.assign({ onClick: () => this.bkClick.emit(i), direction: this.direction, style: this.computeStepStyle(), isCentered: this.isStyleCentered(), isLast: this.steps.length - 1 === i }, (!!icon ? { icon } : { step: i + 1 }), rest)));
        })));
    }
    static get is() { return "bk-steps"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "isCentered": {
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
                "text": "Center title and description"
            },
            "attribute": "is-centered",
            "reflect": false,
            "defaultValue": "false"
        },
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Direction",
                "resolved": "\"horizontal\" | \"vertical\"",
                "references": {
                    "Direction": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Display direction"
            },
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'horizontal'"
        },
        "steps": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "StepComponent[] | string",
                "resolved": "StepComponent[] | string",
                "references": {
                    "StepComponent": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Steps to be displayed"
            },
            "attribute": "steps",
            "reflect": false,
            "defaultValue": "[]"
        }
    }; }
    static get states() { return {
        "_steps": {}
    }; }
    static get events() { return [{
            "method": "bkClick",
            "name": "bkClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "This event is fired when clicked on a step"
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
}
__decorate([
    ParsePropTo('array', '_steps')
], Steps.prototype, "steps", void 0);
