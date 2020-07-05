import { html } from 'lit-html'
import { select, withKnobs } from '@storybook/addon-knobs'
import { SHADOW } from './types'

import notes from './readme.md'

export default {
    title: 'Card',
    component: 'bk-card',
    decorators: [withKnobs],
    parameters: {
        notes,
    },
}

export const Default = () => {
    const shadow = select('shadow', SHADOW, 'never')

    return html`
        <div style="width: 35%; margin: auto">
            <bk-card shadow=${shadow}>
                <div slot="header">
                    Card Heading
                </div>
                <div slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </bk-card>
        </div>
    `
}
