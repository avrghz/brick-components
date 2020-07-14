'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-02137fd9.js');
require('./iron-icons-289711e1.js');
require('./lodash-9ed50696.js');
const parsePropTo = require('./parsePropTo-848798a8.js');

const Step = ({ step, icon, title, description, status, style, isCentered, isLast, direction, onClick, }) => {
    return (index.h("div", { class: Object.assign(Object.assign({ 'bk-step': true, 'is-center': !!isCentered, 'is-flex': !isCentered && !!isLast }, (!!status ? { [`is-${status}`]: true } : {})), { [`is-${direction}`]: true }), style: style },
        index.h("div", { class: "bk-step__head" },
            index.h("div", { class: "bk-step__line" },
                index.h("i", { class: "bk-step__line-inner" })),
            index.h("div", { class: `bk-step__icon ${!!icon ? 'is-icon' : 'is-text'}` },
                index.h("div", Object.assign({ class: "bk-step__icon-inner" }, (status !== 'wait' ? { onClick } : {})), !!icon ? index.h("iron-icon", { icon: icon, class: "bk-icon bk-icon--xxl" }) : step))),
        index.h("div", { class: "bk-step__main" },
            index.h("div", { class: "bk-step__title" }, title),
            description && index.h("div", { class: "bk-step__description" }, description))));
};

const indexCss = ".bk-step.sc-bk-steps{position:relative;flex-shrink:1}.bk-step.sc-bk-steps:last-of-type .bk-step__line.sc-bk-steps{display:none}.bk-step.sc-bk-steps:last-of-type.is-flex{flex-basis:auto !important;flex-shrink:0;flex-grow:0}.bk-step.sc-bk-steps:last-of-type .bk-step__main.sc-bk-steps,.bk-step.sc-bk-steps:last-of-type .bk-step__description.sc-bk-steps{padding-right:0}.bk-step__line.sc-bk-steps{position:absolute;border-color:inherit;background-color:#c0c4cc}.bk-step__line-inner.sc-bk-steps{display:block;border-width:1px;border-style:solid;border-color:inherit;transition:0.15s ease-out;box-sizing:border-box;width:0;height:0}.bk-step__main.sc-bk-steps{white-space:normal;text-align:left}.bk-step__head.sc-bk-steps{position:relative;width:100%}.bk-step__title.sc-bk-steps{font-size:16px;line-height:38px}.bk-step__description.sc-bk-steps{padding-right:10%;margin-top:-5px;font-size:12px;line-height:20px;font-weight:normal}.bk-step__icon.sc-bk-steps{position:relative;z-index:1;display:inline-flex;justify-content:center;align-items:center;width:24px;height:24px;font-size:14px;box-sizing:border-box;background:#ffffff;transition:0.15s ease-out}.bk-step__icon.is-text.sc-bk-steps{border-radius:50%;border:2px solid;border-color:inherit}.bk-step__icon.is-icon.sc-bk-steps{width:40px}.bk-step__icon-inner.sc-bk-steps{display:inline-block;user-select:none;text-align:center;font-weight:bold;line-height:1;color:inherit;cursor:pointer}.bk-step.is-process.sc-bk-steps .bk-step__head.sc-bk-steps{color:#303133;border-color:#303133}.bk-step.is-process.sc-bk-steps .bk-step__title.sc-bk-steps{font-weight:bold;color:#303133}.bk-step.is-process.sc-bk-steps .bk-step__description.sc-bk-steps{color:#303133}.bk-step.is-wait.sc-bk-steps .bk-step__head.sc-bk-steps{color:#c0c4cc;border-color:#c0c4cc}.bk-step.is-wait.sc-bk-steps .bk-step__title.sc-bk-steps{color:#c0c4cc}.bk-step.is-wait.sc-bk-steps .bk-step__description.sc-bk-steps{color:#c0c4cc}.bk-step.is-wait.sc-bk-steps .bk-step__icon-inner.sc-bk-steps{pointer-events:none}.bk-step.is-success.sc-bk-steps .bk-step__head.sc-bk-steps{color:#67c23a;border-color:#67c23a}.bk-step.is-success.sc-bk-steps .bk-step__title.sc-bk-steps{color:#67c23a}.bk-step.is-success.sc-bk-steps .bk-step__description.sc-bk-steps{color:#67c23a}.bk-step.is-error.sc-bk-steps .bk-step__head.sc-bk-steps{color:#f56c6c;border-color:#f56c6c}.bk-step.is-error.sc-bk-steps .bk-step__title.sc-bk-steps{color:#f56c6c}.bk-step.is-error.sc-bk-steps .bk-step__description.sc-bk-steps{color:#f56c6c}.bk-step.is-finish.sc-bk-steps .bk-step__head.sc-bk-steps{color:#409eff;border-color:#409eff}.bk-step.is-finish.sc-bk-steps .bk-step__title.sc-bk-steps{color:#409eff}.bk-step.is-finish.sc-bk-steps .bk-step__description.sc-bk-steps{color:#409eff}.bk-step.is-horizontal.sc-bk-steps{display:inline-block}.bk-step.is-horizontal.sc-bk-steps .bk-step__line.sc-bk-steps{height:2px;top:11px;left:0;right:0}.bk-step.is-vertical.sc-bk-steps{display:flex}.bk-step.is-vertical.sc-bk-steps .bk-step__head.sc-bk-steps{flex-grow:0;width:24px}.bk-step.is-vertical.sc-bk-steps .bk-step__main.sc-bk-steps{padding-left:10px;flex-grow:1}.bk-step.is-vertical.sc-bk-steps .bk-step__title.sc-bk-steps{line-height:24px;padding-bottom:8px}.bk-step.is-vertical.sc-bk-steps .bk-step__line.sc-bk-steps{width:2px;top:0;bottom:0;left:11px}.bk-step.is-vertical.sc-bk-steps .bk-step__icon.is-icon.sc-bk-steps{width:24px}.bk-step.is-center.sc-bk-steps .bk-step__head.sc-bk-steps{text-align:center}.bk-step.is-center.sc-bk-steps .bk-step__main.sc-bk-steps{text-align:center}.bk-step.is-center.sc-bk-steps .bk-step__description.sc-bk-steps{padding-left:20%;padding-right:20%}.bk-step.is-center.sc-bk-steps .bk-step__line.sc-bk-steps{left:50%;right:-50%}.sc-bk-steps-h{width:100%;display:flex}.is-horizontal.sc-bk-steps-h{white-space:nowrap}.is-vertical.sc-bk-steps-h{height:100%;flex-flow:column}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Steps = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.bkClick = index.createEvent(this, "bkClick", 7);
    }
    render() {
        return (index.h(index.Host, { class: `is-${this.direction}` }, this._steps.map((_a, i) => {
            var { icon } = _a, rest = __rest(_a, ["icon"]);
            return (index.h(Step, Object.assign({ onClick: () => this.bkClick.emit(i), direction: this.direction, style: this.computeStepStyle(), isCentered: this.isStyleCentered(), isLast: this.steps.length - 1 === i }, (!!icon ? { icon } : { step: i + 1 }), rest)));
        })));
    }
};
__decorate([
    parsePropTo.ParsePropTo('array', '_steps')
], Steps.prototype, "steps", void 0);
Steps.style = indexCss;

exports.bk_steps = Steps;
