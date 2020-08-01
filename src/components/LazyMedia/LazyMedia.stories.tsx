import { html } from 'lit-html'
import xl from './__fixtures__/xl.jpg'
import md from './__fixtures__/md.jpg'
import sm from './__fixtures__/sm.jpg'
import xl_thumbnail from './__fixtures__/thumbnails/xl.png'
import md_thumbnail from './__fixtures__/thumbnails/md.png'
import sm_thumbnail from './__fixtures__/thumbnails/sm.png'

import imageUsage from './readme.md'
import pictureUsage from './readme_picture.md'

export default {
    title: 'LazyMedia',
    component: 'bk-lazy-media',
}

export const Image = () => {
    return html`<div class="bk-row bk-row--flex">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media>
                <img src=${xl_thumbnail} data-src=${xl} alt="sunset" />
            </bk-lazy-media>
        </div>
    </div>`
}

Image.story = {
    parameters: {
        notes: imageUsage,
    },
}

export const Picture = () => {
    return html`<div class="bk-row bk-row--flex">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media>
                <picture>
                    <source media="(min-width: 1200px)" srcset=${xl_thumbnail} data-srcset=${xl} />
                    <source media="(min-width: 768px)" srcset=${md_thumbnail} data-srcset=${md} />
                    <img src=${sm_thumbnail} data-src=${sm} alt="sunset" />
                </picture>
            </bk-lazy-media>
        </div>
    </div>`
}

Picture.story = {
    parameters: {
        notes: pictureUsage,
    },
}
