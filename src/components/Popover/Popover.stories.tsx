import { html } from 'lit-html'
import { select, boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { TRIGGER_ON } from './types'

import notes from './readme.md'

export default {
    title: 'Popover',
    component: 'bk-popover',
    decorators: [withKnobs],
    parameters: {
        notes,
    },
}

const placements = [
    'auto',
    'top',
    'bottom',
    'left',
    'right',
    'auto-start',
    'auto-end',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'right-start',
    'right-end',
    'left-start',
    'left-end',
]

export const Default = () => {
    let show = false
    const triggerOn = select('trigger-on', TRIGGER_ON, 'click')
    const placement = select('placement', placements, 'auto')
    const disabled = boolean('disabled', false)

    if (triggerOn === 'manual') {
        show = boolean('show', false)
    }

    return html`
        <div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
            <bk-popover
                show=${show}
                trigger-on=${triggerOn}
                placement=${placement}
                disabled=${disabled}
                @bkOpened=${action('opened')}
                @bkClosed=${action('closed')}
            >
                <button class="bk-button" slot="control">Popover</button>
                <div slot="content">This is the content of the popover</div>
            </bk-popover>
        </div>
    `
}
