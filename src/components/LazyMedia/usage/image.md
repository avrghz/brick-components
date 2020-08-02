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
