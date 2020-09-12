# bk-rating

Description goes here

```javascript
import { html } from 'lit-html'

html` <bk-rating/> `
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                  | Type                             | Default     |
| ---------- | ----------- | ---------------------------- | -------------------------------- | ----------- |
| `asSmiley` | `as-smiley` | Show smiley instead of start | `boolean`                        | `false`     |
| `colors`   | `colors`    | The color for each rating    | `Colors \| string \| undefined`  | `undefined` |
| `rating`   | `rating`    | The rating out of 5          | `number`                         | `0`         |
| `readOnly` | `read-only` | Enable or disable the rating | `boolean`                        | `false`     |
| `size`     | `size`      | Size of the rating           | `"large" \| "medium" \| "small"` | `'medium'`  |


## Events

| Event      | Description                             | Type                  |
| ---------- | --------------------------------------- | --------------------- |
| `bkChange` | This event is fired when rating changed | `CustomEvent<number>` |


----------------------------------------------


