import { html } from 'lit-html'
// import { select, boolean } from '@storybook/addon-knobs'

import notes from './readme.md'

export default {
    title: 'CheckboxWrapper',
    component: 'bk-checkbox-wrapper',
    parameters: {
        notes,
    },
}

export const Default = () => {
    return html` <div>
        <bk-checkbox-wrapper label="Kiwi">
            <input type="checkbox" aria-hidden="false" value="Kiwi" name="fruits" />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Mango">
            <input type="checkbox" aria-hidden="false" value="Mango" name="fruits" /> </bk-checkbox-wrapper
        ><bk-checkbox-wrapper label="Apple">
            <input type="checkbox" aria-hidden="false" value="Apple" name="fruits" />
        </bk-checkbox-wrapper>
    </div>`
}
