import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bk-tab-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabHeader {
    render() {
        return (
            <Host id="tab-first" aria-controls="pane-first" role="tab">
                <slot></slot>
            </Host>
        )
    }
}
