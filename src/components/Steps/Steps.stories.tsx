import { html } from 'lit-html'
import { boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'Steps',
    component: 'bk-steps',
    parameters: {
        notes,
    },
}

export const Default = () => {
    const isCentered = boolean('is-centered', false)
    return html`<bk-steps is-centered=${isCentered} />`
}
