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
            <bk-lazy-img>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg/320px-Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg"
                />
            </bk-lazy-img>
        </div>
    </div>`
}

export const NoThumbnail = () => {
    return html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;">
        <div class="bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-img> </bk-lazy-img>
        </div>
    </div>`
}
