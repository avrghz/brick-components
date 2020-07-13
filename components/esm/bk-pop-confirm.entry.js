import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c7d865b7.js';
import './focus-trap-3a6d86f2.js';

const indexCss = ".bk-pop-confirm__footer.sc-bk-pop-confirm{display:flex;justify-content:flex-end;align-items:center;margin-top:16px}";

const PopConfirm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.bkConfirmed = createEvent(this, "bkConfirmed", 7);
        this.bkCancelled = createEvent(this, "bkCancelled", 7);
    }
    onClickHandler() {
        if (!this.disabled && !this.show) {
            this.show = true;
        }
    }
    render() {
        return (h("bk-popover", { show: this.show, triggerOn: "manual", disabled: this.disabled, placement: "bottom-end", onBkOpened: this.onPopConfirmOpenHandler, "aria-label": "confirmation popup" }, h("div", { class: "bk-pop-confirm", slot: "content" }, h("focus-trap", null, h("div", { class: "bk-pop-confirm__message" }, this.message), h("div", { class: "bk-pop-confirm__footer" }, h("button", { class: `bk-button bk-button--mini ${this.getButtonVariant(this.cancelButtonVariant)}`, onClick: (e) => this.onActionHandler(e, this.bkCancelled), ref: (el) => (this.cancelButtonRef = el) }, this.cancelButtonText), h("button", { class: `bk-button bk-button--mini ${this.getButtonVariant(this.confirmButtonVariant)}`, onClick: (e) => this.onActionHandler(e, this.bkConfirmed) }, this.confirmButtonText)))), h("slot", { name: "control" })));
    }
    get el() { return getElement(this); }
};
PopConfirm.style = indexCss;

export { PopConfirm as bk_pop_confirm };
