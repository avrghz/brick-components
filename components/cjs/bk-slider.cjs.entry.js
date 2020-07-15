'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4697a7c9.js');
const util = require('./util-654546b2.js');

const indexCss = ":host{display:block;width:100%;font-size:14px}.bk-slider{width:100%;height:0.25em;margin:1em 0;background-color:#e4e7ed;border-radius:0.25em;position:relative;vertical-align:middle;opacity:0.5;pointer-events:none}.bk-slider__bar{height:0.25em;border-top-left-radius:0.125em;border-bottom-left-radius:0.125em;position:absolute;transition:width 0.2s linear}.bk-slider__button{height:2em;width:2em;position:absolute;z-index:1001;top:0.125em;left:0;transform:translate(-50%, -50%);background-color:transparent;text-align:center;user-select:none;line-height:normal;transition:left 0.2s linear}.bk-slider__button::after{content:\"\";height:100%;display:inline-block;vertical-align:middle}.bk-slider__button-inner{width:1em;height:1em;background-color:#ffffff;border-radius:50%;transition:0.2s;user-select:none;display:inline-block;vertical-align:middle}.bk-slider__tooltip-content{white-space:nowrap}.bk-slider.bk-slider--info .bk-slider__bar{background-color:#909399}.bk-slider.bk-slider--info .bk-slider__button-inner{border:2px solid #909399}.bk-slider.bk-slider--danger .bk-slider__bar{background-color:#f56c6c}.bk-slider.bk-slider--danger .bk-slider__button-inner{border:2px solid #f56c6c}.bk-slider.bk-slider--warning .bk-slider__bar{background-color:#e6a23c}.bk-slider.bk-slider--warning .bk-slider__button-inner{border:2px solid #e6a23c}.bk-slider.bk-slider--success .bk-slider__bar{background-color:#67c23a}.bk-slider.bk-slider--success .bk-slider__button-inner{border:2px solid #67c23a}.bk-slider.bk-slider--default .bk-slider__bar{background-color:#409eff}.bk-slider.bk-slider--default .bk-slider__button-inner{border:2px solid #409eff}.bk-slider:not(.bk-slider--disabled){pointer-events:all;opacity:1}.bk-slider:not(.bk-slider--disabled) .bk-slider__button{cursor:grab}.bk-slider:not(.bk-slider--disabled) .bk-slider__button:hover .bk-slider__button-inner,.bk-slider:not(.bk-slider--disabled) .bk-slider__button:active .bk-slider__button-inner{transform:scale(1.2)}.bk-slider--disabled .bk-slider__button{outline:none}";

const eventOptions = {
    capture: true,
};
const Slider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bkChange = index.createEvent(this, "bkChange", 7);
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
        this.getButtonUI = (slot) => index.h("div", Object.assign({ class: "bk-slider__button-inner" }, (slot ? { slot } : {})));
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
            util.consoleWarn('Slider', 'Invalid value provided for `step`');
        }
    }
    emitEvent() {
        if (this.previousValue !== this.value) {
            this.bkChange.emit(this.value);
        }
    }
    render() {
        return (index.h(index.Host, { role: "slider", "aria-valuemin": "0", "aria-valuemax": "100", "aria-value": this.value, "aria-label": "slider between 0 and 100" }, index.h("div", Object.assign({ class: `bk-slider bk-slider--${this.variant} ${this.disabled ? 'bk-slider--disabled' : ''}` }, (!this.disabled
            ? {
                onClick: this.onBarClick,
            }
            : {})), index.h("div", { style: { width: `${this.value}%` }, class: "bk-slider__bar" }), index.h("div", Object.assign({ style: { left: `${this.value}%` }, class: "bk-slider__button", tabIndex: 0, ref: (el) => (this.dragHandle = el) }, (!this.disabled
            ? {
                onMouseDown: this.onDragStart,
                onTouchStart: this.onDragStart,
                onKeyDown: this.onHandleKeyDown,
                onKeyUp: this.onHandleKeyUp,
                onClick: this.onHandleClick,
            }
            : {})), this.showTooltip ? (index.h("bk-popover", { show: this.toolTipState, placement: "top" }, this.getButtonUI('control'), index.h("span", { slot: "content", class: "bk-slider__tooltip-content" }, this.value))) : (this.getButtonUI())))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "step": ["watchStep"],
        "value": ["watchValue"]
    }; }
};
Slider.style = indexCss;

exports.bk_slider = Slider;
