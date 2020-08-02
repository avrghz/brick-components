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
