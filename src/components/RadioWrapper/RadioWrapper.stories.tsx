import { html } from 'lit-html'
// import { select, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'RadioWrapper',
    component: 'bk-radio-wrapper',
    parameters: {
        notes,
    },
}

export const Basic = () => {
    return html`
        <bk-radio-wrapper label="Option">
            <input type="radio" aria-hidden="false" value="1" name="options" />
        </bk-radio-wrapper>
    `
}

export const Group = () => {
    return html`
        <div>
            <bk-radio-wrapper label="Option A">
                <input type="radio" aria-hidden="false" value="a" name="options" />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option B">
                <input type="radio" aria-hidden="false" value="b" name="options" selected />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option C">
                <input type="radio" aria-hidden="false" value="c" name="options" />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option D">
                <input type="radio" aria-hidden="false" value="d" name="options" disabled />
            </bk-radio-wrapper>
        </div>
    `
}
