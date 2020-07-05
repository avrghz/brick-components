import { Component, h, State, Element, Watch, Prop, Listen, Host } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { ToastMessage, Status, AnimationSubscription, Position, Constant } from './types'
import { uID, animateIn, animateOut, Icon } from './util'

@Component({
    tag: 'bk-toast',
    shadow: true,
    styleUrl: './index.scss',
})
export class Toast {
    private subscriptions: AnimationSubscription[] = []
    private status: Status | null = null

    @Element() el!: HTMLElement

    /** When provided, the toast will auto close after the specified time. (milliseconds) */
    @Prop() hideAfter: number = Constant.HIDE_AFTER

    /** Transition in duration  (milliseconds) */
    @Prop() transitionInDuration: number = Constant.TRANSITION_IN

    /** Transition out duration  (milliseconds) */
    @Prop() transitionOutDuration: number = Constant.TRANSITION_OUT

    /** Position of the toast */
    @Prop() position: Position = Constant.POSITION

    @State() toasts: ToastMessage[] = []

    @Watch('toasts')
    watchMessages(current: ToastMessage[], previous: ToastMessage[]) {
        this.status =
            current.length > previous.length
                ? Status.TOAST_ADDED
                : current.length < previous.length
                ? Status.TOAST_REMOVED
                : null
    }

    componentDidUpdate() {
        if (this.status === Status.TOAST_ADDED && this.toasts.length) {
            this.openToast(this.toasts[this.toasts.length - 1].id)
        }
    }

    componentDidUnload() {
        if (this.subscriptions.length) {
            this.subscriptions.forEach((s) => s.subscription.stop())
        }
    }

    @Listen('$bkToast')
    listenToToast(e: CustomEvent) {
        this.addToast(e.detail)
    }

    getToastById = (id: ToastMessage['id']): HTMLElement | null => {
        if (this.el.shadowRoot) {
            return this.el.shadowRoot.querySelector(`#${id}`)
        }
        return null
    }

    addToast = (toast: Omit<ToastMessage, 'id'>) => {
        this.toasts = [...this.toasts, { ...toast, id: uID() }]
    }

    removeToast = (id: ToastMessage['id']) => {
        this.toasts = this.toasts.filter((m) => m.id !== id)
    }

    addSubscription = (subscription: AnimationSubscription) => {
        this.subscriptions.push(subscription)
    }

    removeSubscription = (id: ToastMessage['id']) => {
        this.subscriptions = this.subscriptions.filter((s) => s.id !== id)
    }

    unSubscribe = (id: ToastMessage['id']) => {
        const subscription = this.subscriptions.find((s) => s.id === id)
        if (subscription) {
            subscription.subscription.stop()
        }
    }

    openToast = (id: ToastMessage['id']) => {
        const element = this.getToastById(id)
        if (element) {
            const subscription = animateIn({
                el: element,
                duration: this.transitionInDuration > 0 ? this.transitionInDuration : 0,
                onComplete: () => {
                    this.removeSubscription(id)
                    if (!!this.hideAfter) {
                        this.closeToast(id, this.hideAfter)
                    }
                },
                flip: this.position === 'top-left' || this.position === 'bottom-left',
            })

            this.addSubscription({
                id,
                subscription,
            })
        }
    }

    closeToast = (id: ToastMessage['id'], wait = 0) => {
        const element = this.getToastById(id)
        if (element) {
            const subscription = animateOut({
                el: element,
                duration: this.transitionOutDuration > 0 ? this.transitionOutDuration : 0,
                onComplete: () => {
                    this.removeSubscription(id)
                    this.removeToast(id)
                },
                wait,
                flip: this.position === 'top-left' || this.position === 'bottom-left',
            })

            this.addSubscription({
                id,
                subscription,
            })
        }
    }

    handleCloseButtonClick = (id: ToastMessage['id']) => {
        this.unSubscribe(id)
        this.closeToast(id)
    }

    render() {
        return (
            <Host tabIndex={-1} aria-hidden="true" class={`bk-toast--${this.position}`}>
                {this.toasts.map(({ message, id, title, variant = 'default', dismissible = true }) => (
                    <div key={id} id={id} class="bk-toast">
                        <Icon variant={variant} />
                        <div class={`bk-toast__group bk-toast--${variant}`}>
                            {title && <div class="bk-toast__title">{title}</div>}
                            <div class="bk-toast__content">{message}</div>
                            {dismissible && (
                                <button
                                    class="bk-button bk-button--text bk-toast__close-Btn"
                                    onClick={() => this.handleCloseButtonClick(id)}
                                >
                                    <iron-icon icon="close" class="bk-icon"></iron-icon>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </Host>
        )
    }
}
