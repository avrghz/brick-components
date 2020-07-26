import { html } from 'lit-html'
import { boolean } from '@storybook/addon-knobs'
import basic from './readme.md'
import group from './group.md'

export default {
    title: 'CheckboxWrapper',
    component: 'bk-checkbox-wrapper',
}

export const Basic = () => {
    const indeterminate = boolean('indeterminate', false)

    return html`
        <bk-checkbox-wrapper label="Option" indeterminate=${indeterminate}>
            <input type="checkbox" aria-hidden="false" value="option" name="options" />
        </bk-checkbox-wrapper>
    `
}

Basic.story = {
    parameters: {
        notes: basic,
    },
}

export const Group = () => {
    return html`<div>
        <bk-checkbox-wrapper label="Apple">
            <input type="checkbox" aria-hidden="false" value="apple" name="fruits" />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Kiwi">
            <input type="checkbox" aria-hidden="false" value="kiwi" name="fruits" checked />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Grape">
            <input type="checkbox" aria-hidden="false" value="grape" name="fruits" checked disabled />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Orange">
            <input type="checkbox" aria-hidden="false" value="orange" name="fruits" disabled />
        </bk-checkbox-wrapper>
    </div>`
}

Group.story = {
    parameters: {
        notes: group,
    },
}
