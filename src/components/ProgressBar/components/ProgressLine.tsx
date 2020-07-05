import { FunctionalComponent, h } from '@stencil/core'
import { ProgressProps } from '../types'
import ProgressText from './ProgressText'

const ProgressLine: FunctionalComponent<ProgressProps> = ({ progress, showPercentageText, textInside }) => {
    return [
        <div class="bk-progress-bar">
            <div class="bk-progress-bar__outer">
                <div
                    class="bk-progress-bar__inner"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    <ProgressText show={showPercentageText && textInside} isInnerText={true} progress={progress} />
                </div>
            </div>
        </div>,
        <ProgressText progress={progress} show={showPercentageText && !textInside} />,
    ]
}

export default ProgressLine
