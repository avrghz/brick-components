import { FunctionalComponent, h } from '@stencil/core'
import { ProgressTextProps } from '../types'

const ProgressText: FunctionalComponent<ProgressTextProps> = ({ show, isInnerText, progress }) =>
    show ? (
        <div
            class={`bk-progress__text ${isInnerText ? 'inner' : ''} ${progress === 0 ? 'no-progress' : ''}`}
        >{`${progress}%`}</div>
    ) : null

export default ProgressText
