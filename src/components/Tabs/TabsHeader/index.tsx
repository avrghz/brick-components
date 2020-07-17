import { Component, h, Host, Element, Listen, Prop } from '@stencil/core'
import { tween, styler, easing } from 'popmotion'
import { Position } from '../types'

@Component({
    tag: 'bk-tabs-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabsHeader {
    private highlighterRef?: HTMLDivElement

    @Element() el!: HTMLElement

    @Prop() position: Position = 'top'

    setHighlighter = (tab: HTMLBkTabHeaderElement) => {
        if (this.highlighterRef) {
            const tabContent = tab.querySelector('.bk-tab-header') as HTMLDivElement
            const { width, height, x, y } = tabContent.getBoundingClientRect()
            const moveTo =
                this.position === 'top' || this.position === 'bottom'
                    ? x - this.el.getBoundingClientRect().x
                    : y - this.el.getBoundingClientRect().y
            const element = styler(this.highlighterRef)

            if (this.position === 'top' || this.position === 'bottom') {
                element.set('width', width)
            } else {
                element.set('height', height)
            }

            tween({ from: 0, to: 1, duration: 150, ease: easing.linear }).start({
                update: (value: number) => {
                    if (this.position === 'top' || this.position === 'bottom') {
                        element.set('x', value * moveTo)
                    } else {
                        element.set('y', value * moveTo)
                    }
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
            <Host class={`is-${this.position}`}>
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
