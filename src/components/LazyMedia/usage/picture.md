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
