import { h } from '@stencil/core';
import ProgressText from './ProgressText';
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
export default ProgressCircle;
