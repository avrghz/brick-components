import { Event, EventEmitter } from '../../stencil-public-runtime';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
/**
 * @slot body - Body content of the modal popup.
 * @slot footer - footer content of the modal popup.
 */
export declare class Modal {
    private timeout?;
    private modalRef?;
    private backdropRef?;
    el: HTMLElement;
    hasFooter: boolean;
    /** Show or hide the modal */
    open: boolean;
    /** Header to be shown */
    header?: string;
    /** Is dismissible or not */
    dismissible: boolean;
    /** Fired when modal is about to open */
    bkOpen: EventEmitter;
    /** Fired after modal is opened */
    bkOpened: EventEmitter;
    /** Fired when modal is about to close */
    bkClose: EventEmitter;
    /** Fired after modal is closed */
    bkClosed: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): Promise<unknown>;
    componentDidUpdate(): void;
    componentDidUnload(): void;
    toggleFooter: () => void;
    resetTimeout: () => void;
    emitEvent(condition: boolean, event: EventEmitter): void;
    onAfterModalOpen: () => void;
    onBeforeModalClose: () => void;
    onCloseHandler: (e: Event) => void;
    render(): any;
}
