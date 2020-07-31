import { html } from 'lit-html'

import sample from './__fixtures__/sample.jpg'
import sample_thumbnail from './__fixtures__/sample_thumbnail.jpg'

import notes from './readme.md'

export default {
    title: 'LazyImg',
    component: 'bk-lazy-img',
    parameters: {
        notes,
    },
}

export const WithThumbnail = () => {
    return html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;align-items: flex-end">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-img src=${sample}>
                <img src=${sample_thumbnail} />
            </bk-lazy-img>
        </div>
    </div>`
}

export const WithBackgroundColor = () => {
    return html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;align-items: flex-end">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-img src=${sample} bg-color="red" style="min-height: 300px">
                <img />
            </bk-lazy-img>
        </div>
    </div>`
}
