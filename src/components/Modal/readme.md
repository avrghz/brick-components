# bk-modal

```javascript
import { html } from 'lit-html'

const openModal = () => {
    const modal = document.querySelector('bk-modal') as HTMLElement
    modal.setAttribute('open', 'true')
}

html`
    <button @click=${openModal} class="bk-button">Open Modal</button>

     <bk-modal
            open="false"
            header="Hello world"
            dismissible="true"
            @bkOpen=${() => {}}
            @bkOpened=${() => {}}
            @bkClose=${() => {}}
            @bkClosed=${() => {}}
        >
            <div slot="header">This is header</div>
            <div slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
            <div slot="footer" style="text-align: right">
                <button class="bk-button bk-button--medium">No</button>
                <button class="bk-button bk-button--primary bk-button--medium">Yes</button>
            </div>
    </bk-modal>
`
```

&nbsp;

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


