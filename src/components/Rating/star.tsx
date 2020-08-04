import { h, FunctionalComponent } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { StarProps } from './types'

const Star: FunctionalComponent<StarProps> = ({ hover, activeColor }) => {
    return (
        <iron-icon
            icon="star-border"
            class={{
                'bk-icon bk-icon--lg bk-rate__icon': true,
                'is-hover': !!hover,
            }}
            {...(!!activeColor
                ? {
                      style: {
                          color: activeColor,
                      },
                  }
                : {})}
        ></iron-icon>
    )
}
export default Star
