import { h } from '@stencil/core'
import { styler, tween, delay, composite, ColdSubscription } from 'popmotion'
import uniqueId from 'lodash/uniqueId'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { ToastMessage, AnimationIn, AnimationOut } from './types'

export const uID = () => uniqueId('toast_')

export const animateIn = ({ el, duration, onComplete, flip = false }: AnimationIn): ColdSubscription => {
    const element = styler(el)

    return composite({
        opacity: tween({ duration: duration * 2, from: 0, to: 1 }),
        x: tween({ duration, from: flip ? '-100%' : '100%', to: 0 }),
    }).start({
        update: ({ x, opacity }: { x: number; opacity: number }) => element.set('opacity', opacity).set('x', x),
        ...(onComplete ? { complete: onComplete } : {}),
    })
}

export const animateOut = ({ el, duration, onComplete, wait, flip = false }: AnimationOut): ColdSubscription => {
    const element = styler(el)

    return delay(wait).start({
        complete: () => {
            composite({
                opacity: tween({ duration, from: 1, to: 0 }),
                x: tween({ to: flip ? '-75%' : '75%', duration: duration * 2 }),
            }).start({
                update: ({ x, opacity }: { x: number; opacity: number }) => element.set('x', x).set('opacity', opacity),
                ...(onComplete ? { complete: onComplete } : {}),
            })
        },
    })
}

export const Icon = ({ variant }: { variant: ToastMessage['variant'] }) => {
    let icon = ''

    switch (variant) {
        case 'danger':
            icon = 'cancel'
            break
        case 'info':
            icon = 'info'
            break
        case 'success':
            icon = 'check-circle'
            break
        case 'warning':
            icon = 'warning'
            break
    }

    return icon && <iron-icon icon={icon} class={`bk-toast__icon bk-toast--${variant}`}></iron-icon>
}
