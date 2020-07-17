import { Component, h, Host, Element, Listen, Prop, State } from '@stencil/core'
import { JSXBase } from '@stencil/core/internal'
import { Position } from '../types'

@Component({
    tag: 'bk-tabs-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabsHeader {
    @Element() el!: HTMLElement

    @State() highlighter: JSXBase.HTMLAttributes<HTMLDivElement>['style'] = { width: '0', transform: '' }

    @Prop() position: Position = 'top'

    setHighlighter = (tab: HTMLBkTabHeaderElement) => {
        this.highlighter = { width: `${tab.clientWidth}px`, transform: `translateX(${tab.offsetLeft}px)` }
    }

    @Listen('$tabSetHighlight')
    onTabClick(e: CustomEvent) {
        e.stopImmediatePropagation()
        this.setHighlighter(e.target as HTMLBkTabHeaderElement)
    }

    render() {
        return (
            <Host class={`is-${this.position}`}>
                <div class="bk-tabs-header">
                    <div class="bk-tabs-header__scroll">
                        <div role="tablist" class="bk-tabs-header__nav">
                            <div class="bk-tabs-header__active-bar" style={this.highlighter}></div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
