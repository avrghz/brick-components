var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Host, Prop, Event, Element, Watch, Listen } from '@stencil/core';
import SetPopper from '../../shared/decorators/popper';
/**
 * @slot control - The element on which the popover should apply.
 * @slot content - The content of the popover.
 */
export class Popover {
    constructor() {
        /** This will set the trigger even */
        this.triggerOn = 'click';
        /** show or hide the popover. */
        this.show = false;
        /** This will set the trigger even */
        this.placement = 'auto';
        /** Enable or disable popover */
        this.disabled = false;
        this.setPlacement = async () => {
            var _a;
            return await ((_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.setOptions({
                placement: this.placement,
            }));
        };
        this.onClickHandler = () => (this.show ? this.onCloseHandler() : this.onOpenHandler());
    }
    watchTriggerOn(current, previous) {
        var _a;
        if (current !== previous) {
            this.show = false;
            (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
            this.registerEvents(false, previous);
            this.registerEvents(true, current);
        }
    }
    watchPlacement(current, previous) {
        if (current !== previous) {
            this.setPlacement().then();
        }
    }
    componentWillLoad() {
        this.registerEvents(true, this.triggerOn);
    }
    disconnectedCallback() {
        this.registerEvents(false, this.triggerOn);
    }
    onOpenHandler() {
        this.show = true;
    }
    onCloseHandler() {
        this.show = false;
    }
    registerEvents(register, eventType) {
        const type = register ? 'addEventListener' : 'removeEventListener';
        switch (eventType) {
            case 'click':
                this.el[type]('click', this.onClickHandler, {
                    capture: true,
                });
                break;
            case 'hover':
                this.el[type]('mouseenter', this.onOpenHandler, { capture: true });
                this.el[type]('mouseout', this.onCloseHandler, { capture: true });
                break;
            case 'focus':
                this.el[type]('focus', this.onOpenHandler, { capture: true });
                this.el[type]('blur', this.onCloseHandler, { capture: true });
                break;
        }
    }
    onPopoverOpened() {
        this.setPlacement().then();
    }
    render() {
        return (h(Host, { "aria-label": "popover", class: this.disabled ? 'bk-popover--disabled' : '' },
            h("slot", { name: "control" }),
            this.show && !this.disabled && (h("div", { class: "bk-popover bk-popper", ref: (el) => (this.popoverRef = el), role: "tooltip" },
                h("div", { class: "bk-popover__inner" },
                    h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }),
                    h("slot", { name: "content" }))))));
    }
    static get is() { return "bk-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "triggerOn": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "TriggerOn",
                "resolved": "\"click\" | \"focus\" | \"hover\" | \"manual\"",
                "references": {
                    "TriggerOn": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This will set the trigger even"
            },
            "attribute": "trigger-on",
            "reflect": false,
            "defaultValue": "'click'"
        },
        "show": {
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
                "text": "show or hide the popover."
            },
            "attribute": "show",
            "reflect": true,
            "defaultValue": "false"
        },
        "placement": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Placement",
                "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                "references": {
                    "Placement": {
                        "location": "import",
                        "path": "@popperjs/core"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This will set the trigger even"
            },
            "attribute": "placement",
            "reflect": false,
            "defaultValue": "'auto'"
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
    static get watchers() { return [{
            "propName": "triggerOn",
            "methodName": "watchTriggerOn"
        }, {
            "propName": "placement",
            "methodName": "watchPlacement"
        }]; }
    static get listeners() { return [{
            "name": "bkOpened",
            "method": "onPopoverOpened",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
__decorate([
    SetPopper({
        reference: 'el',
        popper: 'popoverRef',
        controllingProp: 'show',
        eventAfterOpened: 'bkOpened',
        eventAfterClosed: 'bkClosed',
    })
], Popover.prototype, "popperInstance", void 0);
