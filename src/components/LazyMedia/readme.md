# bk-lazy-media



<!-- Auto Generated Below -->


## Usage

### BgImage

# bk-lazy-media

Lazy load a background image

```javascript
import { html } from 'lit-html'

const images = []

for (let i = 1; i <= 50; i++) {
    images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
        <div
            data-bg-image="https://picsum.photos/seed/${i}/900/500?grayscale"
            style="min-height: 300px;
                background-image: url(https://picsum.photos/seed/${i}/9/5?grayscale);
                background-repeat: no-repeat;
                background-size: cover;"
        ></div>
    </div>`)
}

html`
    <bk-lazy-media>
        <div class="bk-row">
            ${images}
        </div>
        ${courtesy}
    </bk-lazy-media>
`
```

&nbsp;


### Image

# bk-lazy-media

Lazy load an image.

```javascript
import { html } from 'lit-html'

const images = []

for (let i = 1; i <= 50; i++) {
    images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
        <img
            src="https://picsum.photos/seed/${i}/5/5?grayscale"
            data-src="https://picsum.photos/seed/${i}/300/300?grayscale"
            alt="https://picsum.photos/"
            style="min-height: 100px"
        />
    </div>`)
}

html` <bk-lazy-media>
    <div class="bk-row">
        ${images}
    </div>
</bk-lazy-media>`
```

&nbsp;

<!-- Auto Generated Below -->

---


### Picture

# bk-lazy-media

Lazy load a picture

```javascript
import { html } from 'lit-html'

const images = []

for (let i = 1; i <= 50; i++) {
    images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
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
    </div>`)
}

html` <bk-lazy-media>
    <div class="bk-row">
        ${images}
    </div>
</bk-lazy-media>`
```

&nbsp;

<!-- Auto Generated Below -->

---


### Video

# bk-lazy-media

Lazy load a video

```javascript
import { html } from 'lit-html'
import poster from 'poster.jpg'
import video from 'video.mp4'

html`<bk-lazy-media>
    <video controls poster="${poster}" style="width:100%">
        <source data-src="${video}" type="video/mp4" />
    </video>
</bk-lazy-media>`
```

&nbsp;



----------------------------------------------


