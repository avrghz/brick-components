import { Component, h, Host, Prop, Event, Element, Watch } from '@stencil/core';
import { createPopper } from '@popperjs/core';
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
        this.onClickHandler = () => (this.show ? this.onCloseHandler() : this.onOpenHandler());
    }
    onTriggerOnUpdated(current, previous) {
        if (current !== previous) {
            this.show = false;
            this.destroyPopper();
            this.registerEvents(false, previous);
            this.registerEvents(true, current);
        }
    }
    componentWillLoad() {
        this.registerEvents(true, this.triggerOn);
    }
    componentDidUpdate() {
        if (this.show && !this.disabled) {
            this.initPopper();
        }
        else {
            this.destroyPopper();
        }
    }
    componentDidUnload() {
        this.destroyPopper();
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
    initPopper() {
        if (this.popoverRef) {
            this.popperInstance = createPopper(this.el, this.popoverRef, {
                placement: this.placement,
                modifiers: [
                    {
                        name: 'arrow',
                        options: {
                            padding: 12,
                        },
                    },
                ],
            });
            this.popoverRef.style.opacity = '1';
            this.bkOpened.emit();
        }
    }
    destroyPopper() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = undefined;
            this.bkClosed.emit();
        }
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
            "methodName": "onTriggerOnUpdated"
        }]; }
}
