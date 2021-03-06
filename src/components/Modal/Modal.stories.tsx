import { html } from 'lit-html'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import notes from './readme.md'

export const Modal = () => {
    const open = boolean('open', false)
    const header = text('header', 'Hello world')
    const dismissible = boolean('dismissible', true)

    const openModal = () => {
        const modal = document.querySelector('bk-modal') as HTMLElement
        modal.setAttribute('open', 'true')
    }

    return html`
        <div class="bk-row">
            <div class="bk-col-24" style="text-align:center; height: 1000px">
                <button @click=${openModal} class="bk-button">Open Modal</button>
            </div>
            <div class="bk-col-24">
                <button class="bk-button">XYZ</button>
            </div>
        </div>
        <bk-modal
            open=${open}
            header=${header}
            dismissible=${dismissible}
            @bkOpen=${action('opening')}
            @bkOpened=${action('opened')}
            @bkClose=${action('closing')}
            @bkClosed=${action('closed')}
        >
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
}

Modal.parameters = {
    notes,
}
