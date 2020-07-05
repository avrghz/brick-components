# bk-toast

Displays a global notification message at a corner of the page.
Each message can be added to the Toast component by dispatching a custom event on the Toast component.

```javascript
import { html } from 'lit-html'

type Variants = 'danger' | 'warning' | 'success' | 'info' | 'default'

interface ToastMessage {
    title?: string
    message: string
    variant?: Variants
    dismissible?: boolean
}

const addToast = () => {
  const toastContainer = document.getElementById('toastContainer')

  const toast: ToastMessage = {
    title: 'Title goes here',
    message: 'Content goes here',
    variant: 'danger',
    dismissible: true,
  }

  toastContainer.dispatchEvent(
    new CustomEvent('$bkToast', {
      detail: toast,
    })
  )
}

html`
  <button @click=${addToast} class="bk-button">Add Toast</button>
  <bk-toast id="toastContainer"/>
'
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                                                       | Type                                                           | Default                   |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------- |
| `hideAfter`             | `hide-after`              | When provided, the toast will auto close after the specified time. (milliseconds) | `number`                                                       | `Constant.HIDE_AFTER`     |
| `position`              | `position`                | Position of the toast                                                             | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `Constant.POSITION`       |
| `transitionInDuration`  | `transition-in-duration`  | Transition in duration  (milliseconds)                                            | `number`                                                       | `Constant.TRANSITION_IN`  |
| `transitionOutDuration` | `transition-out-duration` | Transition out duration  (milliseconds)                                           | `number`                                                       | `Constant.TRANSITION_OUT` |


----------------------------------------------


