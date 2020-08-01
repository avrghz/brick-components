# bk-lazy-media

Lazy load a picture

```javascript
import { html } from 'lit-html'
import xl from 'xl.jpg'
import xl_thumbnail from 'thumbnails/xl.png'

html`<bk-lazy-media>
     <picture>
        <source media="(min-width: 1200px)" srcset=${xl_thumbnail} data-srcset=${xl} />
        <source media="(min-width: 768px)" srcset=${md_thumbnail} data-srcset=${md} />
        <img src=${sm_thumbnail} data-src=${sm} alt="sunset" />
    </picture>
</bk-lazy-media>`
```

&nbsp;

<!-- Auto Generated Below -->


----------------------------------------------


