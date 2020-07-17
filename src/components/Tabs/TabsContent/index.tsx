import { Component, h, Listen, Element } from '@stencil/core'

@Component({
    tag: 'bk-tabs-content',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabsContent {
    @Element() el!: HTMLBkTabsContentElement

    @Listen('$tabSetActive', { target: 'parent' })
    onSetActiveTab(e: CustomEvent) {
        this.el.querySelectorAll('bk-tab-content').forEach((content) => {
            if (content.id !== `pane_${e.detail}`) {
                content.style.display = 'none'
            } else {
                content.style.display = ''
            }
        })
    }

    render() {
        return <slot></slot>
    }
}
