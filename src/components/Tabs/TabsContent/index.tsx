import { Component, h } from '@stencil/core'

@Component({
    tag: 'bk-tabs-content',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabsContent {
    render() {
        return <slot></slot>
    }
}
