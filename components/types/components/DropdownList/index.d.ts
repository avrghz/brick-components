import { EventEmitter, Event } from '../../stencil-public-runtime';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { Option } from './types';
export declare class DropdownList {
    private dropdown?;
    private searchBar?;
    private _options;
    searchText: string;
    el: HTMLElement;
    /** Pass stringified object when used with vanilla Javascript */
    options: Option[] | string;
    /** Set selected option */
    selectedOption?: string;
    /** Disable DropdownList */
    disabled: boolean;
    /** With search */
    searchable: boolean;
    /** Text to show when no option available */
    noOptionText: string;
    /** Fired on selecting option */
    bkSelect: EventEmitter<Option>;
    watchSelectedOption(): void;
    watchSearch(current: string, previous: string): void;
    componentWillLoad(): void;
    validateSelectedOption: () => void;
    setFocus: (index: number) => void;
    handleMenuKeydown: (e: KeyboardEvent) => void;
    handleMenuOpen: () => void;
    onOptionSelect: (e: Event, option: Option) => void;
    onOptionClickHandler: (e: Event, option: Option, index: number) => void;
    onOptionKeydownHandler: (e: KeyboardEvent, option: Option) => void;
    onSearchKeyDown: (e: KeyboardEvent) => void;
    onSearchInput: (e: Event) => void;
    onClearClick: (e: Event) => void;
    searchBarUI: () => any;
    listUI: () => any;
    render(): any;
}
