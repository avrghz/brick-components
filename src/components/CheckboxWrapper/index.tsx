import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'bk-checkbox-wrapper',
    scoped: true,
    styleUrl: './index.scss',
})
export class CheckboxWrapper {
    @Prop() label!: string

    render() {
        return (
            <label class="bk-checkbox">
                <slot></slot>
                <span class="bk-checkbox__input">
                    <span class="bk-checkbox__inner"></span>
                </span>
                <span class="bk-checkbox__label">{this.label}</span>
            </label>
        )
    }
}
