# bk-lazy-media

This component is used to lazy load
  * Images

This example shows how to use `bk-lazy-media` with a thumbnail image.

```javascript
import { html } from 'lit-html'

html`<div class="bk-row bk-row--flex" style="height: 2000px; background: #ccc;align-items: flex-end">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media src=${sample}>
                <img src=${sample_thumbnail} />
            </bk-lazy-media>
        </div>
    </div>`
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute  | Description | Type                  | Default     |
| ------------------ | ---------- | ----------- | --------------------- | ----------- |
| `bgColor`          | `bg-color` |             | `string \| undefined` | `undefined` |
| `src` _(required)_ | `src`      |             | `string`              | `undefined` |


----------------------------------------------


