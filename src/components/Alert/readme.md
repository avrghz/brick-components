# bk-alert

Displays important alert messages.

```javascript
import { html } from 'lit-html'

const onCloseHandler = () => {}

html`
    <bk-alert @bkClosed=${onCloseHandler} variant="danger" shade="light" dismissible="true">
        This is a message
    </bk-alert>
`
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description            | Type                                                        | Default     |
| ------------- | ------------- | ---------------------- | ----------------------------------------------------------- | ----------- |
| `dismissible` | `dismissible` | Make alert dismissible | `boolean`                                                   | `true`      |
| `shade`       | `shade`       | Light or dark          | `"dark" \| "light"`                                         | `'light'`   |
| `variant`     | `variant`     | Type of the alert      | `"danger" \| "default" \| "info" \| "success" \| "warning"` | `'default'` |


## Events

| Event      | Description                              | Type                |
| ---------- | ---------------------------------------- | ------------------- |
| `bkClosed` | Event fired when close button is clicked | `CustomEvent<null>` |


## Slots

| Slot | Description                     |
| ---- | ------------------------------- |
|      | Use this to render the content. |


----------------------------------------------


