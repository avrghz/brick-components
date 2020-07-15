'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4697a7c9.js');
require('./iron-icons-289711e1.js');
const lodash = require('./lodash-9ed50696.js');
const popmotion_es = require('./popmotion.es-8b2c2456.js');

var Constant;
(function (Constant) {
    Constant[Constant["TRANSITION_IN"] = 500] = "TRANSITION_IN";
    Constant[Constant["TRANSITION_OUT"] = 300] = "TRANSITION_OUT";
    Constant[Constant["HIDE_AFTER"] = 4000] = "HIDE_AFTER";
    Constant["POSITION"] = "top-right";
})(Constant || (Constant = {}));
var Status;
(function (Status) {
    Status["TOAST_ADDED"] = "TOAST_ADDED";
    Status["TOAST_REMOVED"] = "TOAST_REMOVED";
})(Status || (Status = {}));

const uID = () => lodash.lodash.uniqueId('toast_');
const animateIn = ({ el, duration, onComplete, flip = false }) => {
    const element = popmotion_es.index(el);
    return popmotion_es.composite({
        opacity: popmotion_es.tween({ duration: duration * 2, from: 0, to: 1 }),
        x: popmotion_es.tween({ duration, from: flip ? '-100%' : '100%', to: 0 }),
    }).start(Object.assign({ update: ({ x, opacity }) => element.set('opacity', opacity).set('x', x) }, (onComplete ? { complete: onComplete } : {})));
};
const animateOut = ({ el, duration, onComplete, wait, flip = false }) => {
    const element = popmotion_es.index(el);
    return popmotion_es.delay(wait).start({
        complete: () => {
            popmotion_es.composite({
                opacity: popmotion_es.tween({ duration, from: 1, to: 0 }),
                x: popmotion_es.tween({ to: flip ? '-75%' : '75%', duration: duration * 2 }),
            }).start(Object.assign({ update: ({ x, opacity }) => element.set('x', x).set('opacity', opacity) }, (onComplete ? { complete: onComplete } : {})));
        },
    });
};
const Icon = ({ variant }) => {
    let icon = '';
    switch (variant) {
        case 'danger':
            icon = 'cancel';
            break;
        case 'info':
            icon = 'info';
            break;
        case 'success':
            icon = 'check-circle';
            break;
        case 'warning':
            icon = 'warning';
            break;
    }
    return icon && index.h("iron-icon", { icon: icon, class: `bk-toast__icon bk-toast--${variant}` });
};

const indexCss = ".bk-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#ffffff;border:1px solid #dcdfe6;border-color:#dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;transition:0.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.bk-button+.bk-button{margin-left:10px}.bk-button.is-round{padding:12px 20px}.bk-button:hover,.bk-button:focus{color:#409eff;border-color:#c6e2ff;background-color:#ecf5ff}.bk-button:active{color:#3a8ee6;border-color:#3a8ee6;outline:none}.bk-button::-moz-focus-inner{border:0}.bk-button [class*=bk-icon-]+span{margin-left:5px}.bk-button.is-plain:hover,.bk-button.is-plain:focus{background:#ffffff;border-color:#409eff;color:#409eff}.bk-button.is-plain:active{background:#ffffff;border-color:#3a8ee6;color:#3a8ee6;outline:none}.bk-button.is-active{color:#3a8ee6;border-color:#3a8ee6}.bk-button.is-disabled,.bk-button.is-disabled:hover,.bk-button.is-disabled:focus{color:#c0c4cc;cursor:not-allowed;background-image:none;background-color:#ffffff;border-color:#ebeef5}.bk-button.is-disabled.bk-button--text{background-color:transparent}.bk-button.is-disabled.is-plain,.bk-button.is-disabled.is-plain:hover,.bk-button.is-disabled.is-plain:focus{background-color:#ffffff;border-color:#ebeef5;color:#c0c4cc}.bk-button.is-loading{position:relative;pointer-events:none}.bk-button.is-loading:before{pointer-events:none;content:\"\";position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border-radius:inherit;background-color:rgba(255, 255, 255, 0.35)}.bk-button.is-round{border-radius:20px;padding:12px 23px}.bk-button.is-circle{border-radius:50%;padding:12px}.bk-button--primary{color:#ffffff;background-color:#409eff;border-color:#409eff}.bk-button--primary:hover,.bk-button--primary:focus{background:#66b1ff;border-color:#66b1ff;color:#ffffff}.bk-button--primary:active{background:#3a8ee6;border-color:#3a8ee6;color:#ffffff;outline:none}.bk-button--primary.is-active{background:#3a8ee6;border-color:#3a8ee6;color:#ffffff}.bk-button--primary.is-disabled,.bk-button--primary.is-disabled:hover,.bk-button--primary.is-disabled:focus,.bk-button--primary.is-disabled:active{color:#ffffff;background-color:#a0cfff;border-color:#a0cfff}.bk-button--primary.is-plain{color:#409eff;background:#ecf5ff;border-color:#b3d8ff}.bk-button--primary.is-plain:hover,.bk-button--primary.is-plain:focus{background:#409eff;border-color:#409eff;color:#ffffff}.bk-button--primary.is-plain:active{background:#3a8ee6;border-color:#3a8ee6;color:#ffffff;outline:none}.bk-button--primary.is-plain.is-disabled,.bk-button--primary.is-plain.is-disabled:hover,.bk-button--primary.is-plain.is-disabled:focus,.bk-button--primary.is-plain.is-disabled:active{color:#8cc5ff;background-color:#ecf5ff;border-color:#d9ecff}.bk-button--success{color:#ffffff;background-color:#67c23a;border-color:#67c23a}.bk-button--success:hover,.bk-button--success:focus{background:#85ce61;border-color:#85ce61;color:#ffffff}.bk-button--success:active{background:#5daf34;border-color:#5daf34;color:#ffffff;outline:none}.bk-button--success.is-active{background:#5daf34;border-color:#5daf34;color:#ffffff}.bk-button--success.is-disabled,.bk-button--success.is-disabled:hover,.bk-button--success.is-disabled:focus,.bk-button--success.is-disabled:active{color:#ffffff;background-color:#b3e19d;border-color:#b3e19d}.bk-button--success.is-plain{color:#67c23a;background:#f0f9eb;border-color:#c2e7b0}.bk-button--success.is-plain:hover,.bk-button--success.is-plain:focus{background:#67c23a;border-color:#67c23a;color:#ffffff}.bk-button--success.is-plain:active{background:#5daf34;border-color:#5daf34;color:#ffffff;outline:none}.bk-button--success.is-plain.is-disabled,.bk-button--success.is-plain.is-disabled:hover,.bk-button--success.is-plain.is-disabled:focus,.bk-button--success.is-plain.is-disabled:active{color:#a4da89;background-color:#f0f9eb;border-color:#e1f3d8}.bk-button--warning{color:#ffffff;background-color:#e6a23c;border-color:#e6a23c}.bk-button--warning:hover,.bk-button--warning:focus{background:#ebb563;border-color:#ebb563;color:#ffffff}.bk-button--warning:active{background:#cf9236;border-color:#cf9236;color:#ffffff;outline:none}.bk-button--warning.is-active{background:#cf9236;border-color:#cf9236;color:#ffffff}.bk-button--warning.is-disabled,.bk-button--warning.is-disabled:hover,.bk-button--warning.is-disabled:focus,.bk-button--warning.is-disabled:active{color:#ffffff;background-color:#f3d19e;border-color:#f3d19e}.bk-button--warning.is-plain{color:#e6a23c;background:#fdf6ec;border-color:#f5dab1}.bk-button--warning.is-plain:hover,.bk-button--warning.is-plain:focus{background:#e6a23c;border-color:#e6a23c;color:#ffffff}.bk-button--warning.is-plain:active{background:#cf9236;border-color:#cf9236;color:#ffffff;outline:none}.bk-button--warning.is-plain.is-disabled,.bk-button--warning.is-plain.is-disabled:hover,.bk-button--warning.is-plain.is-disabled:focus,.bk-button--warning.is-plain.is-disabled:active{color:#f0c78a;background-color:#fdf6ec;border-color:#faecd8}.bk-button--danger{color:#ffffff;background-color:#f56c6c;border-color:#f56c6c}.bk-button--danger:hover,.bk-button--danger:focus{background:#f78989;border-color:#f78989;color:#ffffff}.bk-button--danger:active{background:#dd6161;border-color:#dd6161;color:#ffffff;outline:none}.bk-button--danger.is-active{background:#dd6161;border-color:#dd6161;color:#ffffff}.bk-button--danger.is-disabled,.bk-button--danger.is-disabled:hover,.bk-button--danger.is-disabled:focus,.bk-button--danger.is-disabled:active{color:#ffffff;background-color:#fab6b6;border-color:#fab6b6}.bk-button--danger.is-plain{color:#f56c6c;background:#fef0f0;border-color:#fbc4c4}.bk-button--danger.is-plain:hover,.bk-button--danger.is-plain:focus{background:#f56c6c;border-color:#f56c6c;color:#ffffff}.bk-button--danger.is-plain:active{background:#dd6161;border-color:#dd6161;color:#ffffff;outline:none}.bk-button--danger.is-plain.is-disabled,.bk-button--danger.is-plain.is-disabled:hover,.bk-button--danger.is-plain.is-disabled:focus,.bk-button--danger.is-plain.is-disabled:active{color:#f9a7a7;background-color:#fef0f0;border-color:#fde2e2}.bk-button--info{color:#ffffff;background-color:#909399;border-color:#909399}.bk-button--info:hover,.bk-button--info:focus{background:#a6a9ad;border-color:#a6a9ad;color:#ffffff}.bk-button--info:active{background:#82848a;border-color:#82848a;color:#ffffff;outline:none}.bk-button--info.is-active{background:#82848a;border-color:#82848a;color:#ffffff}.bk-button--info.is-disabled,.bk-button--info.is-disabled:hover,.bk-button--info.is-disabled:focus,.bk-button--info.is-disabled:active{color:#ffffff;background-color:#c8c9cc;border-color:#c8c9cc}.bk-button--info.is-plain{color:#909399;background:#f4f4f5;border-color:#d3d4d6}.bk-button--info.is-plain:hover,.bk-button--info.is-plain:focus{background:#909399;border-color:#909399;color:#ffffff}.bk-button--info.is-plain:active{background:#82848a;border-color:#82848a;color:#ffffff;outline:none}.bk-button--info.is-plain.is-disabled,.bk-button--info.is-plain.is-disabled:hover,.bk-button--info.is-plain.is-disabled:focus,.bk-button--info.is-plain.is-disabled:active{color:#bcbec2;background-color:#f4f4f5;border-color:#e9e9eb}.bk-button--medium{padding:10px 20px;font-size:14px;border-radius:4px}.bk-button--medium.is-round{padding:10px 20px}.bk-button--medium.is-circle{padding:10px}.bk-button--small{padding:9px 15px;font-size:12px;border-radius:3px}.bk-button--small.is-round{padding:9px 15px}.bk-button--small.is-circle{padding:9px}.bk-button--mini{padding:7px 15px;font-size:12px;border-radius:3px}.bk-button--mini.is-round{padding:7px 15px}.bk-button--mini.is-circle{padding:7px}.bk-button--text{border-color:transparent;color:#409eff;background:transparent;padding-left:0;padding-right:0}.bk-button--text:hover,.bk-button--text:focus{color:#66b1ff;border-color:transparent;background-color:transparent}.bk-button--text:active{color:#3a8ee6;border-color:transparent;background-color:transparent}.bk-button--text.is-disabled,.bk-button--text.is-disabled:hover,.bk-button--text.is-disabled:focus{border-color:transparent}.bk-button-group{display:inline-block;vertical-align:middle}.bk-button-group::before,.bk-button-group::after{display:table;content:\"\"}.bk-button-group::after{clear:both}.bk-button-group>.bk-button{float:left;position:relative}.bk-button-group>.bk-button+.bk-button{margin-left:0}.bk-button-group>.bk-button.is-disabled{z-index:1}.bk-button-group>.bk-button:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.bk-button-group>.bk-button:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.bk-button-group>.bk-button:first-child:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.bk-button-group>.bk-button:first-child:last-child.is-round{border-radius:20px}.bk-button-group>.bk-button:first-child:last-child.is-circle{border-radius:50%}.bk-button-group>.bk-button:not(:first-child):not(:last-child){border-radius:0}.bk-button-group>.bk-button:not(:last-child){margin-right:-1px}.bk-button-group>.bk-button:hover,.bk-button-group>.bk-button:focus,.bk-button-group>.bk-button:active{z-index:1}.bk-button-group>.bk-button.is-active{z-index:1}.bk-button-group>.bk-dropdown>.bk-button{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--primary:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--primary:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--primary:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--success:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--success:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--success:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--warning:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--warning:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--warning:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--danger:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--danger:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--danger:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--info:first-child{border-right-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--info:last-child{border-left-color:rgba(255, 255, 255, 0.5)}.bk-button-group .bk-button--info:not(:first-child):not(:last-child){border-left-color:rgba(255, 255, 255, 0.5);border-right-color:rgba(255, 255, 255, 0.5)}.bk-icon{width:18px;height:18px}.bk-icon--md{width:20px;height:20px}.bk-icon--lg{width:22px;height:22px}.bk-icon--xl{width:24px;height:24px}.bk-icon--xxl{width:30px;height:30px}:host{position:fixed;pointer-events:none;width:330px;outline:none}:host(.bk-toast--top-left),:host(.bk-toast--top-right){top:10px}:host(.bk-toast--bottom-left),:host(.bk-toast--bottom-right){bottom:10px}:host(.bk-toast--bottom-right),:host(.bk-toast--top-right){right:10px}:host(.bk-toast--bottom-left),:host(.bk-toast--top-left){left:10px}.bk-toast{display:flex;padding:16px 20px;border-radius:4px;box-sizing:border-box;border:1px solid #ebeef5;background-color:#ffffff;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);transform:translateX(100%);opacity:0;overflow:hidden;font-size:14px;pointer-events:all}.bk-toast+.bk-toast{margin-top:10px}.bk-toast__group:not(.bk-toast--default){padding:0 20px 0 5px}.bk-toast__title{font-weight:bold;font-size:1.1em;color:#303133;margin-bottom:6px}.bk-toast__content{line-height:21px;color:#606266;text-align:justify}.bk-toast__content p{margin:0}.bk-toast__icon{font-size:28px;min-width:28px}.bk-toast__close-Btn{position:absolute;cursor:pointer;box-sizing:border-box;padding:5px;opacity:0.75;outline:none;line-height:1;background-color:transparent;border:none;right:4px;top:8px}.bk-toast__close-Btn iron-icon{color:#606266;width:18px}.bk-toast__close-Btn:hover,.bk-toast__close-Btn:active,.bk-toast__close-Btn:focus{opacity:1}.bk-toast--success{color:#67c23a}.bk-toast--danger{color:#f56c6c}.bk-toast--info{color:#909399}.bk-toast--warning{color:#e6a23c}";

const Toast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.subscriptions = [];
        this.status = null;
        /** When provided, the toast will auto close after the specified time. (milliseconds) */
        this.hideAfter = Constant.HIDE_AFTER;
        /** Transition in duration  (milliseconds) */
        this.transitionInDuration = Constant.TRANSITION_IN;
        /** Transition out duration  (milliseconds) */
        this.transitionOutDuration = Constant.TRANSITION_OUT;
        /** Position of the toast */
        this.position = Constant.POSITION;
        this.toasts = [];
        this.getToastById = (id) => {
            if (this.el.shadowRoot) {
                return this.el.shadowRoot.querySelector(`#${id}`);
            }
            return null;
        };
        this.addToast = (toast) => {
            this.toasts = [...this.toasts, Object.assign(Object.assign({}, toast), { id: uID() })];
        };
        this.removeToast = (id) => {
            this.toasts = this.toasts.filter((m) => m.id !== id);
        };
        this.addSubscription = (subscription) => {
            this.subscriptions.push(subscription);
        };
        this.removeSubscription = (id) => {
            this.subscriptions = this.subscriptions.filter((s) => s.id !== id);
        };
        this.unSubscribe = (id) => {
            const subscription = this.subscriptions.find((s) => s.id === id);
            if (subscription) {
                subscription.subscription.stop();
            }
        };
        this.openToast = (id) => {
            const element = this.getToastById(id);
            if (element) {
                const subscription = animateIn({
                    el: element,
                    duration: this.transitionInDuration > 0 ? this.transitionInDuration : 0,
                    onComplete: () => {
                        this.removeSubscription(id);
                        if (!!this.hideAfter) {
                            this.closeToast(id, this.hideAfter);
                        }
                    },
                    flip: this.position === 'top-left' || this.position === 'bottom-left',
                });
                this.addSubscription({
                    id,
                    subscription,
                });
            }
        };
        this.closeToast = (id, wait = 0) => {
            const element = this.getToastById(id);
            if (element) {
                const subscription = animateOut({
                    el: element,
                    duration: this.transitionOutDuration > 0 ? this.transitionOutDuration : 0,
                    onComplete: () => {
                        this.removeSubscription(id);
                        this.removeToast(id);
                    },
                    wait,
                    flip: this.position === 'top-left' || this.position === 'bottom-left',
                });
                this.addSubscription({
                    id,
                    subscription,
                });
            }
        };
        this.handleCloseButtonClick = (id) => {
            this.unSubscribe(id);
            this.closeToast(id);
        };
    }
    watchMessages(current, previous) {
        this.status =
            current.length > previous.length
                ? Status.TOAST_ADDED
                : current.length < previous.length
                    ? Status.TOAST_REMOVED
                    : null;
    }
    componentDidUpdate() {
        if (this.status === Status.TOAST_ADDED && this.toasts.length) {
            this.openToast(this.toasts[this.toasts.length - 1].id);
        }
    }
    componentDidUnload() {
        if (this.subscriptions.length) {
            this.subscriptions.forEach((s) => s.subscription.stop());
        }
    }
    listenToToast(e) {
        this.addToast(e.detail);
    }
    render() {
        return (index.h(index.Host, { tabIndex: -1, "aria-hidden": "true", class: `bk-toast--${this.position}` }, this.toasts.map(({ message, id, title, variant = 'default', dismissible = true }) => (index.h("div", { key: id, id: id, class: "bk-toast" }, index.h(Icon, { variant: variant }), index.h("div", { class: `bk-toast__group bk-toast--${variant}` }, title && index.h("div", { class: "bk-toast__title" }, title), index.h("div", { class: "bk-toast__content" }, message), dismissible && (index.h("button", { class: "bk-button bk-button--text bk-toast__close-Btn", onClick: () => this.handleCloseButtonClick(id) }, index.h("iron-icon", { icon: "close", class: "bk-icon" })))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "toasts": ["watchMessages"]
    }; }
};
Toast.style = indexCss;

exports.bk_toast = Toast;
