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
