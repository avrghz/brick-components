import { h } from '@stencil/core'
import { styler, tween, delay, composite, ColdSubscription } from 'popmotion'
import uniqueId from 'lodash/uniqueId'
import { ToastMessage, AnimationIn, AnimationOut } from './types'

import success from '../../assets/icons/success.svg'
import alert from '../../assets/icons/alert.svg'
import info from '../../assets/icons/info.svg'
import warning from '../../assets/icons/warning.svg'

const ICONS: { [key: string]: string } = {
    success,
    danger: alert,
    info,
    warning,
    default: '',
}

export const uID = () => uniqueId('toast_')

export const animateIn = ({ el, duration, onComplete, flip = false }: AnimationIn): ColdSubscription => {
    const element = styler(el)

    return composite({
        opacity: tween({ duration, from: 0, to: 1 }),
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

export const Icon = ({ variant }: { variant: ToastMessage['variant'] }) =>
    !!variant && !!ICONS[variant] ? (
        <i innerHTML={ICONS[variant]} class={`bk-toast__icon bk-toast--${variant}`} />
    ) : null
