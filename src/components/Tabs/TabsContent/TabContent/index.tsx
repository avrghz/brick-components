import { Component, h, Prop, Host } from '@stencil/core'

@Component({
    tag: 'bk-tab-content',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabContent {
    @Prop() tab!: string

    render() {
        return (
            <Host role="tabpanel" id={`pane_${this.tab}`} aria-labelledby={this.tab} style={{ display: 'none' }}>
                <slot></slot>
            </Host>
        )
    }
}
