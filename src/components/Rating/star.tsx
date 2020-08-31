import { h, FunctionalComponent } from '@stencil/core'
import { StarProps } from './types'

import starEmpty from '../../assets/icons/starEmpty.svg'

const Star: FunctionalComponent<StarProps> = ({
    hover,
    activeColor,
    size,
    checked,
    fillPercentage,
    icon = starEmpty,
}) => {
    const getIcon = (props?: any) => (
        <i
            innerHTML={icon}
            class={{
                [`bk-rate__icon is-${size}`]: true,
                'is-hover': !!hover,
            }}
            {...props}
        />
    )

    return (
        <span data-key={icon}>
            {getIcon()}
            <span
                class="bk-rate__item is-fill"
                style={{
                    width: `${fillPercentage * 100}%`,
                }}
            >
                {checked &&
                    getIcon({
                        style: {
                            color: activeColor,
                        },
                    })}
            </span>
        </span>
    )
}
export default Star
