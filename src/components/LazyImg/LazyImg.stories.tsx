import { html } from 'lit-html'
// import { select, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'LazyImg',
    component: 'bk-lazy-img',
    parameters: {
        notes,
    },
}

export const Default = () => {
    return html`<div class="bk-row bk-row--flex">
        <div class="bk-col-12 bk-col-offset-6">
            <bk-lazy-img />
        </div>
    </div>`
}
