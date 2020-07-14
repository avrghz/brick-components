import { EventEmitter } from '../../stencil-public-runtime';
import { StepComponent, StepProps, Direction } from './types';
export declare class Steps {
    _steps: StepComponent[];
    /** Center title and description */
    isCentered: boolean;
    /** Display direction */
    direction: Direction;
    /** Steps to be displayed */
    steps: StepComponent[] | string;
    /** This event is fired when clicked on a step */
    bkClick: EventEmitter<number>;
    isStyleCentered: () => boolean;
    computeStepStyle: () => StepProps['style'];
    render(): any;
}
