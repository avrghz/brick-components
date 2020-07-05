# bk-switch

Switch is used for switching between two opposing states. Font size can be used to adjust the size of the switch.

```javascript
import { html } from 'lit-html'

const onChangeHandler = (e: CustomEvent) => {
    console.log(e.detail)
}

html`<bk-switch is-on="false" disabled="false" @bkChange=${onChangeHandler} /> `
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                     | Type                                                        | Default     |
| ---------- | ---------- | ------------------------------- | ----------------------------------------------------------- | ----------- |
| `disabled` | `disabled` | Enable or disable switch        | `boolean`                                                   | `false`     |
| `isOn`     | `is-on`    | Set default state of the switch | `boolean`                                                   | `false`     |
| `variant`  | `variant`  | Type of the alert               | `"danger" \| "default" \| "info" \| "success" \| "warning"` | `'default'` |


## Events

| Event      | Description                 | Type                    |
| ---------- | --------------------------- | ----------------------- |
| `bkChange` | Fired on every state change | `CustomEvent<AVChange>` |


----------------------------------------------


