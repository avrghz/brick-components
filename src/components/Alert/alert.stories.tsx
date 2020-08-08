import { html } from 'lit-html'
import { select, boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { VARIANTS, SHADES } from '../../shared/types'

import notes from './readme.md'

export default {
    title: 'Components',
    component: 'bk-alert',
    decorators: [withKnobs],
    parameters: {
        notes,
    },
}

export const Alert = () => {
    const variant = select('variant', VARIANTS, 'default')
    const shade = select('shade', SHADES, 'light')
    const dismissible = boolean('dismissible', true)

    return html`
        <bk-alert @bkClosed=${action('on close event')} variant=${variant} shade=${shade} dismissible=${dismissible}>
            This is a message
        </bk-alert>
    `
}
