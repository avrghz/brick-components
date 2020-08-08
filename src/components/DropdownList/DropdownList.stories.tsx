import { html } from 'lit-html'
import { boolean, withKnobs, object, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import notes from './readme.md'
import data from './__fixtures__/options.json'

export default {
    title: 'Components/DropdownList',
    component: 'bk-dropdown-list',
    decorators: [withKnobs],
    parameters: {
        notes,
    },
}

export const Basic = () => {
    const disabled = boolean('disabled', false)
    const searchable = boolean('searchable', false)
    const options = object('option', data)
    const selectedOption = text('selected-option', data[1].value)
    const bkSelect = action('bkSelect')

    return html`<div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
        <bk-dropdown-list
            disabled=${disabled}
            searchable=${searchable}
            options=${JSON.stringify(options)}
            selected-option=${selectedOption}
            @bkSelect=${(e: CustomEvent) => bkSelect(e.detail)}
        >
            <button class="bk-button" slot="control">
                Click me
            </button>
        </bk-dropdown-list>
    </div>`
}

export const Advanced = () => {
    const disabled = boolean('disabled', false)
    const searchable = boolean('searchable', false)

    const onOptionSelect = (e: CustomEvent) => {
        const button = document.getElementById('control') as HTMLButtonElement
        button.textContent = `You selected ${e.detail.label}`
    }

    return html`<div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
        <bk-dropdown-list
            disabled=${disabled}
            searchable=${searchable}
            options=${JSON.stringify(data)}
            @bkSelect=${onOptionSelect}
        >
            <button id="control" class="bk-button bk-button--text" slot="control">
                Select your fruit
            </button>
        </div>
    </div>`
}
