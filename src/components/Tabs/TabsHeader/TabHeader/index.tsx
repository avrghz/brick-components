import { Component, h, Host, Prop, EventEmitter, Listen, Event, Element } from '@stencil/core'

@Component({
    tag: 'bk-tab-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabHeader {
    private timer?: number

    @Element() el!: HTMLBkTabHeaderElement

    @Prop() tab!: string

    @Prop({ reflect: true, mutable: true }) active = false

    @Prop() disabled = false

    @Event() $tabHighlightReset!: EventEmitter

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

    @Listen('$tabHighlightReset', { target: 'parent' })
    onHighlightReset(e: CustomEvent) {
        if (e.target !== this.el) {
            this.active = false
        }
    }

    handleClick = () => {
        if (!this.disabled) {
            this.active = true
        }
    }

    @Listen('click')
    onClickHandler() {
        this.handleClick()
    }

    @Listen('keydown')
    onKeyDownHandler(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }

    render() {
        return (
            <Host
                id={this.tab}
                aria-controls={this.tab}
                role="tab"
                class={{
                    'is-active': this.active && !this.disabled,
                    'is-disabled': this.disabled,
                }}
                tabIndex={this.active ? -1 : 0}
            >
                <div class="bk-tab-header">
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
