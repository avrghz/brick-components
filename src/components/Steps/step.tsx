import { h, FunctionalComponent } from '@stencil/core'
import { StepProps } from './types'

const Step: FunctionalComponent<StepProps> = ({ step, title, description, state, style, isCentered, isLast }) => {
    return (
        <div
            class={{
                'bk-step is-horizontal': true,
                'is-center': !!isCentered,
                'is-flex': !isCentered && !!isLast,
                ...(!!state ? { [`is-${state}`]: true } : {}),
            }}
            style={style}
        >
            <div class="bk-step__head">
                <div class="bk-step__line">
                    <i class="bk-step__line-inner"></i>
                </div>
                <div class="bk-step__icon is-text">
                    <div class="bk-step__icon-inner">{step}</div>
                </div>
            </div>
            <div class="bk-step__main">
                <div class="bk-step__title">{title}</div>
                <div class="bk-step__description">{description}</div>
            </div>
        </div>
    )
}

export default Step
