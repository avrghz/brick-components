# bk-collapse

```javascript
import { html } from 'lit-html'

html`<bk-collapse open="false" disabled="false" @bkOpened=${() => {}} @bkClosed=${() => {}}>
    <span slot="header">Lorem ipsum dolor sit amet</span>
    <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
</bk-collapse>`
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                | Type      | Default |
| ---------- | ---------- | -------------------------- | --------- | ------- |
| `disabled` | `disabled` | Enable or disable collapse | `boolean` | `false` |
| `open`     | `open`     | Open or close the collapse | `boolean` | `false` |


## Events

| Event      | Description                                      | Type               |
| ---------- | ------------------------------------------------ | ------------------ |
| `bkClose`  | This event is fired just before the panel closes | `CustomEvent<any>` |
| `bkClosed` | This event is fired after the panel is closed    | `CustomEvent<any>` |
| `bkOpen`   | This event is fired just before the panel opens  | `CustomEvent<any>` |
| `bkOpened` | This event is fired after the panel is opened    | `CustomEvent<any>` |


----------------------------------------------


