import { Component, h } from '@stencil/core'

@Component({
    tag: 'bk-tab-content',
    shadow: true,
    styleUrl: './index.scss',
})
export class TabContent {
    render() {
        return <slot></slot>
    }
}
