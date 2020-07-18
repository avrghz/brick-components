import { Component, h, Host, Element, Listen, Prop, State } from '@stencil/core'
import { JSXBase, Watch } from '@stencil/core/internal'
import { Position, DEFAULT_POSITION } from '../types'

@Component({
    tag: 'bk-tab-header-group',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabHeaderGroup {
    private activeTab?: string
    private shouldUpdateHighlighter = false

    @Element() el!: HTMLElement

    @State() highlighter: JSXBase.HTMLAttributes<HTMLDivElement>['style'] = { width: '0', transform: '' }

    @Prop() position: Position = DEFAULT_POSITION

    @Watch('position')
    watchPosition(current: Position, previous: Position) {
        this.shouldUpdateHighlighter =
            (current === 'top' && previous !== 'top' && previous !== 'bottom') ||
            (current === 'bottom' && previous !== 'top' && previous !== 'bottom') ||
            (current === 'left' && previous !== 'left' && previous !== 'right') ||
            (current === 'right' && previous !== 'left' && previous !== 'right')
    }

    componentDidUpdate() {
        if (this.shouldUpdateHighlighter && this.activeTab) {
            this.shouldUpdateHighlighter = false
            this.setHighlighter(this.el.querySelector(`#${this.activeTab}`) as HTMLBkTabHeaderElement)
        }
    }

    setHighlighter = (tab: HTMLBkTabHeaderElement) => {
        const { width, height, x, y } = (tab.querySelector('.bk-tab-header') as HTMLDivElement).getBoundingClientRect()
        const { x: tabHeaderX, y: tabHeaderY } = this.el.getBoundingClientRect()
        if (this.position === 'top' || this.position === 'bottom') {
            this.highlighter = { width: `${width}px`, transform: `translateX(${x - tabHeaderX}px)` }
        } else {
            this.highlighter = { height: `${height}px`, transform: `translateY(${y - tabHeaderY}px)` }
        }
    }

    @Listen('$tabSetActive', { target: 'parent' })
    onSetActiveTab(e: CustomEvent) {
        this.activeTab = e.detail
        this.setHighlighter(e.target as HTMLBkTabHeaderElement)
    }

    render() {
        return (
            <Host class={`is-${this.position}`}>
                <div class="bk_tab-header__scroll">
                    <div role="tablist" class="bk_tab-header__nav">
                        <div class="bk_tab-header__active-bar" style={this.highlighter}></div>
                        <slot></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
