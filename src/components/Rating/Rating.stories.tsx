import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import { number, object, select, boolean } from '@storybook/addon-knobs'
import COLORS from './__fixtures__/colors'
import { SIZE } from './types'

import notes from './readme.md'

export default {
    title: 'Components',
    component: 'bk-rating',
    parameters: {
        notes,
    },
}

export const Rating = () => {
    const rating = number('rating', 0)
    const size = select('size', SIZE, 'medium')
    const asSmiley = boolean('as-smiley', false)
    const colors = object('colors', COLORS)

    const bkChange = action('bkChange')

    return html`<bk-rating
        rating=${rating}
        colors=${JSON.stringify(colors)}
        size=${size}
        as-smiley=${asSmiley}
        @bkChange=${(e: CustomEvent) => bkChange(e.detail)}
    />`
}
