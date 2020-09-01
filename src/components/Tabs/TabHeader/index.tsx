import { Component, h, Host, Prop, EventEmitter, Listen, Event, Element } from '@stencil/core'

@Component({
    tag: 'bk-tab-header',
})
export class TabHeader {
    private timer?: number

    @Element() el!: HTMLBkTabHeaderElement

    /** Unique tab id */
    @Prop() tab!: string

    /** set active tab */
    @Prop({ reflect: true, mutable: true }) active = false

    /** Enable or disable tab */
    @Prop() disabled = false

    /** Internal event */
    @Event() $tabHighlightReset!: EventEmitter

    /** Internal event */
    @Event() $tabSetActive!: EventEmitter<string>

    componentWillLoad() {
        this.emitResetHighlighter()
    }

    componentDidLoad() {
        this.timer = setTimeout(() => {
            this.emitHighlighter()
        })
    }

    componentWillUpdate() {
        this.emitResetHighlighter()
    }

    componentDidUpdate() {
        this.emitHighlighter()
    }

    disconnectedCallback() {
        if (this.timer) {
            clearTimeout(this.timer)
        }
    }

    emitResetHighlighter = () => {
        if (!this.disabled && this.active) {
            this.$tabHighlightReset.emit()
        }
    }

    emitHighlighter = () => {
        if (!this.disabled && this.active) {
            this.$tabSetActive.emit(this.tab)
        }
    }

    @Listen('$tabHighlightReset', { target: 'body' })
    onHighlightReset(e: CustomEvent) {
        if (e.target !== this.el) {
            this.active = false
        }
    }

    handleClick = () => {
        if (!this.disabled && !this.active) {
            this.active = true
        }
    }

    @Listen('click')
    onClickHandler() {
        this.handleClick()
    }

    @Listen('keydown')
    onKeyDownHandler(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            this.handleClick()
        }
    }

    render() {
        return (
            <Host
                id={this.tab}
                aria-controls={`pane_${this.tab}`}
                role="tab"
                class={{
                    'bk-tab-header': true,
                    'is-active': this.active && !this.disabled,
                    'is-disabled': this.disabled,
                }}
                tabIndex={this.active ? 0 : -1}
                aria-selected={`${this.active}`}
            >
                <div data-tab-header>
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
