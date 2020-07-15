import { r as registerInstance, h, g as getElement } from './index-11a805ea.js';

const indexCss = "bk-collapse-group.sc-bk-collapse-group{display:block;border-top:1px solid #ebeef5}";

const CollapseGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isAccordion = true;
    }
    componentWillLoad() {
        this.collapsiblePanels = this.el.querySelectorAll('bk-collapse');
    }
    onCollapseOpened(e) {
        var _a;
        if (this.isAccordion) {
            (_a = this.collapsiblePanels) === null || _a === void 0 ? void 0 : _a.forEach((panel) => {
                if (e.target !== panel) {
                    panel.setAttribute('open', 'false');
                }
            });
        }
    }
    render() {
        return h("slot", null);
    }
    get el() { return getElement(this); }
};
CollapseGroup.style = indexCss;

export { CollapseGroup as bk_collapse_group };
