import { Component, h, Host } from '@stencil/core'

// ! Add change event
// ! https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html
// ! Bordered tabs
// ! fix position bottom

@Component({
    tag: 'bk-tabs',
    styleUrl: './index.scss',
})
export class Tabs {
    render() {
        return (
            <Host>
                <slot name="header"></slot>
                <slot></slot>
            </Host>
        )
    }
}
