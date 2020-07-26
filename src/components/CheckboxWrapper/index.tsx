import { Component, h, Prop, Host, Element, Watch } from '@stencil/core'
import KeyboardFocus from '../../shared/decorators/keyboardFocus'

@Component({
    tag: 'bk-checkbox-wrapper',
    scoped: true,
    styleUrl: './index.scss',
})
export class CheckboxWrapper {
    @KeyboardFocus() @Element() el!: HTMLElement

    /** Checkbox label */
    @Prop() label!: string

    /** Show indeterminate state */
    @Prop({ mutable: true, reflect: true }) indeterminate = false

    componentWillLoad() {
        this.registerEventHandler()
    }

    @Watch('indeterminate')
    registerEventHandler() {
        if (this.indeterminate) {
            const originalCheckbox = this.el.querySelector('input[type=checkbox]')
            originalCheckbox?.addEventListener(
                'change',
                () => {
                    this.indeterminate = false
                },
                { once: true }
            )
        }
    }

    render() {
        return (
            <Host>
                <label
                    class={{
                        'is-indeterminate': this.indeterminate,
                        'bk-checkbox': true,
                    }}
                >
                    <slot></slot>
                    <span class="bk-checkbox__input">
                        <span class="bk-checkbox__inner"></span>
                    </span>
                    <span class="bk-checkbox__label">{this.label}</span>
                </label>
            </Host>
        )
    }
}
