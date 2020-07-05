'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-703095ad.js');

const indexCss = ".bk-switch.sc-bk-switch{font-size:1em;display:inline-flex;align-items:center;position:relative;line-height:1.2em;height:1.2em;vertical-align:middle}.bk-switch__core.sc-bk-switch{margin:0;display:inline-block;position:relative;width:2em;height:1em;border:1px solid #dcdfe6;outline:none;border-radius:0.5em;box-sizing:border-box;background:#dcdfe6;cursor:pointer;transition:border-color 0.3s, background-color 0.3s;vertical-align:middle}.bk-switch__core.sc-bk-switch::after{content:\"\";position:absolute;top:50%;transform:translateY(-50%);left:0.1em;border-radius:100%;transition:all 0.3s;width:0.75em;height:0.75em;background-color:#ffffff}.bk-switch__input.sc-bk-switch{position:absolute;width:0;height:0;opacity:0;margin:0}.bk-switch__input.sc-bk-switch:checked+.bk-switch__core.sc-bk-switch::after{left:calc(100% - 0.1em - 0.75em);background-color:#ffffff}.bk-switch__input.sc-bk-switch:disabled+.bk-switch__core.sc-bk-switch{cursor:default;opacity:0.5}.bk-switch--default.sc-bk-switch .bk-switch__input.sc-bk-switch:checked+.bk-switch__core.sc-bk-switch{background:#409eff}.bk-switch--success.sc-bk-switch .bk-switch__input.sc-bk-switch:checked+.bk-switch__core.sc-bk-switch{background:#67c23a}.bk-switch--info.sc-bk-switch .bk-switch__input.sc-bk-switch:checked+.bk-switch__core.sc-bk-switch{background:#909399}.bk-switch--warning.sc-bk-switch .bk-switch__input.sc-bk-switch:checked+.bk-switch__core.sc-bk-switch{background:#e6a23c}.bk-switch--danger.sc-bk-switch .bk-switch__input.sc-bk-switch:checked+.bk-switch__core.sc-bk-switch{background:#f56c6c}";

const Switch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Set default state of the switch */
        this.isOn = false;
        /** Enable or disable switch */
        this.disabled = false;
        /** Type of the alert */
        this.variant = 'default';
        this.updateState = () => {
            if (!this.disabled) {
                this.isOn = !this.isOn;
                this.bkChange.emit({
                    isOn: this.isOn,
                });
            }
        };
        this.bkChange = index.createEvent(this, "bkChange", 7);
    }
    listenOnKeydown(e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            this.updateState();
        }
    }
    listenOnClick() {
        this.updateState();
    }
    render() {
        return (index.h(index.Host, { role: "switch", "aria-label": "switch", "aria-readonly": this.disabled, "aria-checked": this.isOn, tabIndex: "0" }, index.h("div", { class: `bk-switch bk-switch--${this.variant}` }, index.h("input", { type: "checkbox", name: "chk", class: "bk-switch__input", checked: this.isOn, disabled: this.disabled, tabIndex: -1, "aria-hidden": "true" }), index.h("span", { class: "bk-switch__core" }))));
    }
};
Switch.style = indexCss;

exports.bk_switch = Switch;
