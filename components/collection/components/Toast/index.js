import { Component, h, State, Element, Watch, Prop, Listen, Host } from '@stencil/core';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { Status, Constant } from './types';
import { uID, animateIn, animateOut, Icon } from './util';
export class Toast {
    constructor() {
        this.subscriptions = [];
        this.status = null;
        /** When provided, the toast will auto close after the specified time. (milliseconds) */
        this.hideAfter = Constant.HIDE_AFTER;
        /** Transition in duration  (milliseconds) */
        this.transitionInDuration = Constant.TRANSITION_IN;
        /** Transition out duration  (milliseconds) */
        this.transitionOutDuration = Constant.TRANSITION_OUT;
        /** Position of the toast */
        this.position = Constant.POSITION;
        this.toasts = [];
        this.getToastById = (id) => {
            if (this.el.shadowRoot) {
                return this.el.shadowRoot.querySelector(`#${id}`);
            }
            return null;
        };
        this.addToast = (toast) => {
            this.toasts = [...this.toasts, Object.assign(Object.assign({}, toast), { id: uID() })];
        };
        this.removeToast = (id) => {
            this.toasts = this.toasts.filter((m) => m.id !== id);
        };
        this.addSubscription = (subscription) => {
            this.subscriptions.push(subscription);
        };
        this.removeSubscription = (id) => {
            this.subscriptions = this.subscriptions.filter((s) => s.id !== id);
        };
        this.unSubscribe = (id) => {
            const subscription = this.subscriptions.find((s) => s.id === id);
            if (subscription) {
                subscription.subscription.stop();
            }
        };
        this.openToast = (id) => {
            const element = this.getToastById(id);
            if (element) {
                const subscription = animateIn({
                    el: element,
                    duration: this.transitionInDuration > 0 ? this.transitionInDuration : 0,
                    onComplete: () => {
                        this.removeSubscription(id);
                        if (!!this.hideAfter) {
                            this.closeToast(id, this.hideAfter);
                        }
                    },
                    flip: this.position === 'top-left' || this.position === 'bottom-left',
                });
                this.addSubscription({
                    id,
                    subscription,
                });
            }
        };
        this.closeToast = (id, wait = 0) => {
            const element = this.getToastById(id);
            if (element) {
                const subscription = animateOut({
                    el: element,
                    duration: this.transitionOutDuration > 0 ? this.transitionOutDuration : 0,
                    onComplete: () => {
                        this.removeSubscription(id);
                        this.removeToast(id);
                    },
                    wait,
                    flip: this.position === 'top-left' || this.position === 'bottom-left',
                });
                this.addSubscription({
                    id,
                    subscription,
                });
            }
        };
        this.handleCloseButtonClick = (id) => {
            this.unSubscribe(id);
            this.closeToast(id);
        };
    }
    watchMessages(current, previous) {
        this.status =
            current.length > previous.length
                ? Status.TOAST_ADDED
                : current.length < previous.length
                    ? Status.TOAST_REMOVED
                    : null;
    }
    componentDidUpdate() {
        if (this.status === Status.TOAST_ADDED && this.toasts.length) {
            this.openToast(this.toasts[this.toasts.length - 1].id);
        }
    }
    componentDidUnload() {
        if (this.subscriptions.length) {
            this.subscriptions.forEach((s) => s.subscription.stop());
        }
    }
    listenToToast(e) {
        this.addToast(e.detail);
    }
    render() {
        return (h(Host, { tabIndex: -1, "aria-hidden": "true", class: `bk-toast--${this.position}` }, this.toasts.map(({ message, id, title, variant = 'default', dismissible = true }) => (h("div", { key: id, id: id, class: "bk-toast" },
            h(Icon, { variant: variant }),
            h("div", { class: `bk-toast__group bk-toast--${variant}` },
                title && h("div", { class: "bk-toast__title" }, title),
                h("div", { class: "bk-toast__content" }, message),
                dismissible && (h("button", { class: "bk-button bk-button--text bk-toast__close-Btn", onClick: () => this.handleCloseButtonClick(id) },
                    h("iron-icon", { icon: "close", class: "bk-icon" })))))))));
    }
    static get is() { return "bk-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "hideAfter": {
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
                "text": "When provided, the toast will auto close after the specified time. (milliseconds)"
            },
            "attribute": "hide-after",
            "reflect": false,
            "defaultValue": "Constant.HIDE_AFTER"
        },
        "transitionInDuration": {
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
                "text": "Transition in duration  (milliseconds)"
            },
            "attribute": "transition-in-duration",
            "reflect": false,
            "defaultValue": "Constant.TRANSITION_IN"
        },
        "transitionOutDuration": {
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
                "text": "Transition out duration  (milliseconds)"
            },
            "attribute": "transition-out-duration",
            "reflect": false,
            "defaultValue": "Constant.TRANSITION_OUT"
        },
        "position": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Position",
                "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                "references": {
                    "Position": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Position of the toast"
            },
            "attribute": "position",
            "reflect": false,
            "defaultValue": "Constant.POSITION"
        }
    }; }
    static get states() { return {
        "toasts": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "toasts",
            "methodName": "watchMessages"
        }]; }
    static get listeners() { return [{
            "name": "$bkToast",
            "method": "listenToToast",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
