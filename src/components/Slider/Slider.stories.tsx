import { html } from 'lit-html'
import { select, boolean, number, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { VARIANTS } from '../../shared/types'

import notes from './readme.md'

export default {
    title: 'Components',
    component: 'bk-slider',
    decorators: [withKnobs],
    parameters: {
        notes,
    },
}

export const Slider = () => {
    const variant = select('variant', VARIANTS, 'default')
    const disabled = boolean('disabled', false)
    const value = number('value', 25)
    const step = number('step', 1)
    const showTooltip = boolean('show-tooltip', true)

    return html`
        <bk-slider
            value=${value}
            disabled=${disabled}
            variant=${variant}
            step=${step}
            show-tooltip=${showTooltip}
            @bkChange=${action('state changed')}
        />
    `
}
