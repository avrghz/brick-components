import { html } from 'lit-html'
import { number, object, select } from '@storybook/addon-knobs'
import notes from './readme.md'

export const Toast = () => {
    const transitionInDuration = number('transition-in-duration', 500)
    const transitionOutDuration = number('transition-out-duration', 300)
    const hideAfter = number('hide-after', 4000)
    const position = select('position', ['top-left', 'top-right', 'bottom-left', 'bottom-right'], 'top-right')

    const toast = object('toast', {
        title: 'Title goes here',
        message: 'Content goes here',
        variant: 'danger',
        dismissible: true,
    })

    const addToast = () => {
        const toastContainer = document.getElementById('toastContainer') as HTMLElement
        toastContainer.dispatchEvent(
            new CustomEvent('$bkToast', {
                detail: toast,
            })
        )
    }

    return html`
        <button @click=${addToast} class="bk-button">Add Toast</button>
        <bk-toast
            id="toastContainer"
            transition-in-duration=${transitionInDuration}
            transition-out-duration=${transitionOutDuration}
            hide-after=${hideAfter}
            position=${position}
        />
    `
}
Toast.parameters = {
    notes,
}
