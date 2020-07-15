import { EventEmitter } from '../../stencil-public-runtime';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
export declare class Collapse {
    private id;
    private tabPanelRef?;
    private subscription?;
    private uiState;
    /** Open or close the collapse */
    open: boolean;
    /** Enable or disable collapse */
    disabled: boolean;
    /** This event is fired just before the panel opens */
    bkOpen: EventEmitter;
    /** This event is fired after the panel is opened */
    bkOpened: EventEmitter;
    /** This event is fired just before the panel closes */
    bkClose: EventEmitter;
    /** This event is fired after the panel is closed */
    bkClosed: EventEmitter;
    componentDidLoad(): void;
    componentWillRender(): Promise<unknown>;
    componentWillUpdate(): Promise<void>;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    animateIn: () => void;
    animateOut: () => void;
    animate: (open: boolean, cb: VoidFunction) => void;
    onClickHandler: () => boolean;
    onKeydownHandler: (e: KeyboardEvent) => void;
    render(): any;
}
