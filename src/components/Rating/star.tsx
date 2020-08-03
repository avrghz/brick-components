import { h, FunctionalComponent } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { StarProps } from './types'

const Star: FunctionalComponent<StarProps> = ({ checked, hover, onClick, activeColor = 'rgb(247, 186, 42)' }) => {
    return (
        <span class="bk-rate__item" onClick={onClick}>
            <iron-icon
                icon={checked ? 'star' : 'star-border'}
                class={{
                    'bk-icon bk-icon--lg bk-rate__icon': true,
                    'is-hover': !!hover,
                }}
                {...(!!checked
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
