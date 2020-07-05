'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-703095ad.js');
const popper = require('./popper-e5c81cba.js');

const indexCss = ".bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:\" \";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#ebeef5;border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:#ffffff;border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:#ffffff}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#ebeef5;border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:#ffffff;border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#ebeef5}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#ffffff}:host{display:inline-block}:host(.bk-popover--disabled){opacity:0.5;pointer-events:none}.bk-popover{position:absolute;padding:10px;opacity:0;transition:opacity 0.2s ease-in}.bk-popover__inner{position:relative;background:#ffffff;border-radius:4px;border:1px solid #ebeef5;padding:16px 20px;z-index:2000;color:#606266;line-height:1.4;text-align:justify;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);word-break:break-all;font-size:14px}.bk-popover:focus:active,.bk-popover:focus{outline-width:0}";

const Popover = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        /** This will set the trigger even */
        this.triggerOn = 'click';
        /** show or hide the popover. */
        this.show = false;
        /** This will set the trigger even */
        this.placement = 'auto';
        /** Enable or disable popover */
        this.disabled = false;
        this.onClickHandler = () => (this.show ? this.onCloseHandler() : this.onOpenHandler());
        this.bkOpened = index$1.createEvent(this, "bkOpened", 7);
        this.bkClosed = index$1.createEvent(this, "bkClosed", 7);
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
            this.popperInstance = popper.createPopper(this.el, this.popoverRef, {
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
        return (index$1.h(index$1.Host, { "aria-label": "popover", class: this.disabled ? 'bk-popover--disabled' : '' }, index$1.h("slot", { name: "control" }), this.show && !this.disabled && (index$1.h("div", { class: "bk-popover bk-popper", ref: (el) => (this.popoverRef = el), role: "tooltip" }, index$1.h("div", { class: "bk-popover__inner" }, index$1.h("div", { class: "bk-popper__arrow", "data-popper-arrow": true }), index$1.h("slot", { name: "content" }))))));
    }
    get el() { return index$1.getElement(this); }
    static get watchers() { return {
        "triggerOn": ["onTriggerOnUpdated"]
    }; }
};
Popover.style = indexCss;

exports.bk_popover = Popover;
