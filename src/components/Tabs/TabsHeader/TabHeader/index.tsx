import { Component, h, Host, Prop, EventEmitter, Listen, Event, Element } from '@stencil/core'

@Component({
    tag: 'bk-tab-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabHeader {
    @Element() el!: HTMLBkTabHeaderElement

    @Prop() tab!: string

    @Prop({ reflect: true, mutable: true }) active = false

    @Prop() disabled = false

    @Event() $tabHighlightReset!: EventEmitter

    @Event() $tabSetHighlight!: EventEmitter

    componentWillLoad() {
        this.emitResetHighlighter()
    }

    componentDidLoad() {
        this.emitHighlighter()
    }

    componentWillUpdate() {
        this.emitResetHighlighter()
    }

    componentDidUpdate() {
        this.emitHighlighter()
    }

    emitResetHighlighter = () => {
        if (!this.disabled && this.active) {
            this.$tabHighlightReset.emit()
        }
    }

    emitHighlighter = () => {
        if (!this.disabled && this.active) {
            this.$tabSetHighlight.emit()
        }
    }

    @Listen('$tabHighlightReset', { target: 'parent' })
    onHighlightReset(e: CustomEvent) {
        if (e.target !== this.el) {
            this.active = false
        }
    }

    @Listen('click')
    onClickHandler() {
        if (!this.disabled) {
            this.active = true
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
            >
                <div class="bk-tab-header">
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
