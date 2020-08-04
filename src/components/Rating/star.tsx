import { h, FunctionalComponent } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { StarProps } from './types'

const Star: FunctionalComponent<StarProps> = ({ hover, activeColor, size, checked, fillPercentage }) => {
    const getIcon = (props?: any) => (
        <iron-icon
            icon="star-border"
            class={{
                [`bk-rate__icon is-${size}`]: true,
                'is-hover': !!hover,
            }}
            {...props}
        ></iron-icon>
    )

    return (
        <span>
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
