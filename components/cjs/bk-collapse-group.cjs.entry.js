'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4697a7c9.js');

const indexCss = "bk-collapse-group.sc-bk-collapse-group{display:block;border-top:1px solid #ebeef5}";

const CollapseGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return index.h("slot", null);
    }
    get el() { return index.getElement(this); }
};
CollapseGroup.style = indexCss;

exports.bk_collapse_group = CollapseGroup;
