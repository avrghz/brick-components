'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4697a7c9.js');
require('./iron-icons-289711e1.js');
require('./focus-trap-54f8125c.js');

const indexCss = ".bk-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#ffffff;border:1px solid #dcdfe6;border-color:#dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;transition:0.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.bk-button+.bk-button{margin-left:10px}.bk-button.is-round{padding:12px 20px}.bk-button:hover,.bk-button:focus{color:#409eff;border-color:#c6e2ff;background-color:#ecf5ff}.bk-button:active{color:#3a8ee6;border-color:#3a8ee6;outline:none}.bk-button::-moz-focus-inner{border:0}.bk-button [class*=bk-icon-]+span{margin-left:5px}.bk-button.is-plain:hover,.bk-button.is-plain:focus{background:#ffffff;border-color:#409eff;color:#409eff}.bk-button.is-plain:active{background:#ffffff;border-color:#3a8ee6;color:#3a8ee6;outline:none}.bk-button.is-active{color:#3a8ee6;border-color:#3a8ee6}.bk-button.is-disabled,.bk-button.is-disabled:hover,.bk-button.is-disabled:focus{color:#c0c4cc;cursor:not-allowed;background-image:none;background-color:#ffffff;border-color:#ebeef5}.bk-button.is-disabled.bk-button--text{background-color:transparent}.bk-button.is-disabled.is-plain,.bk-button.is-disabled.is-plain:hover,.bk-button.is-disabled.is-plain:focus{background-color:#ffffff;border-color:#ebeef5;color:#c0c4cc}.bk-button.is-loading{position:relative;pointer-events:none}.bk-button.is-loading:before{pointer-events:none;content:\"\";position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border-radius:inherit;background-color:rgba(255, 255, 255, 0.35)}.bk-button.is-round{border-radius:20px;padding:12px 23px}.bk-button.is-circle{border-radius:50%;padding:12px}.bk-button--primary{color:#ffffff;background-color:#409eff;border-color:#409eff}.bk-button--primary:hover,.bk-button--primary:focus{background:#66b1ff;border-color:#66b1ff;color:#ffffff}.bk-button--primary:active{background:#3a8ee6;border-color:#3a8ee6;color:#ffffff;outline:none}.bk-button--primary.is-active{background:#3a8ee6;border-color:#3a8ee6;color:#ffffff}.bk-button--primary.is-disabled,.bk-button--primary.is-disabled:hover,.bk-button--primary.is-disabled:focus,.bk-button--primary.is-disabled:active{color:#ffffff;background-color:#a0cfff;border-color:#a0cfff}.bk-button--primary.is-plain{color:#409eff;background:#ecf5ff;border-color:#b3d8ff}.bk-button--primary.is-plain:hover,.bk-button--primary.is-plain:focus{background:#409eff;border-color:#409eff;color:#ffffff}.bk-button--primary.is-plain:active{background:#3a8ee6;border-color:#3a8ee6;color:#ffffff;outline:none}.bk-button--primary.is-plain.is-disabled,.bk-button--primary.is-plain.is-disabled:hover,.bk-button--primary.is-plain.is-disabled:focus,.bk-button--primary.is-plain.is-disabled:active{color:#8cc5ff;background-color:#ecf5ff;border-color:#d9ecff}.bk-button--success{color:#ffffff;background-color:#67c23a;border-color:#67c23a}.bk-button--success:hover,.bk-button--success:focus{background:#85ce61;border-color:#85ce61;color:#ffffff}.bk-button--success:active{background:#5daf34;border-color:#5daf34;color:#ffffff;outline:none}.bk-button--success.is-active{background:#5daf34;border-color:#5daf34;color:#ffffff}.bk-button--success.is-disabled,.bk-button--success.is-disabled:hover,.bk-button--success.is-disabled:focus,.bk-button--success.is-disabled:active{color:#ffffff;background-color:#b3e19d;border-color:#b3e19d}.bk-button--success.is-plain{color:#67c23a;background:#f0f9eb;border-color:#c2e7b0}.bk-button--success.is-plain:hover,.bk-button--success.is-plain:focus{background:#67c23a;border-color:#67c23a;color:#ffffff}.bk-button--success.is-plain:active{background:#5daf34;border-color:#5daf34;color:#ffffff;outline:none}.bk-button--success.is-plain.is-disabled,.bk-button--success.is-plain.is-disabled:hover,.bk-button--success.is-plain.is-disabled:focus,.bk-button--success.is-plain.is-disabled:active{color:#a4da89;background-color:#f0f9eb;border-color:#e1f3d8}.bk-button--warning{color:#ffffff;background-color:#e6a23c;border-color:#e6a23c}.bk-button--warning:hover,.bk-button--warning:focus{background:#ebb563;border-color:#ebb563;color:#ffffff}.bk-button--warning:active{background:#cf9236;border-color:#cf9236;color:#ffffff;outline:none}.bk-button--warning.is-active{background:#cf9236;border-color:#cf9236;color:#ffffff}.bk-button--warning.is-disabled,.bk-button--warning.is-disabled:hover,.bk-button--warning.is-disabled:focus,.bk-button--warning.is-disabled:active{color:#ffffff;background-color:#f3d19e;border-color:#f3d19e}.bk-button--warning.is-plain{color:#e6a23c;background:#fdf6ec;border-color:#f5dab1}.bk-button--warning.is-plain:hover,.bk-button--warning.is-plain:focus{background:#e6a23c;border-color:#e6a23c;color:#ffffff}.bk-button--warning.is-plain:active{background:#cf9236;border-color:#cf9236;color:#ffffff;outline:none}.bk-button--warning.is-plain.is-disabled,.bk-button--warning.is-plain.is-disabled:hover,.bk-button--warning.is-plain.is-disabled:focus,.bk-button--warning.is-plain.is-disabled:active{color:#f0c78a;background-color:#fdf6ec;border-color:#faecd8}.bk-button--danger{color:#ffffff;background-color:#f56c6c;border-color:#f56c6c}.bk-button--danger:hover,.bk-button--danger:focus{background:#f78989;border-color:#f78989;color:#ffffff}.bk-button--danger:active{background:#dd6161;border-color:#dd6161;color:#ffffff;outline:none}.bk-button--danger.is-active{background:#dd6161;border-color:#dd6161;color:#ffffff}.bk-button--danger.is-disabled,.bk-button--danger.is-disabled:hover,.bk-button--danger.is-disabled:focus,.bk-button--danger.is-disabled:active{color:#ffffff;background-color:#fab6b6;border-color:#fab6b6}.bk-button--danger.is-plain{color:#f56c6c;background:#fef0f0;border-color:#fbc4c4}.bk-button--danger.is-plain:hover,.bk-button--danger.is-plain:focus{background:#f56c6c;border-color:#f56c6c;color:#ffffff}.bk-button--danger.is-plain:active{background:#dd6161;border-color:#dd6161;color:#ffffff;outline:none}.bk-button--danger.is-plain.is-disabled,.bk-button--danger.is-plain.is-disabled:hover,.bk-button--danger.is-plain.is-disabled:focus,.bk-button--danger.is-plain.is-disabled:active{color:#f9a7a7;background-color:#fef0f0;border-color:#fde2e2}.bk-button--info{color:#ffffff;background-color:#909399;border-color:#909399}.bk-button--info:hover,.bk-button--info:focus{background:#a6a9ad;border-color:#a6a9ad;color:#ffffff}.bk-button--info:active{background:#82848a;border-color:#82848a;color:#ffffff;outline:none}.bk-button--info.is-active{background:#82848a;border-color:#82848a;color:#ffffff}.bk-button--info.is-disabled,.bk-button--info.is-disabled:hover,.bk-button--info.is-disabled:focus,.bk-button--info.is-disabled:active{color:#ffffff;background-color:#c8c9cc;border-color:#c8c9cc}.bk-button--info.is-plain{color:#909399;background:#f4f4f5;border-color:#d3d4d6}.bk-button--info.is-plain:hover,.bk-button--info.is-plain:focus{background:#909399;border-color:#909399;color:#ffffff}.bk-button--info.is-plain:active{background:#82848a;border-color:#82848a;color:#ffffff;outline:none}.bk-button--info.is-plain.is-disabled,.bk-button--info.is-plain.is-disabled:hover,.bk-button--info.is-plain.is-disabled:focus,.bk-button--info.is-plain.is-disabled:active{color:#bcbec2;background-color:#f4f4f5;border-color:#e9e9eb}.bk-button--medium{padding:10px 20px;font-size:14px;border-radius:4px}.bk-button--medium.is-round{padding:10px 20px}.bk-button--medium.is-circle{padding:10px}.bk-button--small{padding:9px 15px;font-size:12px;border-radius:3px}.bk-button--small.is-round{padding:9px 15px}.bk-button--small.is-circle{padding:9px}.bk-button--mini{padding:7px 15px;font-size:12px;border-radius:3px}.bk-button--mini.is-round{padding:7px 15px}.bk-button--mini.is-circle{padding:7px}.bk-button--text{border-color:transparent;color:#409eff;background:transparent;padding-left:0;padding-right:0}.bk-button--text:hover,.bk-button--text:focus{color:#66b1ff;border-color:transparent;background-color:transparent}.bk-button--text:active{color:#3a8ee6;border-color:transparent;background-color:transparent}.bk-button--text.is-disabled,.bk-button--text.is-disabled:hover,.bk-button--text.is-disabled:focus{border-color:transparent}.bk-button-group{display:inline-block;vertical-align:middle}.bk-button-group::before,.bk-button-group::after{display:table;content:\"\"}.bk-button-group::after{clear:both}.bk-button-group>.bk-button{float:left;position:relative}.bk-button-group>.bk-button+.bk-button{margin-left:0}.bk-button-group>.bk-button.is-disabled{z-index:1}.bk-button-group>.bk-button:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.bk-button-group>.bk-button:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.bk-button-group>.bk-button:first-child:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.bk-button-group>.bk-button:first-child:last-child.is-round{border-radius:20px}.bk-button-group>.bk-button:first-child:last-child.is-circle{border-radius:50%}.bk-button-group>.bk-button:not(:first-child):not(:last-child){border-radius:0}.bk-button-group>.bk-button:not(:last-child){margin-right:-1px}.bk-button-group>.bk-button:hover,.bk-button-group>.bk-button:focus,.bk-button-group>.bk-button:active{z-index:1}.bk-button-group>.bk-button.is-active{z-index:1}.bk-button-group>.bk-dropdown>.bk-button{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--primary:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--primary:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--primary:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--success:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--success:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--success:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--warning:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--warning:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--warning:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--danger:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--danger:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--danger:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--info:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--info:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--info:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-icon{width:18px;height:18px}.bk-icon--md{width:20px;height:20px}.bk-icon--lg{width:22px;height:22px}.bk-icon--xl{width:24px;height:24px}.bk-icon--xxl{width:30px;height:30px}.bk-modal{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;margin:0;padding:20px}.bk-modal__content{position:relative;margin:0 auto;margin-top:20vh;background:#ffffff;border-radius:4px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.3);box-sizing:border-box;width:100%;opacity:0;padding:20px;font-size:14px;outline:none}@media only screen and (min-width: 992px){.bk-modal__content{width:600px}}.bk-modal__content.open{animation:modal-fade-in 0.3s forwards}.bk-modal__content.close{animation:modal-fade-out 0.3s forwards}.bk-modal__header{box-sizing:border-box;margin-bottom:20px}.bk-modal__title{line-height:24px;font-size:18px;color:#303133}.bk-modal__body{color:#606266;word-break:break-all}.bk-modal__footer{box-sizing:border-box;margin-top:20px}.bk-modal__close-btn{position:absolute;cursor:pointer;box-sizing:border-box;padding:5px;opacity:0.75;outline:none;line-height:1;background-color:transparent;border:none;top:16px;right:16px}.bk-modal__close-btn iron-icon{color:#606266;width:18px}.bk-modal__close-btn:hover,.bk-modal__close-btn:active,.bk-modal__close-btn:focus{opacity:1}.bk-modal__backdrop{position:fixed;left:0;top:0;width:100%;height:100%;background:#000;z-index:-1;opacity:0;transition:opacity 0.3s ease-in}.bk-modal__backdrop.open{opacity:0.35}@keyframes modal-fade-in{0%{transform:translate3d(0, -40px, 0);opacity:0}100%{transform:translate3d(0, 0, 0);opacity:1}}@keyframes modal-fade-out{0%{transform:translate3d(0, 0, 0);opacity:1}100%{transform:translate3d(0, -40px, 0);opacity:0}}";

const Modal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bkOpen = index.createEvent(this, "bkOpen", 7);
        this.bkOpened = index.createEvent(this, "bkOpened", 7);
        this.bkClose = index.createEvent(this, "bkClose", 7);
        this.bkClosed = index.createEvent(this, "bkClosed", 7);
        this.hasFooter = false;
        /** Show or hide the modal */
        this.open = false;
        /** Is dismissible or not */
        this.dismissible = true;
        this.toggleFooter = () => {
            this.hasFooter = this.el.querySelectorAll('[slot=footer]').length === 1;
        };
        this.resetTimeout = () => {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
        };
        this.onAfterModalOpen = () => {
            var _a, _b;
            if (this.open) {
                (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.classList.add('open');
                (_b = this.backdropRef) === null || _b === void 0 ? void 0 : _b.classList.add('open');
                this.el.focus();
            }
        };
        this.onBeforeModalClose = () => {
            if (!this.open) {
                if (this.modalRef && this.backdropRef) {
                    this.modalRef.classList.remove('open');
                    this.backdropRef.classList.remove('open');
                    this.modalRef.classList.add('close');
                }
            }
        };
        this.onCloseHandler = (e) => {
            if (this.dismissible) {
                e.preventDefault();
                this.open = false;
            }
        };
    }
    componentWillLoad() {
        this.toggleFooter();
        this.emitEvent(this.open, this.bkOpen);
    }
    componentDidLoad() {
        this.emitEvent(this.open, this.bkOpened);
        this.onAfterModalOpen();
    }
    componentWillUpdate() {
        this.toggleFooter();
        this.emitEvent(this.open, this.bkOpen);
        this.emitEvent(!this.open, this.bkClose);
        this.onBeforeModalClose();
        return new Promise((resolve) => (this.timeout = setTimeout(resolve, 300)));
    }
    componentDidUpdate() {
        this.emitEvent(this.open, this.bkOpened);
        this.emitEvent(!this.open, this.bkClosed);
        this.onAfterModalOpen();
    }
    componentDidUnload() {
        this.resetTimeout();
    }
    emitEvent(condition, event) {
        if (condition) {
            event.emit();
        }
    }
    render() {
        if (!this.open) {
            return null;
        }
        return (index.h(index.Host, { role: "dialog", tabIndex: 0, "aria-modal": "true", "aria-hidden": this.open }, index.h("div", { class: "bk-modal" }, index.h("div", { role: "document", class: "bk-modal__content", ref: (el) => (this.modalRef = el) }, index.h("focus-trap", null, this.header && (index.h("header", { class: "bk-modal__header" }, index.h("span", { class: "bk-modal__title" }, this.header), this.dismissible && (index.h("button", { tabIndex: 0, "aria-label": "Close", class: "bk-button bk-button--text bk-modal__close-btn", onClick: this.onCloseHandler }, index.h("iron-icon", { icon: "close", class: "bk-icon" }))))), index.h("main", { class: "bk-modal__body" }, index.h("slot", { name: "body" })), this.hasFooter && (index.h("footer", { class: "bk-modal__footer" }, index.h("slot", { name: "footer" }))))), index.h("div", Object.assign({ ref: (el) => (this.backdropRef = el), class: "bk-modal__backdrop" }, (this.dismissible ? { onClick: this.onCloseHandler } : {}))))));
    }
    get el() { return index.getElement(this); }
};
Modal.style = indexCss;

exports.bk_modal = Modal;
