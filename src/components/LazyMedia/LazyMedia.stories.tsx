import { html } from 'lit-html'
import video from './__fixtures__/video.mp4'
import imageUsage from './usage/image.md'
import pictureUsage from './usage/picture.md'
import bgImageUsage from './usage/bgImage.md'
import videoUsage from './usage/video.md'

export default {
    title: 'LazyMedia',
    component: 'bk-lazy-media',
}

const courtesy = html` <div class="bk-row" style="margin-top:20px; text-align:right">
    <h4>Photos taken from https://picsum.photos/</h4>
</div>`

export const Image = () => {
    const images = []

    for (let i = 1; i <= 50; i++) {
        images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
            <bk-lazy-media style="min-height: 100px">
                <img
                    src="https://picsum.photos/seed/${i}/5/5?grayscale"
                    data-src="https://picsum.photos/seed/${i}/300/300?grayscale"
                    alt="https://picsum.photos/"
                    style="min-height: 100px"
                />
            </bk-lazy-media>
        </div>`)
    }

    return html`<div class="bk-row">
            ${images}
        </div>
        ${courtesy}`
}

Image.story = {
    parameters: {
        notes: imageUsage,
    },
}

export const Picture = () => {
    const images = []

    for (let i = 1; i <= 50; i++) {
        images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
            <bk-lazy-media>
                <picture>
                    <source
                        media="(min-width: 1200px)"
                        srcset="https://picsum.photos/seed/${i}/9/6?grayscale"
                        data-srcset="https://picsum.photos/seed/${i}/900/600?grayscale"
                    />
                    <source
                        media="(min-width: 768px)"
                        srcset="https://picsum.photos/seed/${i}/7/5?grayscale"
                        data-srcset="https://picsum.photos/seed/${i}/700/500?grayscale"
                    />

                    <img
                        src="https://picsum.photos/seed/${i}/5/5?grayscale"
                        data-src="https://picsum.photos/seed/${i}/500/500?grayscale"
                        alt="https://picsum.photos/"
                        style="min-height: 100px"
                    />
                </picture>
            </bk-lazy-media>
        </div>`)
    }

    return html`<div class="bk-row">
            ${images}
        </div>
        ${courtesy}`
}

Picture.story = {
    parameters: {
        notes: pictureUsage,
    },
}

export const BackgroundImage = () => {
    const images = []

    for (let i = 1; i <= 50; i++) {
        images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
            <bk-lazy-media>
                <div
                    data-bg-image="https://picsum.photos/seed/${i}/900/500?grayscale"
                    style="min-height: 300px;
                background-image: url(https://picsum.photos/seed/${i}/9/5?grayscale);
                background-repeat: no-repeat;
                background-size: cover;"
                ></div>
            </bk-lazy-media>
        </div>`)
    }

    return html`<div class="bk-row">
        ${images}
    </div>`
}

BackgroundImage.story = {
    parameters: {
        notes: bgImageUsage,
    },
}

export const Video = () => {
    return html`<div class="bk-row bk-row--flex">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media>
                <video controls poster="https://picsum.photos/seed/99/900/500?grayscale" style="width:100%">
                    <source data-src="${video}" type="video/mp4" />
                </video>
            </bk-lazy-media>
        </div>
    </div>`
}

Video.story = {
    parameters: {
        notes: videoUsage,
    },
}
