import { Component, h, Element, Prop, Watch } from '@stencil/core'

@Component({
    tag: 'bk-collapse-group',
    scoped: true,
    styleUrl: './index.scss',
})
export class CollapseGroup {
    @Element() el!: HTMLElement

    @Prop() isAccordion = true

    @Watch('isAccordion')
    watchIsAccordion() {
        this.registerEvent(this.isAccordion)
    }

    componentWillLoad() {
        if (this.isAccordion) {
            this.registerEvent(true)
        }
    }

    disconnectedCallback() {
        this.registerEvent(false)
    }

    getPanels = () => this.el.querySelectorAll('bk-collapse')

    registerEvent = (register = true) => {
        this.getPanels()?.forEach((collapse) => {
            collapse[register ? 'addEventListener' : 'removeEventListener']('bkOpen', this.onCollapseOpened)
        })
    }

    onCollapseOpened = (e: Event) => {
        this.getPanels()?.forEach((panel) => {
            if (e.target !== panel) {
                panel.setAttribute('open', 'false')
            }
        })
    }

    render() {
        return <slot></slot>
    }
}
