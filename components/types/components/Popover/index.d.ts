import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from '@popperjs/core';
import { SetPopperInstance } from '../../shared/decorators/popper';
import { TriggerOn } from './types';
/**
 * @slot control - The element on which the popover should apply.
 * @slot content - The content of the popover.
 */
export declare class Popover {
    private popoverRef?;
    el: HTMLElement;
    /** This will set the trigger even */
    triggerOn: TriggerOn;
    /** show or hide the popover. */
    show: boolean;
    /** This will set the trigger even */
    placement: Placement;
    /** Enable or disable popover */
    disabled: boolean;
    /** Fired when opened */
    bkOpened: EventEmitter;
    /** Fired when destroyed */
    bkClosed: EventEmitter;
    popperInstance?: SetPopperInstance;
    watchTriggerOn(current: TriggerOn, previous: TriggerOn): void;
    watchPlacement(current: Placement, previous: Placement): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    setPlacement: () => Promise<Partial<import("@popperjs/core").State> | undefined>;
    onOpenHandler(): void;
    onCloseHandler(): void;
    onClickHandler: () => void;
    registerEvents(register: boolean, eventType: TriggerOn): void;
    onPopoverOpened(): void;
    render(): any;
}
