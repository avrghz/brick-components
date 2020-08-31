import { h, FunctionalComponent } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import '@polymer/iron-icons/social-icons'
import { StarProps } from './types'

import starEmpty from '../../assets/icons/starEmpty.svg'
// import starFilled from '../../assets/icons/starFilled.svg.svg'

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
        // <iron-icon
        //     icon={icon}
        //     class={{
        //         [`bk-rate__icon is-${size}`]: true,
        //         'is-hover': !!hover,
        //     }}
        //     {...props}
        // ></iron-icon>
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
