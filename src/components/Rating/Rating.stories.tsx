import { html } from 'lit-html'
import { number, object, select, boolean } from '@storybook/addon-knobs'
import { SIZE } from './types'
import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'Rating',
    component: 'bk-rating',
    parameters: {
        notes,
    },
}

export const Default = () => {
    const rating = number('rating', 3.5)
    const size = select('size', SIZE, 'medium')
    const asSmiley = boolean('as-smiley', false)
    const colors = object('colors', {
        1: 'red',
        2: 'red',
        3: 'yellow',
        5: 'green',
    })

    const bkChange = action('bkChange')

    return html`<bk-rating
        rating=${rating}
        colors=${JSON.stringify(colors)}
        size=${size}
        as-smiley=${asSmiley}
        @bkChange=${(e: CustomEvent) => bkChange(e.detail)}
    />`
}
