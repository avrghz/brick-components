import { Event, EventEmitter } from '../../stencil-public-runtime';
import '@a11y/focus-trap';
import { ButtonVariants } from '../../shared/types';
/**
 * @slot - Triggering control goes here
 */
export declare class PopConfirm {
    private cancelButtonRef?;
    el: HTMLElement;
    show: boolean;
    /** Message to show */
    message?: string;
    /** Confirm button text */
    confirmButtonText: string;
    /** Cancel button text */
    cancelButtonText: string;
    /** Confirm button variant */
    confirmButtonVariant: ButtonVariants;
    /** Cancel button variant */
    cancelButtonVariant: ButtonVariants;
    /** Enable or disable popover */
    disabled: boolean;
    /** on confirm action */
    bkConfirmed: EventEmitter;
    /** on cancel action */
    bkCancelled: EventEmitter;
    onActionHandler: (e: Event, eventToEmit: EventEmitter) => void;
    onClickHandler(): void;
    focusOnControl: () => void;
    onPopConfirmOpenHandler: () => void;
    getButtonVariant: (variant: ButtonVariants) => string;
    render(): any;
}
