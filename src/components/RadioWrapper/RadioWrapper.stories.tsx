import { html } from 'lit-html'
import basic from './readme.md'
import group from './group.md'

export default {
    title: 'Components/RadioWrapper',
}

export const Basic = () => {
    return html`
        <bk-radio-wrapper label="Option">
            <input type="radio" aria-hidden="false" value="1" name="options" />
        </bk-radio-wrapper>
    `
}

Basic.parameters = {
    notes: basic,
}

export const Group = () => {
    return html`
        <div>
            <bk-radio-wrapper label="Option A">
                <input type="radio" aria-hidden="false" value="a" name="options" />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option B">
                <input type="radio" aria-hidden="false" value="b" name="options" checked />
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

Group.parameters = {
    notes: group,
}
