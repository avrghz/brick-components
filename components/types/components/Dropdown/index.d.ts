import { Event, EventEmitter } from '../../stencil-public-runtime';
import { SetPopperInstance } from '../../shared/decorators/popper';
export declare class Dropdown {
    private controlRef?;
    private menuRef?;
    el: HTMLElement;
    /** Open or close the menu */
    open: boolean;
    /** Close the menu when clicked outside */
    clickOutsideToClose: boolean;
    /** Enable or disable the dropdown */
    disabled: boolean;
    /** Fired when opened */
    bkOpened: EventEmitter;
    /** Fired when destroyed */
    bkClosed: EventEmitter;
    popperInstance?: SetPopperInstance;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    handleDisabledState: () => void;
    setFocus: (ref: HTMLElement | undefined) => void;
    onOutsideClickHandler: (e: Event) => void;
    registerDomClick(register?: boolean): void;
    onCloseMenu(): void;
    onKeyboardHandler(e: KeyboardEvent): void;
    onClickHandler(e: Event): void;
    render(): any;
}
