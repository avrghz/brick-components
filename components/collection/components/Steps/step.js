import { h } from '@stencil/core';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
const Step = ({ step, icon, title, description, status, style, isCentered, isLast, direction, onClick, }) => {
    return (h("div", { class: Object.assign(Object.assign({ 'bk-step': true, 'is-center': !!isCentered, 'is-flex': !isCentered && !!isLast }, (!!status ? { [`is-${status}`]: true } : {})), { [`is-${direction}`]: true }), style: style },
        h("div", { class: "bk-step__head" },
            h("div", { class: "bk-step__line" },
                h("i", { class: "bk-step__line-inner" })),
            h("div", { class: `bk-step__icon ${!!icon ? 'is-icon' : 'is-text'}` },
                h("div", Object.assign({ class: "bk-step__icon-inner" }, (status !== 'wait' ? { onClick } : {})), !!icon ? h("iron-icon", { icon: icon, class: "bk-icon bk-icon--xxl" }) : step))),
        h("div", { class: "bk-step__main" },
            h("div", { class: "bk-step__title" }, title),
            description && h("div", { class: "bk-step__description" }, description))));
};
export default Step;
