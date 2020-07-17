import { html } from 'lit-html'
import { select } from '@storybook/addon-knobs'
import { POSITION, DEFAULT_POSITION } from './types'

import notes from './readme.md'

export default {
    title: 'Tabs',
    component: 'bk-tabs',
    parameters: {
        notes,
    },
}

export const Default = () => {
    const position = select('position', POSITION, DEFAULT_POSITION)

    return html`<bk-tabs position=${position}>
        <bk-tabs-header slot="header" position=${position}>
            <bk-tab-header tab="tab_1">Config</bk-tab-header>
            <bk-tab-header tab="tab-2">I am very long tab 1</bk-tab-header>
            <bk-tab-header tab="tab-3" active="true">I am very long tab 2</bk-tab-header>
            <bk-tab-header tab="tab-4">User</bk-tab-header>
        </bk-tabs-header>
        <bk-tabs-content slot="content">
            <bk-tab-content tab="tab_1">Config content</bk-tab-content>
            <bk-tab-content tab="tab-2">I am very long tab 1 content</bk-tab-content>
            <bk-tab-content tab="tab-3">I am very long tab 2 content</bk-tab-content>
            <bk-tab-content tab="tab-4">User content</bk-tab-content>
        </bk-tabs-content>
    </bk-tabs> `
}
