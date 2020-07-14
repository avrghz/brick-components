import { JSXBase } from '../../stencil-public-runtime';
export declare const STEP_STATE: readonly ["process", "wait", "success", "error", "finish"];
export declare const DIRECTION: readonly ["vertical", "horizontal"];
export interface StepComponent {
    title: string;
    icon?: string;
    description?: string;
    status?: typeof STEP_STATE[number];
}
export declare type Direction = typeof DIRECTION[number];
export interface StepProps extends StepComponent {
    direction: Direction;
    style?: JSXBase.HTMLAttributes<HTMLDivElement>['style'];
    isLast?: boolean;
    isCentered?: boolean;
    step?: number;
    onClick: VoidFunction;
}
