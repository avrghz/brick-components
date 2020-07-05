import { h } from '@stencil/core';
import ProgressText from './ProgressText';
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
export default ProgressLine;
