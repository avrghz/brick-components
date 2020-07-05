import { Event, EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot control - Controlling element.
 * @slot content - The content of the menu.
 */
export declare class Dropdown {
    private timer?;
    private popperInstance?;
    private popoverRef?;
    private menuRef?;
    private controlRef?;
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
    /** Fired on keydown on menu */
    bkMenuKeydown: EventEmitter;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    componentDidUnload(): void;
    menuHandler(): void;
    initPopper(): void;
    setFocus: (ref: HTMLElement) => void;
    destroyPopper(): void;
    onClickHandler(e: Event): void;
    onCloseMenu(): void;
    onKeyboardHandler(e: KeyboardEvent): void;
    onMenuClick: (e: Event) => void;
    onOutsideClickHandler: (e: Event) => void;
    onMenuKeydownHandler: (e: KeyboardEvent) => void;
    registerDomClick(register?: boolean): void;
    render(): any;
}
