# bk-lazy-media

Lazy load a background image

```javascript
import { html } from 'lit-html'
import xl from 'xl.jpg'
import xl_thumbnail from 'thumbnails/xl.png'

html`<bk-lazy-media>
    <div
        data-bg-image="${xl}"
        style="min-height: 300px;
        background-image: url(${xl_thumbnail});
        background-repeat: no-repeat;
        background-size: cover;"
    ></div>
</bk-lazy-media>`
```

&nbsp;
