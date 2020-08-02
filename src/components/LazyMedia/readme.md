# bk-lazy-media

Lazy load an image.

Coming soon:
_ support for background image
_ Support for video

```javascript
import { html } from 'lit-html'
import xl from 'xl.jpg'
import xl_thumbnail from 'thumbnails/xl.png'

html`<bk-lazy-media>
    <img src=${xl_thumbnail} data-src=${xl} alt="sunset" />
</bk-lazy-media>`
```

&nbsp;

<!-- Auto Generated Below -->

---
