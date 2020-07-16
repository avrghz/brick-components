import { Component, h, Host, Prop, Event, EventEmitter, Element, State } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import '@a11y/focus-trap'

/**
 * @slot body - Body content of the modal popup.
 * @slot footer - footer content of the modal popup.
 */

@Component({
    tag: 'bk-modal',
    shadow: true,
    styleUrl: './index.scss',
})
export class Modal {
    private timeout?: NodeJS.Timeout
    private modalRef?: HTMLDivElement
    private backdropRef?: HTMLDivElement

    @Element() el!: HTMLElement

    @State() hasFooter = false

    /** Show or hide the modal */
    @Prop({ reflect: true, mutable: true }) open = false

    /** Header to be shown */
    @Prop() header?: string

    /** Is dismissible or not */
    @Prop() dismissible = true

    /** Fired when modal is about to open */
    @Event({ bubbles: false }) bkOpen!: EventEmitter

    /** Fired after modal is opened */
    @Event({ bubbles: false }) bkOpened!: EventEmitter

    /** Fired when modal is about to close */
    @Event({ bubbles: false }) bkClose!: EventEmitter

    /** Fired after modal is closed */
    @Event({ bubbles: false }) bkClosed!: EventEmitter

    componentWillLoad() {
        this.toggleFooter()
        this.emitEvent(this.open, this.bkOpen)
    }

    componentDidLoad() {
        this.emitEvent(this.open, this.bkOpened)
        this.onAfterModalOpen()
    }

    componentWillUpdate() {
        this.toggleFooter()
        this.emitEvent(this.open, this.bkOpen)
        this.emitEvent(!this.open, this.bkClose)
        this.onBeforeModalClose()
        return new Promise((resolve) => (this.timeout = setTimeout(resolve, 300) as any))
    }

    componentDidUpdate() {
        this.emitEvent(this.open, this.bkOpened)
        this.emitEvent(!this.open, this.bkClosed)
        this.onAfterModalOpen()
    }

    componentDidUnload() {
        this.resetTimeout()
    }

    toggleFooter = () => {
        this.hasFooter = this.el.querySelectorAll('[slot=footer]').length === 1
    }

    resetTimeout = () => {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    }

    emitEvent(condition: boolean, event: EventEmitter) {
        if (condition) {
            event.emit()
        }
    }

    onAfterModalOpen = () => {
        if (this.open) {
            this.modalRef?.classList.add('open')
            this.backdropRef?.classList.add('open')
            this.el.focus()
        }
    }

    onBeforeModalClose = () => {
        if (!this.open) {
            if (this.modalRef && this.backdropRef) {
                this.modalRef.classList.remove('open')
                this.backdropRef.classList.remove('open')
                this.modalRef.classList.add('close')
            }
        }
    }

    onCloseHandler = (e: Event) => {
        if (this.dismissible) {
            e.preventDefault()
            this.open = false
        }
    }

    render() {
        if (!this.open) {
            return null
        }

        return (
            <Host role="dialog" tabIndex={0} aria-modal="true" aria-hidden={this.open}>
                <div class="bk-modal">
                    <div role="document" class="bk-modal__content" ref={(el) => (this.modalRef = el)}>
                        <focus-trap>
                            {this.header && (
                                <header class="bk-modal__header">
                                    <span class="bk-modal__title">{this.header}</span>
                                    {this.dismissible && (
                                        <button
                                            tabIndex={0}
                                            aria-label="Close"
                                            class="bk-button bk-button--text bk-modal__close-btn"
                                            onClick={this.onCloseHandler}
                                        >
                                            <iron-icon icon="close" class="bk-icon"></iron-icon>
                                        </button>
                                    )}
                                </header>
                            )}

                            <main class="bk-modal__body">
                                <slot name="body"></slot>
                            </main>

                            {this.hasFooter && (
                                <footer class="bk-modal__footer">
                                    <slot name="footer"></slot>
                                </footer>
                            )}
                        </focus-trap>
                    </div>
                    <div
                        ref={(el) => (this.backdropRef = el)}
                        class="bk-modal__backdrop"
                        {...(this.dismissible ? { onClick: this.onCloseHandler } : {})}
                    />
                </div>
            </Host>
        )
    }
}
