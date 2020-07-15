'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4697a7c9.js');
require('./iron-icons-289711e1.js');
const lodash = require('./lodash-9ed50696.js');
const popmotion_es = require('./popmotion.es-c25dece7.js');

const indexCss = ".bk-collapse-item__header{display:flex;align-items:center;height:48px;line-height:48px;background-color:#ffffff;color:#303133;cursor:pointer;border-bottom:1px solid #ebeef5;font-size:13px;font-weight:500;transition:border-bottom-color 0.3s;outline:none}.bk-collapse-item__arrow{margin:0 8px 0 auto;transition:transform 0.3s;width:20px}.bk-collapse-item__header:focus{color:#409eff}.bk-collapse-item__wrap{will-change:height;background-color:#ffffff;overflow:hidden;box-sizing:border-box;border-bottom:1px solid #ebeef5;opacity:0}.bk-collapse-item__content{padding-bottom:25px;font-size:13px;color:#303133;line-height:1.7692307692}.bk-collapse-item:last-child{margin-bottom:-1px}:host{display:block}:host(.is-active) .bk-collapse-item__header{border-bottom-color:transparent}:host(.is-active) .bk-collapse-item__arrow{transform:rotate(90deg)}:host(.is-disabled){opacity:0.5;pointer-events:none}";

/**
 * @slot header - Use this to render the collapse header.
 * @slot content - Use this to render the collapse body.
 */
const DURATION = 300;
const Collapse = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bkOpen = index.createEvent(this, "bkOpen", 7);
        this.bkOpened = index.createEvent(this, "bkOpened", 7);
        this.bkClose = index.createEvent(this, "bkClose", 7);
        this.bkClosed = index.createEvent(this, "bkClosed", 7);
        this.id = lodash.lodash.uniqueId();
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
                const element = popmotion_es.index(this.tabPanelRef);
                this.subscription = popmotion_es.tween(Object.assign(Object.assign({}, (open ? { from: 0, to: 1 } : { from: 1, to: 0 })), { duration: DURATION })).start({
                    update: (x) => {
                        var _a;
                        if (!started) {
                            height = ((_a = this.tabPanelRef) === null || _a === void 0 ? void 0 : _a.clientHeight) || 1;
                            started = true;
                        }
                        element.set('opacity', x).set('height', x * height);
                    },
                    complete: () => {
                        element.set('height', 'auto');
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
        return (index.h(index.Host, { class: {
                'bk-collapse-item': true,
                'is-active': this.open,
                'is-disabled': this.disabled,
            } }, index.h("div", { role: "tab", "aria-expanded": this.open, "aria-controls": `bk-collapse-content-${this.id}`, "aria-describedby": `bk-collapse-content-${this.id}` }, index.h("div", { role: "button", id: `bk-collapse-head-${this.id}`, tabIndex: 0, class: {
                'bk-collapse-item__header': true,
                focusing: this.open,
            }, onClick: this.onClickHandler, onKeyDown: this.onKeydownHandler }, index.h("slot", { name: "header" }), index.h("iron-icon", { icon: "chevron-right", class: "bk-collapse-item__arrow" }))), this.open && (index.h("div", { role: "tabpanel", "aria-labelledby": `bk-collapse-head-${this.id}`, id: `bk-collapse-content-${this.id}`, class: "bk-collapse-item__wrap", ref: (el) => (this.tabPanelRef = el) }, index.h("div", { class: "bk-collapse-item__content" }, index.h("slot", { name: "content" }))))));
    }
};
Collapse.style = indexCss;

exports.bk_collapse = Collapse;
