'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-02137fd9.js');
require('./iron-icons-289711e1.js');

const indexCss = ".bk-alert.sc-bk-alert{display:block;width:100%;padding:16px 20px;margin:0;box-sizing:border-box;border-radius:4px;position:relative;background-color:#ffffff;overflow:hidden;opacity:1;display:flex;align-items:center;transition:opacity 0.2s;font-size:14px}.bk-alert.bk-alert--dismissible.sc-bk-alert{padding-right:32px}.bk-alert__close-btn.sc-bk-alert{position:absolute;cursor:pointer;box-sizing:border-box;padding:5px;opacity:0.75;outline:none;line-height:1;background-color:transparent;border:none;top:8px;right:0}.bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#606266;width:18px}.bk-alert__close-btn.sc-bk-alert:hover,.bk-alert__close-btn.sc-bk-alert:active,.bk-alert__close-btn.sc-bk-alert:focus{opacity:1}.bk-alert--default.bk-alert--light.sc-bk-alert{background-color:#ecf5ff;color:#409eff}.bk-alert--default.bk-alert--light.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#409eff}.bk-alert--default.bk-alert--dark.sc-bk-alert{background-color:#409eff;color:#ffffff}.bk-alert--default.bk-alert--dark.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#ffffff}.bk-alert--success.bk-alert--light.sc-bk-alert{background-color:#f0f9eb;color:#67c23a}.bk-alert--success.bk-alert--light.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#67c23a}.bk-alert--success.bk-alert--dark.sc-bk-alert{background-color:#67c23a;color:#ffffff}.bk-alert--success.bk-alert--dark.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#ffffff}.bk-alert--info.bk-alert--light.sc-bk-alert{background-color:#f4f4f5;color:#909399}.bk-alert--info.bk-alert--light.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#909399}.bk-alert--info.bk-alert--dark.sc-bk-alert{background-color:#909399;color:#ffffff}.bk-alert--info.bk-alert--dark.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#ffffff}.bk-alert--warning.bk-alert--light.sc-bk-alert{background-color:#fdf6ec;color:#e6a23c}.bk-alert--warning.bk-alert--light.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#e6a23c}.bk-alert--warning.bk-alert--dark.sc-bk-alert{background-color:#e6a23c;color:#ffffff}.bk-alert--warning.bk-alert--dark.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#ffffff}.bk-alert--danger.bk-alert--light.sc-bk-alert{background-color:#fef0f0;color:#f56c6c}.bk-alert--danger.bk-alert--light.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#f56c6c}.bk-alert--danger.bk-alert--dark.sc-bk-alert{background-color:#f56c6c;color:#ffffff}.bk-alert--danger.bk-alert--dark.sc-bk-alert .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:#ffffff}";

const Alert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Type of the alert */
        this.variant = 'default';
        /** Light or dark */
        this.shade = 'light';
        /** Make alert dismissible */
        this.dismissible = true;
        this.onCloseHandler = (e) => {
            e.preventDefault();
            this.bkClosed.emit();
        };
        this.bkClosed = index.createEvent(this, "bkClosed", 7);
    }
    render() {
        return (index.h(index.Host, { role: "alert" }, index.h("div", { class: `bk-alert bk-alert--${this.variant} bk-alert--${this.shade} ${this.dismissible ? 'bk-alert--dismissible' : ''}` }, this.dismissible && (index.h("button", { class: "bk-button bk-button--text bk-alert__close-btn", onClick: this.onCloseHandler }, index.h("iron-icon", { icon: "close", class: "bk-icon" }))), index.h("slot", null))));
    }
};
Alert.style = indexCss;

exports.bk_alert = Alert;
