import { Component, h, Prop, Event, EventEmitter, Host, Listen, Element } from '@stencil/core'
import KeyboardFocus from '../../shared/decorators/keyboardFocus'
import { Variants } from '../../shared/types'
import { AVChange } from './types'

@Component({
    tag: 'bk-switch',
    scoped: true,
    styleUrl: './index.scss',
})
export class Switch {
    @KeyboardFocus() @Element() el!: HTMLElement

    /** Set default state of the switch */
    @Prop({ reflect: true, mutable: true }) isOn = false

    /** Enable or disable switch */
    @Prop({ reflect: true }) disabled = false

    /** Type of the alert */
    @Prop() variant: Variants = 'default'

    /** Fired on every state change */
    @Event({ bubbles: false }) bkChange!: EventEmitter<AVChange>

    updateState = () => {
        if (!this.disabled) {
            this.isOn = !this.isOn
            this.bkChange.emit({
                isOn: this.isOn,
            })
        }
    }

    @Listen('keydown')
    listenOnKeydown(e: KeyboardEvent) {
        if (e.code === 'Enter' || e.code === 'Space') {
            this.updateState()
        }
    }

    @Listen('click')
    listenOnClick() {
        this.updateState()
    }

    render() {
        return (
            <Host role="switch" aria-disabled={`${this.disabled}`} aria-checked={`${this.isOn}`} tabIndex="0">
                <div class={`bk-switch bk-switch--${this.variant}`}>
                    <input
                        type="checkbox"
                        name="chk"
                        class="bk-switch__input"
                        checked={this.isOn}
                        disabled={this.disabled}
                        tabIndex={-1}
                        aria-hidden="true"
                    />
                    <span class="bk-switch__core"></span>
                </div>
            </Host>
        )
    }
}
