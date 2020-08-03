import { html } from 'lit-html'
// import { select, boolean } from '@storybook/addon-knobs'
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
    return html`<bk-rating />`
}
