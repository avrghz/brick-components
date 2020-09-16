import { h, FunctionalComponent } from '@stencil/core'
import { StepProps } from './types'

const Step: FunctionalComponent<StepProps> = ({
    step,
    icon,
    title,
    description,
    status,
    style,
    isCentered,
    isLast,
    direction,
    onClick,
}) => {
    return (
        <div
            class={{
                'bk-step': true,
                'is-center': !!isCentered,
                'is-flex': !isCentered && !!isLast,
                ...(!!status ? { [`is-${status}`]: true } : {}),
                ...{ [`is-${direction}`]: true },
            }}
            style={style}
        >
            <div class="bk-step__head">
                <div class="bk-step__line">
                    <i class="bk-step__line-inner"></i>
                </div>
                <button
                    disabled={status === 'wait'}
                    class={`bk-step__icon ${!!icon ? 'is-icon' : 'is-text'}`}
                    {...(status !== 'wait' ? { onClick } : {})}
                >
                    <div class="bk-step__icon-inner">{!!icon ? <i /> : step}</div>
                </button>
            </div>
            <div class="bk-step__main">
                <div class="bk-step__title">{title}</div>
                {description && <div class="bk-step__description">{description}</div>}
            </div>
        </div>
    )
}

export default Step
