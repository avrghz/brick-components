import { html } from 'lit-html'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { POSITION, VARIANT } from './types'
import tabsNotes from './readme.md'
import tabHeaderNotes from './TabHeader/readme.md'
import tabPanelNotes from './TabPanel/readme.md'

export const Tabs = () => {
    const position = select('position', POSITION, 'top')
    const variant = select('variant', VARIANT, 'simple')

    const bkSelect = action('bkSelect')

    return html`<bk-tabs position=${position} variant=${variant} @bkSelect=${(e: CustomEvent) => bkSelect(e.detail)}>
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

Tabs.notes = {
    tabs: tabsNotes,
    tabHeader: tabHeaderNotes,
    tabPanel: tabPanelNotes,
}
