import { Component, h, Element, Prop, Watch, State, EventEmitter, Event } from '@stencil/core'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { consoleWarn } from '../../shared/util'
import {
    selectNextOption,
    selectPreviousOption,
    selectFirstEnabledOption,
    selectLastEnabledOption,
    dispatchEventCloseMenu,
} from './util'
import { Option } from './types'

@Component({
    tag: 'bk-dropdown-list',
    styleUrl: './index.scss',
    scoped: true,
})
export class DropdownList {
    private dropdown?: HTMLElement
    private searchBar?: HTMLInputElement

    @State() searchText = ''

    @State() _options!: Option[]

    @Element() el!: HTMLElement

    /** Pass stringified object when used with vanilla Javascript */
    @Prop() options: Option[] | string = []

    /** Set selected option */
    @Prop() selectedOption?: string

    /** Disable DropdownList */
    @Prop() disabled = false

    /** With search */
    @Prop() searchable = false

    /** Text to show when no option available */
    @Prop() noOptionText = 'No option'

    /** Fired on selecting option */
    @Event() bkSelect!: EventEmitter<Option>

    @Watch('options')
    watchOptions() {
        this.setOptions()
    }

    @Watch('selectedOption')
    watchSelectedOption() {
        this.validateSelectedOption()
    }

    @Watch('searchText')
    watchSearch(current: string, previous: string) {
        if (!!current && current !== previous) {
            this._options = this._options.filter((o) => o.label.indexOf(this.searchText) > -1)
        } else if (!!previous && !current) {
            this.setOptions()
        }
    }

    componentWillLoad() {
        this.setOptions()
        this.validateSelectedOption()
    }

    setOptions = () => {
        try {
            if (typeof this.options === 'string') {
                this._options = JSON.parse(this.options)
            } else {
                this._options = this.options
            }
        } catch (e) {
            this.options = []
        }
    }

    validateSelectedOption = () => {
        if (this.selectedOption && !!this._options.find((o) => o.value === this.selectedOption && o.disabled)) {
            this.selectedOption = undefined
            consoleWarn('DropdownList', 'Cannot set disabled option as selected')
        }
    }

    setFocus = (index: number) => {
        this.selectedOption = this._options[index].value
        const currentOption = this.el.querySelector(`#option_${index}`) as HTMLElement
        currentOption.focus()
    }

    handleMenuKeydown = (e: CustomEvent) => {
        switch (true) {
            case e.detail === 'Home':
                selectFirstEnabledOption(this._options, this.setFocus)
                break
            case e.detail === 'End':
                selectLastEnabledOption(this._options, this.setFocus)
                break
            case e.detail === 'ArrowDown':
                if (this.selectedOption) {
                    selectNextOption(this._options, this.selectedOption, this.setFocus)
                }
                break
            case e.detail === 'ArrowUp':
                if (this.selectedOption) {
                    selectPreviousOption(this._options, this.selectedOption, this.setFocus)
                }
                break
        }
    }

    handleMenuOpen = () => {
        if (this.searchable && this.searchBar) {
            this.searchBar.focus()
        }

        this.dropdown?.addEventListener('bkMenuKeydown' as any, this.handleMenuKeydown)
    }

    onOptionSelect = (e: Event, option: Option) => {
        e.stopImmediatePropagation()
        this.searchText = ''
        this.bkSelect.emit(option)
        if (this.dropdown) {
            dispatchEventCloseMenu(this.dropdown)
        }
    }

    onOptionClickHandler = (e: Event, option: Option, index: number) => {
        if (!this.selectedOption || option.value !== this.selectedOption) {
            this.setFocus(index)
            this.onOptionSelect(e, option)
        }
    }

    onOptionKeydownHandler = (e: KeyboardEvent, option: Option) => {
        if (e.key === 'Enter') {
            this.onOptionSelect(e, option)
        }
    }

    onSearchKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Home' && e.key !== 'End' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Escape') {
            e.stopImmediatePropagation()
        }
    }

    onSearchInput = (e: Event) => {
        this.searchText = (e.target as HTMLInputElement).value
    }

    onClearClick = (e: Event) => {
        e.stopImmediatePropagation()
        this.searchText = ''
    }

    searchBarUI = () => {
        return (
            !!this.searchable && (
                <div
                    class={`bk-input bk-input--small bk-input--prefix ${
                        !!this.searchText ? 'bk-input--suffix' : ''
                    } bk-dropdown-list__search`}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        class="bk-input__inner"
                        value={this.searchText}
                        ref={(el) => (this.searchBar = el)}
                        onInput={this.onSearchInput}
                        onKeyDown={this.onSearchKeyDown}
                    />
                    <span class="bk-input__prefix">
                        <iron-icon icon="search" class="bk-icon bk-icon--sm"></iron-icon>
                    </span>
                    {!!this.searchText && (
                        <button
                            class="bk-button bk-button--mini bk-button--text bk-input__suffix bk-dropdown-list__icon bk-dropdown-list__close-btn"
                            onClick={this.onClearClick}
                        >
                            <iron-icon icon="close" class="bk-icon bk-icon--sm"></iron-icon>
                        </button>
                    )}
                </div>
            )
        )
    }

    listUI = () => {
        return (
            <ul class="bk-dropdown-list__list" role="listbox">
                {this._options.map((option, i) => (
                    <li
                        key={i}
                        id={`option_${i}`}
                        class={`bk-dropdown-list__item ${
                            option.disabled
                                ? 'is-disabled'
                                : this.selectedOption && this.selectedOption === option.value
                                ? 'is-active'
                                : ''
                        }`}
                        role="option"
                        tabIndex={-1}
                        onClick={(e) => this.onOptionClickHandler(e, option, i)}
                        onKeyDown={(e) => this.onOptionKeydownHandler(e, option)}
                        title={option.label}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <bk-dropdown disabled={this.disabled} onBkOpened={this.handleMenuOpen} ref={(el) => (this.dropdown = el)}>
                <slot name="control"></slot>
                <div slot="content" class="bk-dropdown-list__content" tabIndex={-1}>
                    {this.searchBarUI()}
                    {this._options.length > 0 ? (
                        this.listUI()
                    ) : (
                        <div class="bk-dropdown-list__no-option">{this.noOptionText}</div>
                    )}
                </div>
            </bk-dropdown>
        )
    }
}
