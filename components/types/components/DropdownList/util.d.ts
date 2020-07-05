import { Option, Callback } from './types';
export declare const dispatchEventCloseMenu: (dropdown: HTMLElement) => void;
export declare const currentSelected: (options: Option[], selected: string | null) => number;
export declare const hasEnabledOption: (options: Option[]) => boolean;
export declare const getFirstEnabledOption: (options: Option[]) => number;
export declare const selectFirstEnabledOption: (options: Option[], callBack: Callback) => void;
export declare const selectLastEnabledOption: (options: Option[], callBack: Callback) => void;
export declare const selectNextOption: (options: Option[], selected: string | null, callBack: Callback) => void;
export declare const selectPreviousOption: (options: Option[], selected: string | null, callBack: Callback) => void;
