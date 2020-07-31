# bk-lazy-img

This example shows how to use `bk-lazy-media` with a background color.

```javascript
import { html } from 'lit-html'

 html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;align-items: flex-end">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media src=${sample} bg-color="red" style="min-height: 300px">
                <img />
            </bk-lazy-media>
        </div>
    </div>`
```


