import { ComponentInterface } from '../../stencil-public-runtime';
import { Instance, Modifier, Placement } from '@popperjs/core';
export declare type SetPopperInstance = Instance;
export interface Setting {
    reference: string;
    popper: string;
    controllingProp: string;
    initialPlacement?: Placement;
    modifiers?: Partial<Modifier<string, object>>[];
    eventAfterOpened?: string;
    eventAfterClosed?: string;
}
declare const _default: ({ reference, popper, controllingProp, modifiers, initialPlacement, eventAfterOpened, eventAfterClosed, }: Setting) => (target: ComponentInterface, property: string) => void;
export default _default;
