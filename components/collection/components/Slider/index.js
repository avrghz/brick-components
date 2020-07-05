import { Component, h, Host, Prop, Element, Event, Watch, State } from '@stencil/core';
import { consoleWarn } from '../../shared/util';
const eventOptions = {
    capture: true,
};
export class Slider {
    constructor() {
        this.isMouseEvent = true;
        this.previousValue = 0;
        this.toolTipState = false;
        /** Set value */
        this.value = 0;
        /** Set the stepper for the slider */
        this.step = 1;
        /** Type of the slider */
        this.variant = 'default';
        /** Enable or disable slider */
        this.disabled = false;
        /** Show or hide the tooltip */
        this.showTooltip = true;
        this.setDraggedValue = (xPosition, fireEvent = false) => {
            const { width, x } = this.el.getBoundingClientRect();
            const calculatedValue = Math.ceil(((xPosition - x) * 100) / (width * this.step)) * this.step;
            this.value = calculatedValue >= 0 ? (calculatedValue <= 100 ? calculatedValue : 100) : 0;
            if (fireEvent) {
                this.emitEvent();
            }
        };
        this.onDragAction = (e) => {
            e.stopImmediatePropagation();
            this.setDraggedValue(e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
        };
        this.onDragStart = (e) => {
            e.stopImmediatePropagation();
            this.isMouseEvent = e instanceof MouseEvent;
            this.toolTipState = this.showTooltip && true;
            document.addEventListener(this.isMouseEvent ? 'mousemove' : 'touchmove', this.onDragAction, eventOptions);
            document.addEventListener(this.isMouseEvent ? 'mouseup' : 'touchend', this.onDragEnd, Object.assign(Object.assign({}, eventOptions), { once: true }));
        };
        this.onDragEnd = () => {
            this.toolTipState = false;
            document.removeEventListener(this.isMouseEvent ? 'mousemove' : 'touchmove', this.onDragAction, eventOptions);
            this.emitEvent();
        };
        this.onBarClick = (e) => {
            var _a;
            this.setDraggedValue(e.clientX, true);
            (_a = this.dragHandle) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.onHandleKeyDown = (e) => {
            e.stopImmediatePropagation();
            if (this.value < 100 && (e.which === 38 || e.which === 39)) {
                this.value += this.step;
            }
            else if (this.value > 0 && (e.which === 37 || e.which === 40)) {
                this.value -= this.step;
            }
        };
        this.onHandleKeyUp = (e) => {
            if (e.which === 38 || e.which === 39 || e.which === 37 || e.which === 40) {
                this.emitEvent();
            }
        };
        this.onHandleClick = (e) => {
            e.stopImmediatePropagation();
        };
        this.getButtonUI = (slot) => h("div", Object.assign({ class: "bk-slider__button-inner" }, (slot ? { slot } : {})));
    }
    watchStep() {
        this.validateStep();
    }
    watchValue(__, previousValue) {
        this.previousValue = previousValue;
    }
    componentWillLoad() {
        this.validateStep();
        this.previousValue = this.value;
    }
    componentDidUnload() {
        document.removeEventListener(this.isMouseEvent ? 'mousemove' : 'touchmove', this.onDragAction, eventOptions);
        document.removeEventListener(this.isMouseEvent ? 'mouseup' : 'touchend', this.onDragEnd, eventOptions);
    }
    validateStep() {
        if (!this.step || this.step <= 0 || this.step > 100) {
            this.step = 1;
            consoleWarn('Slider', 'Invalid value provided for `step`');
        }
    }
    emitEvent() {
        if (this.previousValue !== this.value) {
            this.bkChange.emit(this.value);
        }
    }
    render() {
        return (h(Host, { role: "slider", "aria-valuemin": "0", "aria-valuemax": "100", "aria-value": this.value, "aria-label": "slider between 0 and 100" },
            h("div", Object.assign({ class: `bk-slider bk-slider--${this.variant} ${this.disabled ? 'bk-slider--disabled' : ''}` }, (!this.disabled
                ? {
                    onClick: this.onBarClick,
                }
                : {})),
                h("div", { style: { width: `${this.value}%` }, class: "bk-slider__bar" }),
                h("div", Object.assign({ style: { left: `${this.value}%` }, class: "bk-slider__button", tabIndex: 0, ref: (el) => (this.dragHandle = el) }, (!this.disabled
                    ? {
                        onMouseDown: this.onDragStart,
                        onTouchStart: this.onDragStart,
                        onKeyDown: this.onHandleKeyDown,
                        onKeyUp: this.onHandleKeyUp,
                        onClick: this.onHandleClick,
                    }
                    : {})), this.showTooltip ? (h("bk-popover", { show: this.toolTipState, placement: "top" },
                    this.getButtonUI('control'),
                    h("span", { slot: "content", class: "bk-slider__tooltip-content" }, this.value))) : (this.getButtonUI())))));
    }
    static get is() { return "bk-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set value"
            },
            "attribute": "value",
            "reflect": true,
            "defaultValue": "0"
        },
        "step": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set the stepper for the slider"
            },
            "attribute": "step",
            "reflect": false,
            "defaultValue": "1"
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
                "text": "Type of the slider"
            },
            "attribute": "variant",
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
                "text": "Enable or disable slider"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "showTooltip": {
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
                "text": "Show or hide the tooltip"
            },
            "attribute": "show-tooltip",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "toolTipState": {}
    }; }
    static get events() { return [{
            "method": "bkChange",
            "name": "bkChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when value changed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "step",
            "methodName": "watchStep"
        }, {
            "propName": "value",
            "methodName": "watchValue"
        }]; }
}
