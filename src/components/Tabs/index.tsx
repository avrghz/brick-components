import { Component, h, Host, Element, Listen, Prop, Watch } from '@stencil/core'
import { Position, DEFAULT_POSITION, Variant, DEFAULT_VARIANT } from './types'

// ! Add change event
// ! https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html

@Component({
    tag: 'bk-tabs',
    styleUrl: './index.scss',
})
export class Tabs {
    private activeTab?: string
    private shouldUpdateHighlighter = false
    private highlighterRef?: HTMLDivElement

    @Element() el!: HTMLElement

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
            if (this.highlighterRef) {
                this.highlighterRef.style.removeProperty('height')
                this.highlighterRef.style.transform = `translateX(${x - tabHeaderX}px)`
                this.highlighterRef.style.width = `${width}px`
            }
        } else {
            if (this.highlighterRef) {
                this.highlighterRef.style.removeProperty('width')
                this.highlighterRef.style.transform = `translateY(${y - tabHeaderY}px)`
                this.highlighterRef.style.height = `${height}px`
            }
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
                <div class="bk-tabs__header">
                    <div role="tablist" class="bk-tabs__nav">
                        {this.variant === 'simple' && (
                            <div ref={(el) => (this.highlighterRef = el)} class="bk-tabs__active-bar"></div>
                        )}
                        <slot name="header"></slot>
                    </div>
                </div>
                <slot></slot>
            </Host>
        )
    }
}
