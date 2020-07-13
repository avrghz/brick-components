'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-02137fd9.js');

const indexCss = ".bk-card.sc-bk-card{border-radius:4px;border:1px solid #ebeef5;background-color:#ffffff;overflow:hidden;color:#303133;transition:0.3s}.bk-card.is-always-shadow.sc-bk-card{box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)}.bk-card.is-hover-shadow.sc-bk-card:hover,.bk-card.is-hover-shadow.sc-bk-card:focus{box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)}.sc-bk-card-s>[slot=header]{padding:16px 20px;border-bottom:1px solid #ebeef5;box-sizing:border-box;font-size:1.1em}.sc-bk-card-s>[slot=body]{padding:20px}";

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Set shadow of the component */
        this.shadow = 'never';
    }
    render() {
        return (index.h("div", { role: "card", class: `bk-card is-${this.shadow}-shadow` }, index.h("slot", { name: "header" }), index.h("slot", { name: "body" })));
    }
};
Card.style = indexCss;

exports.bk_card = Card;
