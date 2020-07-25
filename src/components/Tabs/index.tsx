import { Component, h, Host, Element, Listen, Prop, Watch, Event, EventEmitter } from '@stencil/core'
import { Position, Variant } from './types'

@Component({
    tag: 'bk-tabs',
    styleUrl: './index.scss',
})
export class Tabs {
    private activeTab?: string
    private shouldUpdateHighlighter = false
    private highlighterRef?: HTMLDivElement

    @Element() el!: HTMLElement

    /** Position of the tab */
    @Prop() position: Position = 'top'

    /** Variant of the tab */
    @Prop() variant: Variant = 'simple'

    /** This event will fire on selection of a tab with tab id as detail */
    @Event({ bubbles: false }) bkSelect!: EventEmitter<string>

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

    getOrientation = () => (this.position === 'left' || this.position === 'right' ? 'vertical' : 'horizontal')

    getActiveTab = () => (this.activeTab ? (this.el.querySelector(`#${this.activeTab}`) as HTMLElement) : null)

    getAllTabs = () => this.el.querySelectorAll('bk-tab-header')

    setActiveTab = (tab: HTMLElement | null) => {
        if (tab) {
            tab.setAttribute('active', 'true')
            tab.focus()
        }
    }

    removeKeyboardFocus = () => this.el.classList.remove('is-focus')

    addKeyboardFocus = () => {
        if (!this.el.classList.contains('is-focus')) {
            this.el.classList.add('is-focus')
            document.addEventListener(
                'mousedown',
                () => {
                    this.removeKeyboardFocus()
                },
                {
                    once: true,
                }
            )
        }
    }

    @Listen('$tabSetActive')
    onSetActiveTab(e: CustomEvent) {
        this.activeTab = e.detail
        this.bkSelect.emit(this.activeTab)
        if (this.variant === 'simple') {
            this.setHighlighter(e.target as HTMLBkTabHeaderElement)
        }
    }

    @Listen('keydown')
    onKeydownHandler(e: KeyboardEvent) {
        const orientation = this.getOrientation()

        this.addKeyboardFocus()

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
                case e.key === 'Tab' && this.el.classList.contains('is-focus'): {
                    this.removeKeyboardFocus()
                    break
                }
            }
        }
    }

    @Listen('keyup')
    onKeyUpHandler(e: KeyboardEvent) {
        if (e.key === 'Tab') {
            this.addKeyboardFocus()
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
