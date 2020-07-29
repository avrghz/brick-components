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
    return html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc; align-items: flex-end">
        <div class="bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-img />
        </div>
    </div>`
}
