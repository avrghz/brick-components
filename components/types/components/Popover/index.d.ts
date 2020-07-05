import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from '@popperjs/core';
import { TriggerOn } from './types';
/**
 * @slot control - The element on which the popover should apply.
 * @slot content - The content of the popover.
 */
export declare class Popover {
    private popperInstance?;
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
    onTriggerOnUpdated(current: TriggerOn, previous: TriggerOn): void;
    componentWillLoad(): void;
    componentDidUpdate(): void;
    componentDidUnload(): void;
    onOpenHandler(): void;
    onCloseHandler(): void;
    onClickHandler: () => void;
    registerEvents(register: boolean, eventType: TriggerOn): void;
    initPopper(): void;
    destroyPopper(): void;
    render(): any;
}
