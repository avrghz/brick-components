import { html } from 'lit-html'
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { BUTTON_VARIANTS } from '../../shared/types'
import notes from './readme.md'

export default {
    title: 'Components',
    component: 'bk-pop-confirm',
    decorators: [withKnobs],
    parameters: {
        notes,
    },
}

export const PopConfirm = () => {
    const message = text('message', 'Are you sure, you want to delete this?')
    const confirmButtonText = text('confirm-button-text', 'Confirm')
    const cancelButtonText = text('cancel-button-text', 'Cancel')
    const confirmButtonVariant = select('confirm-button-variant', BUTTON_VARIANTS, 'primary')
    const cancelButtonVariant = select('cancel-button-variant', BUTTON_VARIANTS, 'default')
    const disabled = boolean('disabled', false)

    return html`
        <div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
            <bk-pop-confirm
                confirm-button-text=${confirmButtonText}
                cancel-button-text=${cancelButtonText}
                confirm-button-variant=${confirmButtonVariant}
                cancel-button-variant=${cancelButtonVariant}
                message=${message}
                disabled=${disabled}
                @bkConfirmed=${action('confirmed')}
                @bkCancelled=${action('cancelled')}
                ><button class="bk-button" slot="control">Delete</button>
            </bk-pop-confirm>
        </div>
    `
}
