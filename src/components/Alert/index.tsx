import { Component, h, Prop, Host, EventEmitter, Event } from '@stencil/core'
import { Variants, Shades } from '../../shared/types'
import closeIcon from '../../assets/icons/close.svg'

/**
 * @slot - Use this to render the content.
 */

@Component({
    tag: 'bk-alert',
    scoped: true,
    styleUrl: './index.scss',
})
export class Alert {
    /** Type of the alert */
    @Prop() variant: Variants = 'default'

    /** Light or dark */
    @Prop() shade: Shades = 'light'

    /** Make alert dismissible */
    @Prop() dismissible = true

    /** Event fired when close button is clicked */
    @Event({ bubbles: false }) bkClosed!: EventEmitter<null>

    onCloseHandler = (e: Event) => {
        e.preventDefault()
        this.bkClosed.emit()
    }

    render() {
        return (
            <Host
                role="alert"
                class={`bk-alert bk-alert--${this.variant} bk-alert--${this.shade} ${
                    this.dismissible ? 'is--dismissible' : ''
                }`}
            >
                {this.dismissible && (
                    <button class="bk-button bk-button--text bk-alert__close-btn" onClick={this.onCloseHandler}>
                        <i innerHTML={closeIcon} />
                    </button>
                )}
                <slot></slot>
            </Host>
        )
    }
}
