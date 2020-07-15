import { html } from 'lit-html'
// import { select, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'Collapse',
    component: 'bk-collapse',
    parameters: {
        notes,
    },
}

export const Default = () => {
    return html`<bk-collapse>
        <span slot="header">Consistency</span>
        <div slot="content">
            <div>
                Consistent with real life: in line with the process and logic of real life, and comply with languages
                and habits that the users are used to;
            </div>
            <div>
                Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
                position of elements, etc.
            </div>
        </div>
    </bk-collapse>`
}
