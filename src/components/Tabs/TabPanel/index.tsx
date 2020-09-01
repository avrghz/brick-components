import { Component, h, Prop, Host, Listen, State } from '@stencil/core'

@Component({
    tag: 'bk-tab-panel',
})
export class TabPanel {
    @State() active = false

    /** Same value as tab header's tab value */
    @Prop() tab!: string

    @Listen('$tabSetActive', { target: 'body' })
    onSetActiveTab(e: CustomEvent) {
        this.active = e.detail === this.tab
    }

    render() {
        return (
            <Host
                role="tabpanel"
                id={`pane_${this.tab}`}
                aria-labelledby={this.tab}
                style={{ display: this.active ? '' : 'none' }}
                class="bk-tab-panel"
            >
                <slot></slot>
            </Host>
        )
    }
}
