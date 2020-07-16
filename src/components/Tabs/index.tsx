import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bk-tabs',
    shadow: true,
    styleUrl: './index.scss',
})
export class Tabs {
    render() {
        return (
            <Host>
                <slot name="header"></slot>
                <slot name="content"></slot>
            </Host>
        )
    }
}
