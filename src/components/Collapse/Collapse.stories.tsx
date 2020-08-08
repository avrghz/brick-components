import { html } from 'lit-html'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import collapseReadme from './readme.md'
import collapseGroupReadme from './Group/readme.md'

export default {
    title: 'Components/Collapse',
    component: 'bk-collapse',
}

export const Individual = () => {
    const open = boolean('open', false)
    const disabled = boolean('disabled', false)

    const bkOpen = action('bkOpen')
    const bkOpened = action('bkOpened')
    const bkClose = action('bkClose')
    const bkClosed = action('bkClosed')

    return html`<bk-collapse
        open=${open}
        disabled=${disabled}
        @bkOpen=${bkOpen}
        @bkOpened=${bkOpened}
        @bkClose=${bkClose}
        @bkClosed=${bkClosed}
    >
        <span slot="header">Lorem ipsum dolor sit amet</span>
        <div slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </div>
    </bk-collapse>`
}

Individual.story = {
    parameters: {
        notes: collapseReadme,
    },
}

export const Group = () => {
    const isAccordion = boolean('is-accordion', true)

    return html`<bk-collapse-group is-accordion=${isAccordion}>
        <bk-collapse open="false" disabled="false">
            <span slot="header">Title 1</span>
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        </bk-collapse>
        <bk-collapse open="true" disabled="false">
            <span slot="header">Title 2</span>
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
        </bk-collapse>
        <bk-collapse open="false" disabled="false">
            <span slot="header">Title 3</span>
            <div slot="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
        </bk-collapse>
    </bk-collapse-group>`
}

Group.story = {
    parameters: {
        notes: collapseGroupReadme,
    },
}
