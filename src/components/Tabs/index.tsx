import { Component, h, Host, Element, Listen, Prop, State } from '@stencil/core'
import { JSXBase, Watch } from '@stencil/core/internal'
import { Position, DEFAULT_POSITION, Variant, DEFAULT_VARIANT } from './types'

// ! Add change event
// ! https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html
// ! Bordered tabs
// ! fix position bottom

@Component({
    tag: 'bk-tabs',
    styleUrl: './index.scss',
})
export class Tabs {
    private activeTab?: string
    private shouldUpdateHighlighter = false

    @Element() el!: HTMLElement

    @State() highlighter: JSXBase.HTMLAttributes<HTMLDivElement>['style'] = { width: '0', transform: '' }

    @Prop() position: Position = DEFAULT_POSITION

    @Prop() variant: Variant = DEFAULT_VARIANT

    @Watch('position')
    watchPosition(current: Position, previous: Position) {
        this.shouldUpdateHighlighter =
            (current === 'top' && previous !== 'top' && previous !== 'bottom') ||
            (current === 'bottom' && previous !== 'top' && previous !== 'bottom') ||
            (current === 'left' && previous !== 'left' && previous !== 'right') ||
            (current === 'right' && previous !== 'left' && previous !== 'right')
    }

    componentDidUpdate() {
        if (this.shouldUpdateHighlighter && this.activeTab && this.variant === 'simple') {
            this.shouldUpdateHighlighter = false
            this.setHighlighter(this.el.querySelector(`#${this.activeTab}`) as HTMLBkTabHeaderElement)
        }
    }

    setHighlighter = (tab: HTMLBkTabHeaderElement) => {
        const { width, height, x, y } = (tab.querySelector(
            '[data-tab-header]'
        ) as HTMLDivElement).getBoundingClientRect()
        const { x: tabHeaderX, y: tabHeaderY } = this.el.getBoundingClientRect()
        if (this.position === 'top' || this.position === 'bottom') {
            this.highlighter = { width: `${width}px`, transform: `translateX(${x - tabHeaderX}px)` }
        } else {
            this.highlighter = { height: `${height}px`, transform: `translateY(${y - tabHeaderY}px)` }
        }
    }

    @Listen('$tabSetActive')
    onSetActiveTab(e: CustomEvent) {
        this.activeTab = e.detail
        if (this.variant === 'simple') {
            this.setHighlighter(e.target as HTMLBkTabHeaderElement)
        }
    }

    render() {
        return (
            <Host class={`bk-tabs bk-tabs--${this.position} bk-tabs--${this.variant}`}>
                {this.position === 'bottom' && <slot></slot>}
                <div class="bk-tabs__header">
                    <div class="bk-tabs__scroll">
                        <div role="tablist" class="bk-tabs__nav">
                            <div class="bk-tabs__active-bar" style={this.highlighter}></div>
                            <slot name="header"></slot>
                        </div>
                    </div>
                </div>
                {this.position !== 'bottom' && <slot></slot>}
            </Host>
        )
    }
}
