import { Component, h, Host, Element, Listen } from '@stencil/core'
import { tween, styler, easing } from 'popmotion'

@Component({
    tag: 'bk-tabs-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabsHeader {
    private highlighterRef?: HTMLDivElement

    @Element() el!: HTMLElement

    setHighlighter = (tab: HTMLBkTabHeaderElement) => {
        if (this.highlighterRef) {
            const tabContent = tab.querySelector('.bk-tab-header') as HTMLDivElement
            const { width, x } = tabContent.getBoundingClientRect()
            const moveTo = x - this.el.getBoundingClientRect().x
            const element = styler(this.highlighterRef)
            tween({ from: 0, to: 1, duration: 150, ease: easing.linear }).start({
                update: (tx: number) => {
                    element.set('x', tx * moveTo).set('width', width)
                },
            })
        }
    }

    setActiveTab = (tab: HTMLBkTabHeaderElement) => {
        this.el.querySelectorAll('bk-tab-header').forEach((t) => {
            if (t !== tab) {
                t.setAttribute('active', 'false')
            }
        })
        this.setHighlighter(tab)
    }

    @Listen('$tabClick')
    onTabClick(e: CustomEvent) {
        e.stopImmediatePropagation()
        this.setActiveTab(e.target as HTMLBkTabHeaderElement)
    }

    render() {
        return (
            <Host>
                <div class="bk-tabs-header">
                    <div class="bk-tabs-header__scroll">
                        <div role="tablist" class="bk-tabs-header__nav">
                            <div class="bk-tabs-header__active-bar" ref={(el) => (this.highlighterRef = el)}></div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
