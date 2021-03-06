import { html } from 'lit-html'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { VARIANTS } from '../../shared/types'
import notes from './readme.md'

export const Switch = () => {
    const isOn = boolean('is-on', false)
    const disabled = boolean('disabled', false)
    const variant = select('variant', VARIANTS, 'default')

    return html`<div
        style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center; font-size: 30px"
    >
        <bk-switch variant=${variant} is-on=${isOn} disabled=${disabled} @bkChange=${action('state changed')} />
    </div> `
}

Switch.parameters = {
    notes,
}
