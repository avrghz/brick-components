# bk-lazy-media

This component is used to lazy load
  * Images

An example on using `<img>` with a thumbnail as placeholder

```javascript
import { html } from 'lit-html'
import xl from 'xl.jpg'
import xl_thumbnail from 'thumbnails/xl.png'

html`<div class="bk-row bk-row--flex">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media src=${xl}>
                <img src=${xl_thumbnail} />
            </bk-lazy-media>
        </div>
    </div>`
```


An example on using `<img>` with background color as placeholder

```javascript
import { html } from 'lit-html'
import xl from 'xl.jpg'

html`<div class="bk-row bk-row--flex">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media src=${xl} bg-color="red">
                <img />
            </bk-lazy-media>
        </div>
    </div>`
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                                      | Type                  | Default     |
| --------- | ---------- | ---------------------------------------------------------------- | --------------------- | ----------- |
| `bgColor` | `bg-color` | Background color to be shown while waiting for the image to load | `string \| undefined` | `undefined` |


----------------------------------------------


