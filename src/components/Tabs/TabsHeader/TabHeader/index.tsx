import { Component, h, Host, Prop, EventEmitter, Listen, Event } from '@stencil/core'

@Component({
    tag: 'bk-tab-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabHeader {
    @Prop() tab!: string

    @Prop({ reflect: true, mutable: true }) active = false

    @Prop() disabled = false

    @Event() $tabClick!: EventEmitter<string>

    componentDidLoad() {
        if (!this.disabled && this.active) {
            this.$tabClick.emit(this.tab)
        }
    }

    @Listen('click')
    onClickHandler() {
        if (!this.disabled) {
            this.active = true
            this.$tabClick.emit(this.tab)
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
