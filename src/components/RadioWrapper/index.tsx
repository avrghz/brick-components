import { Component, h, Prop, Element } from '@stencil/core'
import KeyboardFocus from '../../shared/decorators/keyboardFocus'

@Component({
    tag: 'bk-radio-wrapper',
    scoped: true,
    styleUrl: './index.scss',
})
export class RadioWrapper {
    @KeyboardFocus() @Element() el!: HTMLElement

    /** radio label */
    @Prop() label!: string

    render() {
        return (
            <label class="bk-radio">
                <slot></slot>
                <span class="bk-radio__input">
                    <span class="bk-radio__inner"></span>
                </span>
                <span class="bk-radio__label">{this.label}</span>
            </label>
        )
    }
}
