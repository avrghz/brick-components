import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-c7d865b7.js';
import { S as SetPopper } from './popper-60308508.js';

const indexCss = ".bk-popper{position:absolute;z-index:2000;opacity:0;transition:opacity 0.2s ease-in;box-sizing:border-box}.bk-popper:focus:active,.bk-popper:focus{outline-width:0}.bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:\" \";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#ebeef5;border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:#ffffff;border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:#ffffff}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#ebeef5;border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:#ffffff;border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#ebeef5}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#ffffff}:host{display:inline-block}:host(.bk-popover--disabled){opacity:0.5;pointer-events:none}.bk-popover{background:#ffffff;border-radius:4px;border:1px solid #ebeef5;padding:16px 20px;color:#606266;line-height:1.4;text-align:justify;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);word-break:break-all;font-size:14px}";

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
const Popover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.bkOpened = createEvent(this, "bkOpened", 7);
        this.bkClosed = createEvent(this, "bkClosed", 7);
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
        return (h(Host, { "aria-label": "popover", class: this.disabled ? 'bk-popover--disabled' : '' }, h("slot", { name: "control" }), this.show && !this.disabled && (h("div", { class: "bk-popover bk-popper", ref: (el) => (this.popoverRef = el), role: "tooltip" }, h("div", { class: "bk-popover__inner" }, h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }), h("slot", { name: "content" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "triggerOn": ["watchTriggerOn"],
        "placement": ["watchPlacement"]
    }; }
};
__decorate([
    SetPopper({
        reference: 'el',
        popper: 'popoverRef',
        controllingProp: 'show',
        eventAfterOpened: 'bkOpened',
        eventAfterClosed: 'bkClosed',
    })
], Popover.prototype, "popperInstance", void 0);
Popover.style = indexCss;

export { Popover as bk_popover };
