import { Component, h } from '@stencil/core'

@Component({
    tag: 'bk-tabs-content',
    shadow: true,
    styleUrl: './index.scss',
})
export class TabsContent {
    render() {
        return <slot></slot>
    }
}
