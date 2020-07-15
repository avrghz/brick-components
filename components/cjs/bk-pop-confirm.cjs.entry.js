'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4697a7c9.js');
require('./focus-trap-54f8125c.js');

const indexCss = ".bk-pop-confirm__footer.sc-bk-pop-confirm{display:flex;justify-content:flex-end;align-items:center;margin-top:16px}";

const PopConfirm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bkConfirmed = index.createEvent(this, "bkConfirmed", 7);
        this.bkCancelled = index.createEvent(this, "bkCancelled", 7);
        this.show = false;
        /** Confirm button text */
        this.confirmButtonText = 'Confirm';
        /** Cancel button text */
        this.cancelButtonText = 'Cancel';
        /** Confirm button variant */
        this.confirmButtonVariant = 'primary';
        /** Cancel button variant */
        this.cancelButtonVariant = 'default';
        /** Enable or disable popover */
        this.disabled = false;
        this.onActionHandler = (e, eventToEmit) => {
            e.stopImmediatePropagation();
            this.show = false;
            this.focusOnControl();
            eventToEmit.emit();
        };
        this.focusOnControl = () => {
            const control = this.el.querySelector('[slot=control]');
            control.focus();
        };
        this.onPopConfirmOpenHandler = () => {
            var _a;
            (_a = this.cancelButtonRef) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.getButtonVariant = (variant) => (variant !== 'default' ? `bk-button--${variant}` : '');
    }
    onClickHandler() {
        if (!this.disabled && !this.show) {
            this.show = true;
        }
    }
    render() {
        return (index.h("bk-popover", { show: this.show, triggerOn: "manual", disabled: this.disabled, placement: "bottom-end", onBkOpened: this.onPopConfirmOpenHandler, "aria-label": "confirmation popup" }, index.h("div", { class: "bk-pop-confirm", slot: "content" }, index.h("focus-trap", null, index.h("div", { class: "bk-pop-confirm__message" }, this.message), index.h("div", { class: "bk-pop-confirm__footer" }, index.h("button", { class: `bk-button bk-button--mini ${this.getButtonVariant(this.cancelButtonVariant)}`, onClick: (e) => this.onActionHandler(e, this.bkCancelled), ref: (el) => (this.cancelButtonRef = el) }, this.cancelButtonText), index.h("button", { class: `bk-button bk-button--mini ${this.getButtonVariant(this.confirmButtonVariant)}`, onClick: (e) => this.onActionHandler(e, this.bkConfirmed) }, this.confirmButtonText)))), index.h("slot", { name: "control" })));
    }
    get el() { return index.getElement(this); }
};
PopConfirm.style = indexCss;

exports.bk_pop_confirm = PopConfirm;
