import { Event, EventEmitter } from '../../stencil-public-runtime';
import { Variants } from '../../shared/types';
export declare class Slider {
    private isMouseEvent;
    private dragHandle?;
    private previousValue;
    el: HTMLElement;
    toolTipState: boolean;
    /** Set value */
    value: number;
    /** Set the stepper for the slider */
    step: number;
    /** Type of the slider */
    variant: Variants;
    /** Enable or disable slider */
    disabled: boolean;
    /** Show or hide the tooltip */
    showTooltip: boolean;
    /** Fired when value changed */
    bkChange: EventEmitter;
    watchStep(): void;
    watchValue(__: number, previousValue: number): void;
    componentWillLoad(): void;
    componentDidUnload(): void;
    validateStep(): void;
    emitEvent(): void;
    setDraggedValue: (xPosition: number, fireEvent?: boolean) => void;
    onDragAction: (e: MouseEvent | TouchEvent) => void;
    onDragStart: (e: MouseEvent | TouchEvent) => void;
    onDragEnd: () => void;
    onBarClick: (e: MouseEvent) => void;
    onHandleKeyDown: (e: KeyboardEvent) => void;
    onHandleKeyUp: (e: KeyboardEvent) => void;
    onHandleClick: (e: Event) => void;
    getButtonUI: (slot?: string | undefined) => any;
    render(): any;
}
