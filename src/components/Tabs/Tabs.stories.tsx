import { html } from 'lit-html'
import { select } from '@storybook/addon-knobs'
import { POSITION, DEFAULT_POSITION, VARIANT, DEFAULT_VARIANT } from './types'

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
    const variant = select('variant', VARIANT, DEFAULT_VARIANT)

    return html`<bk-tabs position=${position} variant=${variant}>
        <div slot="header">
            <bk-tab-header tab="tab_1" active="true">Config</bk-tab-header>
            <bk-tab-header tab="tab-2">I am very long tab 1</bk-tab-header>
            <bk-tab-header tab="tab-3">I am very long tab 2</bk-tab-header>
            <bk-tab-header tab="tab-4">User</bk-tab-header>
        </div>
        <bk-tab-panel tab="tab_1">Config content</bk-tab-panel>
        <bk-tab-panel tab="tab-2"> <button class="bk-button">Test</button> </bk-tab-panel>
        <bk-tab-panel tab="tab-3">I am very long tab 2 content</bk-tab-panel>
        <bk-tab-panel tab="tab-4">User content</bk-tab-panel>
    </bk-tabs> `
}
