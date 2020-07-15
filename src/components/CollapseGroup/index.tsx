import { Component, h, Host, Element, Prop, Listen } from '@stencil/core'

@Component({
    tag: 'bk-collapse-group',
    shadow: false,
    styleUrl: './index.scss',
})
export class CollapseGroup {
    private collapsiblePanels?: NodeListOf<HTMLBkCollapseElement>

    @Element() el!: HTMLElement

    @Prop() isAccordion = true

    componentWillLoad() {
        this.collapsiblePanels = this.el.querySelectorAll('bk-collapse')
    }

    @Listen('bkOpen')
    onCollapseOpened(e: CustomEvent) {
        if (this.isAccordion) {
            this.collapsiblePanels?.forEach((panel) => {
                if (e.target !== panel) {
                    panel.setAttribute('open', 'false')
                }
            })
        }
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
