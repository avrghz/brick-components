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
import ParsePropTo from '../../decorators/parsePropTo'

@Component({
    tag: 'bk-dropdown-list',
    styleUrl: './index.scss',
    scoped: true,
})
export class DropdownList {
    private dropdown?: HTMLElement
    private searchBar?: HTMLInputElement

    @State() _options: Option[] = []
    @State() searchText = ''

    @Element() el!: HTMLElement

    /** Pass stringified object when used with vanilla Javascript */
    @ParsePropTo('array', '_options') @Prop({ mutable: true }) options: Option[] | string = []

    /** Set selected option */
    @Prop() selectedOption?: string

    /** Disable DropdownList */
    @Prop() disabled = false

    /** With search */
    @Prop() searchable = false

    /** Text to show when no options available */
    @Prop() noOptionText = 'No options'

    /** Fired on selecting option */
    @Event() bkSelect!: EventEmitter<Option>

    @Watch('selectedOption')
    watchSelectedOption() {
        this.validateSelectedOption()
    }

    @Watch('searchText')
    watchSearch(current: string, previous: string) {
        if (!!current && current !== previous) {
            this._options = this._options.filter(
                (o) => o.label.toLocaleLowerCase().indexOf(current.toLocaleLowerCase()) > -1
            )
        } else {
            this._options = this.options as Option[]
        }
    }

    componentWillLoad() {
        this.validateSelectedOption()
    }

    validateSelectedOption = () => {
        if (
            this.selectedOption &&
            !!(this.options as Option[]).find((o) => o.value === this.selectedOption && o.disabled)
        ) {
            this.selectedOption = undefined
            consoleWarn('DropdownList', 'Cannot set disabled option as selected')
        }
    }

    setFocus = (index: number) => {
        this.selectedOption = (this.options as Option[])[index].value
        const currentOption = this.el.querySelector(`#option_${index}`) as HTMLElement
        currentOption.focus()
    }

    handleMenuKeydown = (e: KeyboardEvent) => {
        switch (true) {
            case e.key === 'Home':
                e.stopImmediatePropagation()
                selectFirstEnabledOption(this._options, this.setFocus)
                break
            case e.key === 'End':
                e.stopImmediatePropagation()
                selectLastEnabledOption(this._options, this.setFocus)
                break
            case e.key === 'ArrowDown':
                e.stopImmediatePropagation()
                selectNextOption(this._options, this.selectedOption || null, this.setFocus)
                break
            case e.key === 'ArrowUp':
                e.stopImmediatePropagation()
                selectPreviousOption(this._options, this.selectedOption || null, this.setFocus)
                break
        }
    }

    handleMenuOpen = () => {
        if (this.searchable && this.searchBar) {
            this.searchBar.focus()
        }

        this.dropdown?.addEventListener('keydown' as any, this.handleMenuKeydown)
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
        e.preventDefault()
        if (!this.selectedOption || option.value !== this.selectedOption) {
            this.setFocus(index)
            this.onOptionSelect(e, option)
        }
    }

    onOptionKeydownHandler = (e: KeyboardEvent, option: Option) => {
        if (e.key === 'Enter' || e.code === 'Space') {
            e.preventDefault()
            this.onOptionSelect(e, option)
        }
    }

    onSearchKeyDown = (e: KeyboardEvent) => {
        if (
            e.key !== 'Home' &&
            e.key !== 'End' &&
            e.key !== 'ArrowDown' &&
            e.key !== 'ArrowUp' &&
            e.key !== 'Escape' &&
            e.key !== 'Tab'
        ) {
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
            !!this.searchable &&
            (this.options as Option[]).length > 0 && (
                <div
                    class={{
                        'bk-input bk-input--small bk-input--prefix bk-dropdown-list__search': true,
                        'bk-input--suffix': !!this.searchText,
                    }}
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
                    <li key={`option_${option.value}`} class="bk-dropdown-list__item">
                        <a
                            id={`option_${option.value}`}
                            tabIndex={-1}
                            href=""
                            role="option"
                            title={option.label}
                            onClick={(e) => this.onOptionClickHandler(e, option, i)}
                            onKeyDown={(e) => this.onOptionKeydownHandler(e, option)}
                            class={{
                                'is-disabled': !!option.disabled,
                                'is-active':
                                    !option.disabled && !!this.selectedOption && this.selectedOption === option.value,
                            }}
                        >
                            {option.label}
                        </a>
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
                    {(this.options as Option[]).length > 0 ? (
                        this.listUI()
                    ) : (
                        <div class="bk-dropdown-list__no-option">{this.noOptionText}</div>
                    )}
                </div>
            </bk-dropdown>
        )
    }
}
