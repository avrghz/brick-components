import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { ToastMessage, AnimationSubscription, Position } from './types';
export declare class Toast {
    private subscriptions;
    private status;
    el: HTMLElement;
    /** When provided, the toast will auto close after the specified time. (milliseconds) */
    hideAfter: number;
    /** Transition in duration  (milliseconds) */
    transitionInDuration: number;
    /** Transition out duration  (milliseconds) */
    transitionOutDuration: number;
    /** Position of the toast */
    position: Position;
    toasts: ToastMessage[];
    watchMessages(current: ToastMessage[], previous: ToastMessage[]): void;
    componentDidUpdate(): void;
    componentDidUnload(): void;
    listenToToast(e: CustomEvent): void;
    getToastById: (id: ToastMessage['id']) => HTMLElement | null;
    addToast: (toast: Omit<ToastMessage, 'id'>) => void;
    removeToast: (id: ToastMessage['id']) => void;
    addSubscription: (subscription: AnimationSubscription) => void;
    removeSubscription: (id: ToastMessage['id']) => void;
    unSubscribe: (id: ToastMessage['id']) => void;
    openToast: (id: ToastMessage['id']) => void;
    closeToast: (id: ToastMessage['id'], wait?: number) => void;
    handleCloseButtonClick: (id: ToastMessage['id']) => void;
    render(): any;
}
