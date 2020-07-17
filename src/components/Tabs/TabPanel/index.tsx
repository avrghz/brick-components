import { Component, h, Prop, Host, Listen, State } from '@stencil/core'

@Component({
    tag: 'bk-tab-panel',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabPanel {
    @State() active = false

    @Prop() tab!: string

    @Listen('$tabSetActive', { target: 'parent' })
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
            >
                <slot></slot>
            </Host>
        )
    }
}
