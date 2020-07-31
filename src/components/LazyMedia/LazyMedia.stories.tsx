import { html } from 'lit-html'
import sample from './__fixtures__/sample.jpg'
import sample_thumbnail from './__fixtures__/sample_thumbnail.jpg'
import notesOnWithThumbnail from './readme.md'
import notesOnWithBgColor from './notes/withBgColor.md'

export default {
    title: 'LazyMedia',
    component: 'bk-lazy-media',
}

export const WithThumbnail = () => {
    return html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;align-items: flex-end">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media src=${sample}>
                <img src=${sample_thumbnail} />
            </bk-lazy-media>
        </div>
    </div>`
}

WithThumbnail.story = {
    parameters: {
        notes: notesOnWithThumbnail,
    },
}

export const WithBackgroundColor = () => {
    return html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;align-items: flex-end">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media src=${sample} bg-color="red" style="min-height: 300px">
                <img />
            </bk-lazy-media>
        </div>
    </div>`
}

WithBackgroundColor.story = {
    parameters: {
        notes: notesOnWithBgColor,
    },
}
