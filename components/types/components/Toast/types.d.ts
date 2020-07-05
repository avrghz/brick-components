import { ColdSubscription } from 'popmotion';
import { Variants } from '../../shared/types';
export interface ToastMessage {
    id: string;
    title?: string;
    message: string;
    variant?: Variants;
    dismissible?: boolean;
}
export interface AnimationSubscription extends Pick<ToastMessage, 'id'> {
    subscription: ColdSubscription;
}
export interface AnimationIn {
    el: HTMLElement;
    duration: number;
    onComplete: VoidFunction;
    flip?: boolean;
}
export interface AnimationOut extends AnimationIn {
    wait: number;
}
export declare const POSITION: readonly ["top-left", "top-right", "bottom-left", "bottom-right"];
export declare type Position = typeof POSITION[number];
export declare enum Constant {
    TRANSITION_IN = 500,
    TRANSITION_OUT = 300,
    HIDE_AFTER = 4000,
    POSITION = "top-right"
}
export declare enum Status {
    TOAST_ADDED = "TOAST_ADDED",
    TOAST_REMOVED = "TOAST_REMOVED"
}
