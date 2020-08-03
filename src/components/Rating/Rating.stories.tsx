import { html } from 'lit-html'
import { number, object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'Rating',
    component: 'bk-rating',
    parameters: {
        notes,
    },
}

export const Default = () => {
    const rating = number('rating', 3)

    const colors = object('colors', {
        1: 'red',
        2: 'red',
        3: 'yellow',
        5: 'green',
    })

    return html`<bk-rating rating=${rating} colors=${JSON.stringify(colors)} />`
}
