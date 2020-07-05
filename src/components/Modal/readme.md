# bk-modal

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description            | Type                  | Default     |
| ------------- | ------------- | ---------------------- | --------------------- | ----------- |
| `dismissible` | `dismissible` | Is dismissible or not  | `boolean`             | `true`      |
| `header`      | `header`      | Header to be shown     | `string \| undefined` | `undefined` |
| `open`        | `open`        | Show or hide the modal | `boolean`             | `false`     |


## Events

| Event      | Description                        | Type               |
| ---------- | ---------------------------------- | ------------------ |
| `bkClose`  | Fired when modal is about to close | `CustomEvent<any>` |
| `bkClosed` | Fired after modal is closed        | `CustomEvent<any>` |
| `bkOpen`   | Fired when modal is about to open  | `CustomEvent<any>` |
| `bkOpened` | Fired after modal is opened        | `CustomEvent<any>` |


## Slots

| Slot       | Description                        |
| ---------- | ---------------------------------- |
| `"body"`   | Body content of the modal popup.   |
| `"footer"` | footer content of the modal popup. |


----------------------------------------------


