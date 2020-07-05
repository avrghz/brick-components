import { r as registerInstance, h } from './index-9596b62d.js';

const indexCss = ".bk-card.sc-bk-card{border-radius:4px;border:1px solid #ebeef5;background-color:#ffffff;overflow:hidden;color:#303133;transition:0.3s}.bk-card.is-always-shadow.sc-bk-card{box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)}.bk-card.is-hover-shadow.sc-bk-card:hover,.bk-card.is-hover-shadow.sc-bk-card:focus{box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)}.sc-bk-card-s>[slot=header]{padding:16px 20px;border-bottom:1px solid #ebeef5;box-sizing:border-box;font-size:1.1em}.sc-bk-card-s>[slot=body]{padding:20px}";

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Set shadow of the component */
        this.shadow = 'never';
    }
    render() {
        return (h("div", { role: "card", class: `bk-card is-${this.shadow}-shadow` }, h("slot", { name: "header" }), h("slot", { name: "body" })));
    }
};
Card.style = indexCss;

export { Card as bk_card };
