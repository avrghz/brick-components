import { Component, h, Prop, Event, EventEmitter, State, Listen, Element } from '@stencil/core'
import '@a11y/focus-trap'
import { ButtonVariants } from '../../shared/types'

/**
 * @slot - Triggering control goes here
 */

@Component({
    tag: 'bk-pop-confirm',
    scoped: true,
    styleUrl: './index.scss',
})
export class PopConfirm {
    private cancelButtonRef?: HTMLButtonElement

    @Element() el!: HTMLElement

    @State() show = false

    /** Message to show */
    @Prop() message?: string

    /** Confirm button text */
    @Prop() confirmButtonText = 'Confirm'

    /** Cancel button text */
    @Prop() cancelButtonText = 'Cancel'

    /** Confirm button variant */
    @Prop() confirmButtonVariant: ButtonVariants = 'primary'

    /** Cancel button variant */
    @Prop() cancelButtonVariant: ButtonVariants = 'default'

    /** Enable or disable popover */
    @Prop() disabled = false

    /** on confirm action */
    @Event({ bubbles: false }) bkConfirmed!: EventEmitter

    /** on cancel action */
    @Event({ bubbles: false }) bkCancelled!: EventEmitter

    onActionHandler = (e: Event, eventToEmit: EventEmitter) => {
        e.stopImmediatePropagation()
        this.show = false
        this.focusOnControl()
        eventToEmit.emit()
    }

    @Listen('click')
    onClickHandler() {
        if (!this.disabled && !this.show) {
            this.show = true
        }
    }

    focusOnControl = () => {
        const control = this.el.querySelector('[slot=control]') as HTMLElement
        control.focus()
    }

    onPopConfirmOpenHandler = () => {
        this.cancelButtonRef?.focus()
    }

    getButtonVariant = (variant: ButtonVariants) => (variant !== 'default' ? `bk-button--${variant}` : '')

    render() {
        return (
            <bk-popover
                show={this.show}
                triggerOn="manual"
                disabled={this.disabled}
                placement="bottom-end"
                onBkOpened={this.onPopConfirmOpenHandler}
                aria-label="confirmation popup"
            >
                <div class="bk-pop-confirm" slot="content">
                    <focus-trap>
                        <div class="bk-pop-confirm__message">{this.message}</div>
                        <div class="bk-pop-confirm__footer">
                            <button
                                class={`bk-button bk-button--mini ${this.getButtonVariant(this.cancelButtonVariant)}`}
                                onClick={(e) => this.onActionHandler(e, this.bkCancelled)}
                                ref={(el) => (this.cancelButtonRef = el)}
                            >
                                {this.cancelButtonText}
                            </button>
                            <button
                                class={`bk-button bk-button--mini ${this.getButtonVariant(this.confirmButtonVariant)}`}
                                onClick={(e) => this.onActionHandler(e, this.bkConfirmed)}
                            >
                                {this.confirmButtonText}
                            </button>
                        </div>
                    </focus-trap>
                </div>
                <slot name="control" />
            </bk-popover>
        )
    }
}
