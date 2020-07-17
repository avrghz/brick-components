import { html } from 'lit-html'
// import { select, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: 'Tabs',
    component: 'bk-tabs',
    parameters: {
        notes,
    },
}

export const Default = () => {
    return html`<bk-tabs>
        <bk-tabs-header slot="header">
            <bk-tab-header tab="tab_1" active="true">Config</bk-tab-header>
            <bk-tab-header tab="tab-2">Role</bk-tab-header>
            <bk-tab-header tab="tab-3">User</bk-tab-header>
        </bk-tabs-header>
        <bk-tabs-content slot="content">
            <bk-tab-content>Config content</bk-tab-content>
            <bk-tab-content>Role content</bk-tab-content>
            <bk-tab-content>User content</bk-tab-content>
        </bk-tabs-content>
    </bk-tabs>`
}
