import { h, FunctionalComponent } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { StarProps } from './types'

const Star: FunctionalComponent<StarProps> = ({ checked, hover, activeColor, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <span class="bk-rate__item" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <iron-icon
                icon={checked ? 'star' : 'star-border'}
                class={{
                    'bk-icon bk-icon--lg bk-rate__icon': true,
                    'is-hover': !!hover,
                }}
                {...(!!checked || !!hover
                    ? {
                          style: {
                              color: activeColor,
                          },
                      }
                    : {})}
            ></iron-icon>
        </span>
    )
}
export default Star
