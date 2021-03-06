import { html } from 'lit-html'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import notes from './readme.md'

export const Dropdown = () => {
    const disabled = boolean('disabled', false)
    const open = boolean('open', false)
    const clickOutsideToClose = boolean('clickOutsideToClose', true)

    return html`
        <div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
            <bk-dropdown
                open=${open}
                click-outside-to-close=${clickOutsideToClose}
                disabled=${disabled}
                @bkOpened=${action('opened')}
                @bkClosed=${action('closed')}
            >
                <button class="bk-button bk-button-text" slot="control">Click me</button>
                <div slot="content">Dropdown content goes here</div>
            </bk-dropdown>
        </div>
    `
}

Dropdown.parameters = {
    notes,
}
