import { ComponentInterface } from '../stencil-public-runtime';
import { Instance } from '@popperjs/core';
export declare type SetPopperInstance = Instance;
interface Setting {
    reference: string;
    popper: string;
    controllingProp: string;
}
declare const _default: ({ reference, popper, controllingProp }: Setting) => (target: ComponentInterface, property: string) => void;
export default _default;
