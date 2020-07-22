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

    getOrientation = () => (this.position === 'left' || this.position === 'right' ? 'vertical' : 'horizontal')

    getActiveTab = () => (this.activeTab ? (this.el.querySelector(`#${this.activeTab}`) as HTMLElement) : null)

    setActiveTab = (tab: HTMLElement | null) => {
        if (tab) {
            tab.setAttribute('active', 'true')
            tab.focus()
        }
    }

    @Listen('keydown')
    onKeydownHandler(e: KeyboardEvent) {
        const orientation = this.getOrientation()

        if ((e.target as HTMLElement).tagName === 'BK-TAB-HEADER') {
            switch (true) {
                case e.key === 'ArrowDown' && orientation === 'vertical':
                case e.key === 'ArrowRight' && orientation === 'horizontal': {
                    this.setActiveTab(this.getActiveTab()?.nextElementSibling as HTMLElement)
                    break
                }
                case e.key === 'ArrowLeft' && orientation === 'horizontal':
                case e.key === 'ArrowUp' && orientation === 'vertical': {
                    this.setActiveTab(this.getActiveTab()?.previousElementSibling as HTMLElement)
                    break
                }
                case e.key === 'Home': {
                    this.setActiveTab(this.el.querySelector('bk-tab-header:first-child'))
                    break
                }
                case e.key === 'End': {
                    this.setActiveTab(this.el.querySelector('bk-tab-header:last-child'))
                    break
                }
            }
        }
    }

    render() {
        return (
            <Host
                class={`bk-tabs bk-tabs--${this.position} bk-tabs--${this.variant}`}
                aria-orientation={this.getOrientation()}
            >
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
