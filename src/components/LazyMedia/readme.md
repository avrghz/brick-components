# bk-lazy-media



<!-- Auto Generated Below -->


## Usage

### BgImage

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


### Image

# bk-lazy-media

Lazy load an image.

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


### Picture

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


