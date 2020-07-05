import { ColdSubscription } from 'popmotion';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { ToastMessage, AnimationIn, AnimationOut } from './types';
export declare const uID: () => string;
export declare const animateIn: ({ el, duration, onComplete, flip }: AnimationIn) => ColdSubscription;
export declare const animateOut: ({ el, duration, onComplete, wait, flip }: AnimationOut) => ColdSubscription;
export declare const Icon: ({ variant }: {
    variant: ToastMessage['variant'];
}) => any;
