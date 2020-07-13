import { h, r as registerInstance, H as Host } from './index-c7d865b7.js';

const ProgressText = ({ show, isInnerText, progress }) => show ? (h("div", { class: `bk-progress__text ${isInnerText ? 'inner' : ''} ${progress === 0 ? 'no-progress' : ''}` }, `${progress}%`)) : null;

const ProgressLine = ({ progress, showPercentageText, textInside }) => {
    return [
        h("div", { class: "bk-progress-bar" },
            h("div", { class: "bk-progress-bar__outer" },
                h("div", { class: "bk-progress-bar__inner", style: {
                        width: `${progress}%`,
                    } },
                    h(ProgressText, { show: showPercentageText && textInside, isInnerText: true, progress: progress })))),
        h(ProgressText, { progress: progress, show: showPercentageText && !textInside }),
    ];
};

const Circle = (prop) => (h("path", { d: "\n        M 50 50\n        m 0 -47\n        a 47 47 0 1 1 0 94\n        a 47 47 0 1 1 0 -94\n        ", fill: "none", class: prop.cssName }));
const ProgressCircle = ({ progress, showPercentageText, strokeDash, strokeDashOffset, flip, }) => {
    return (h("div", { class: "bk-progress-circle" },
        h("style", null, `.bk-progress-circle__inner{
                    stroke-dasharray: ${strokeDash[0] * (progress / 100)} ${strokeDash[1]};
                    stroke-dashoffset: ${strokeDashOffset};
                }

                .bk-progress-circle__outer{
                    stroke-dasharray: ${strokeDash[0]} ${strokeDash[1]};
                    stroke-dashoffset: ${strokeDashOffset};
                }
            `),
        h("svg", { viewBox: "0 0 100 100", class: flip ? 'bk-progress--flip' : '' },
            h(Circle, { cssName: "bk-progress-circle__outer" }),
            h(Circle, { cssName: "bk-progress-circle__inner" })),
        h(ProgressText, { show: showPercentageText, progress: progress })));
};

const indexCss = ":host{display:block;width:100%}.bk-progress{position:relative;line-height:1;display:flex;align-items:center}.bk-progress__text{font-size:14px;color:#606266;display:inline-block;vertical-align:middle;margin-left:10px;line-height:1}.bk-progress__text.inner{font-size:12px;padding:0 12px;color:#ffffff}.bk-progress--text-inside .bk-progress-bar__outer{height:16px}.bk-progress.info .bk-progress-bar__inner{background-color:#909399}.bk-progress.info .bk-progress-circle__inner{stroke:#909399}.bk-progress.info .bk-progress__text.inner.no-progress{color:#909399}.bk-progress.danger .bk-progress-bar__inner{background-color:#f56c6c}.bk-progress.danger .bk-progress-circle__inner{stroke:#f56c6c}.bk-progress.danger .bk-progress__text.inner.no-progress{color:#f56c6c}.bk-progress.warning .bk-progress-bar__inner{background-color:#e6a23c}.bk-progress.warning .bk-progress-circle__inner{stroke:#e6a23c}.bk-progress.warning .bk-progress__text.inner.no-progress{color:#e6a23c}.bk-progress.success .bk-progress-bar__inner{background-color:#67c23a}.bk-progress.success .bk-progress-circle__inner{stroke:#67c23a}.bk-progress.success .bk-progress__text.inner.no-progress{color:#67c23a}.bk-progress.default .bk-progress-bar__inner{background-color:#409eff}.bk-progress.default .bk-progress-circle__inner{stroke:#409eff}.bk-progress.default .bk-progress__text.inner.no-progress{color:#409eff}.bk-progress--flip{transform:rotate(180deg)}.bk-progress-bar{display:inline-block;vertical-align:middle;width:100%;box-sizing:border-box}.bk-progress-bar__outer{height:6px;border-radius:100px;background-color:#ebeef5;overflow:hidden;position:relative;vertical-align:middle}.bk-progress-bar__inner{position:absolute;left:0;top:0;height:100%;background-color:#409eff;text-align:right;border-radius:100px;line-height:1;white-space:nowrap;transition:width 0.6s ease}.bk-progress-bar__inner::after{display:inline-block;content:\"\";height:100%;vertical-align:middle}.bk-progress-circle{height:100%;width:100%}.bk-progress-circle__outer,.bk-progress-circle__inner{stroke-width:3px}.bk-progress-circle__outer{stroke:#e5e9f2}.bk-progress-circle__inner{transition:stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s}.bk-progress-circle .bk-progress__text{position:absolute;top:50%;left:0;width:100%;text-align:center;margin:0;transform:translateY(-50%)}";

const ProgressBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Progressed value. Must be between 0 and 100 */
        this.progress = 0;
        /** Display progressed value as a text along with the progress bar */
        this.showPercentageText = true;
        /** Display progressed value as a text, inside the progress bar.
         * This has effect only when `showPercentageText` is enabled and `barType` is line
         */
        this.textInside = false;
        /** Type of the progress bar */
        this.variant = 'default';
        /** Set the kind of progress bar */
        this.barType = 'line';
    }
    renderProgressBar(progressValue) {
        switch (this.barType) {
            case 'circle':
                return (h(ProgressCircle, { progress: progressValue, showPercentageText: this.showPercentageText, strokeDash: [295.31, 295.31], strokeDashOffset: 0 }));
            case 'dashboard':
                return (h(ProgressCircle, { progress: progressValue, showPercentageText: this.showPercentageText, strokeDash: [221.482, 295.31], strokeDashOffset: -36.9137, flip: true }));
            default:
                return (h(ProgressLine, { progress: progressValue, textInside: this.textInside, showPercentageText: this.showPercentageText }));
        }
    }
    render() {
        const progressValue = this.progress >= 0 ? (this.progress <= 100 ? this.progress : 100) : 0;
        return (h(Host, { role: "progressbar", "aria-valuenow": progressValue, "aria-valuemin": 0, "aria-valuemax": 100 }, h("div", { class: `bk-progress ${this.variant} ${this.textInside ? 'bk-progress--text-inside' : ''}` }, this.renderProgressBar(progressValue))));
    }
};
ProgressBar.style = indexCss;

export { ProgressBar as bk_progress_bar };
