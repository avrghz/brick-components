import { Component, h, Element, Prop, Watch } from '@stencil/core'

@Component({
    tag: 'bk-collapse-group',
    scoped: true,
    styleUrl: './index.scss',
})
export class CollapseGroup {
    private collapsiblePanels?: NodeListOf<HTMLBkCollapseElement>

    @Element() el!: HTMLElement

    @Prop() isAccordion = true

    @Watch('isAccordion')
    watchIsAccordion() {
        this.registerEvent(this.isAccordion)
    }

    componentWillLoad() {
        this.collapsiblePanels = this.el.querySelectorAll('bk-collapse')
        if (this.isAccordion) {
            this.registerEvent(true)
        }
    }

    disconnectedCallback() {
        this.registerEvent(false)
    }

    registerEvent = (register = true) => {
        this.collapsiblePanels?.forEach((collapse) => {
            collapse[register ? 'addEventListener' : 'removeEventListener']('bkOpen', this.onCollapseOpened)
        })
    }

    onCollapseOpened = (e: Event) => {
        this.collapsiblePanels?.forEach((panel) => {
            if (e.target !== panel) {
                panel.setAttribute('open', 'false')
            }
        })
    }

    render() {
        return <slot></slot>
    }
}
