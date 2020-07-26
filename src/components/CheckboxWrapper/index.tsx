import { Component, h, Prop, Host, Element } from '@stencil/core'
import KeyboardFocus from '../../shared/decorators/keyboardFocus'

@Component({
    tag: 'bk-checkbox-wrapper',
    scoped: true,
    styleUrl: './index.scss',
})
export class CheckboxWrapper {
    @KeyboardFocus() @Element() el!: HTMLElement

    @Prop() label!: string

    render() {
        return (
            <Host>
                <label class="bk-checkbox">
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
