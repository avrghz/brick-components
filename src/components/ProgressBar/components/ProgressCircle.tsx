import { FunctionalComponent, h } from '@stencil/core'
import { ProgressCircleProps } from '../types'
import ProgressText from './ProgressText'

const Circle: FunctionalComponent<{ cssName: string }> = (prop) => (
    <path
        d="
        M 50 50
        m 0 -47
        a 47 47 0 1 1 0 94
        a 47 47 0 1 1 0 -94
        "
        fill="none"
        class={prop.cssName}
    ></path>
)

const ProgressCircle: FunctionalComponent<ProgressCircleProps> = ({
    progress,
    showPercentageText,
    strokeDash,
    strokeDashOffset,
    flip,
}) => {
    return (
        <div class="bk-progress-circle">
            <style>
                {`.bk-progress-circle__inner{
                    stroke-dasharray: ${strokeDash[0] * (progress / 100)} ${strokeDash[1]};
                    stroke-dashoffset: ${strokeDashOffset};
                }

                .bk-progress-circle__outer{
                    stroke-dasharray: ${strokeDash[0]} ${strokeDash[1]};
                    stroke-dashoffset: ${strokeDashOffset};
                }
            `}
            </style>
            <svg viewBox="0 0 100 100" class={flip ? 'bk-progress--flip' : ''}>
                <Circle cssName="bk-progress-circle__outer" />
                <Circle cssName="bk-progress-circle__inner" />
            </svg>
            <ProgressText show={showPercentageText} progress={progress} />
        </div>
    )
}

export default ProgressCircle
