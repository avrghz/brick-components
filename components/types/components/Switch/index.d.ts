import { EventEmitter } from '../../stencil-public-runtime';
import { Variants } from '../../shared/types';
import { AVChange } from './types';
export declare class Switch {
    /** Set default state of the switch */
    isOn: boolean;
    /** Enable or disable switch */
    disabled: boolean;
    /** Type of the alert */
    variant: Variants;
    /** Fired on every state change */
    bkChange: EventEmitter<AVChange>;
    updateState: () => void;
    listenOnKeydown(e: KeyboardEvent): void;
    listenOnClick(): void;
    render(): any;
}
