import { Component, h, Prop, Host, Event } from '@stencil/core';
import { uniqueId } from 'lodash';
import { tween, styler, easing } from 'popmotion';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
/**
 * @slot header - Use this to render the collapse header.
 * @slot content - Use this to render the collapse body.
 */
const DURATION = 200;
export class Collapse {
    constructor() {
        this.id = uniqueId();
        this.uiState = 'close';
        /** Open or close the collapse */
        this.open = false;
        /** Enable or disable collapse */
        this.disabled = false;
        this.animateIn = () => {
            if (this.open && this.uiState === 'close') {
                this.animate(true, () => {
                    this.uiState = 'open';
                    this.bkOpened.emit();
                });
                this.bkOpen.emit();
            }
        };
        this.animateOut = () => {
            if (!this.open && this.uiState === 'open') {
                this.animate(false, () => {
                    this.uiState = 'close';
                    this.bkClosed.emit();
                });
                this.bkClose.emit();
            }
        };
        this.animate = (open, cb) => {
            let started = false;
            let height = 1;
            if (this.tabPanelRef) {
                const element = styler(this.tabPanelRef);
                this.subscription = tween(Object.assign(Object.assign({}, (open ? { from: 0, to: 1 } : { from: 1, to: 0 })), { duration: DURATION, ease: easing.linear })).start({
                    update: (x) => {
                        var _a;
                        if (!started) {
                            height = ((_a = this.tabPanelRef) === null || _a === void 0 ? void 0 : _a.clientHeight) || 1;
                            started = true;
                        }
                        element
                            .set('opacity', x)
                            .set('position', 'relative')
                            .set('height', x * height);
                    },
                    complete: () => {
                        if (open) {
                            element.set('height', 'auto');
                        }
                        cb();
                    },
                });
            }
        };
        this.onClickHandler = () => (this.open = !this.open);
        this.onKeydownHandler = (e) => {
            if (e.key === 'Enter') {
                this.open = !this.open;
            }
        };
    }
    componentDidLoad() {
        this.animateIn();
    }
    componentWillRender() {
        return new Promise((resolve) => {
            if (this.uiState === 'open' && !this.open) {
                setTimeout(resolve, DURATION);
            }
            else {
                resolve();
            }
        });
    }
    async componentWillUpdate() {
        this.animateOut();
    }
    componentDidUpdate() {
        this.animateIn();
    }
    disconnectedCallback() {
        if (this.subscription) {
            this.subscription.stop();
        }
    }
    render() {
        return (h(Host, { class: {
                'bk-collapse-item': true,
                'is-active': this.open,
                'is-disabled': this.disabled,
            } },
            h("div", { role: "tab", "aria-expanded": this.open, "aria-controls": `bk-collapse-content-${this.id}`, "aria-describedby": `bk-collapse-content-${this.id}` },
                h("div", { role: "button", id: `bk-collapse-head-${this.id}`, tabIndex: 0, class: {
                        'bk-collapse-item__header': true,
                        focusing: this.open,
                    }, onClick: this.onClickHandler, onKeyDown: this.onKeydownHandler },
                    h("slot", { name: "header" }),
                    h("iron-icon", { icon: "chevron-right", class: "bk-collapse-item__arrow" }))),
            this.open && (h("div", { role: "tabpanel", "aria-labelledby": `bk-collapse-head-${this.id}`, id: `bk-collapse-content-${this.id}`, class: "bk-collapse-item__wrap", ref: (el) => (this.tabPanelRef = el) },
                h("div", { class: "bk-collapse-item__content" },
                    h("slot", { name: "content" }))))));
    }
    static get is() { return "bk-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "open": {
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
                "text": "Open or close the collapse"
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
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
                "text": "Enable or disable collapse"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "bkOpen",
            "name": "bkOpen",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "This event is fired just before the panel opens"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bkOpened",
            "name": "bkOpened",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "This event is fired after the panel is opened"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bkClose",
            "name": "bkClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "This event is fired just before the panel closes"
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
                "text": "This event is fired after the panel is closed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
