import { r as registerInstance, h, c as createEvent, g as getElement } from './index-9596b62d.js';
import './iron-icons-d49dcd62.js';
import { c as consoleWarn } from './util-b133d5f7.js';

const dispatchEventCloseMenu = (dropdown) => {
    dropdown.dispatchEvent(new Event('bkCloseDropdownMenu', {
        bubbles: false,
    }));
};
const currentSelected = (options, selected) => selected ? options.findIndex((option) => selected === option.value) : -1;
const hasEnabledOption = (options) => !!options.find((o) => !o.disabled);
const getFirstEnabledOption = (options) => options.findIndex((o) => !o.disabled);
const selectFirstEnabledOption = (options, callBack) => {
    const firstEnabledOption = getFirstEnabledOption(options);
    if (firstEnabledOption !== -1) {
        callBack(firstEnabledOption);
    }
};
const selectLastEnabledOption = (options, callBack) => {
    const lastEnabledOption = getFirstEnabledOption([...options].reverse());
    if (lastEnabledOption !== -1) {
        callBack(options.length - 1 - lastEnabledOption);
    }
};
const selectNextOption = (options, selected, callBack) => {
    if (!hasEnabledOption(options)) {
        return;
    }
    const current = currentSelected(options, selected);
    const predictedNextIndex = current === -1 ? 0 : current + 1;
    let actualNextIndex = -1;
    for (let i = predictedNextIndex; i < options.length; i++) {
        if (!options[i].disabled) {
            actualNextIndex = i;
            break;
        }
    }
    if (actualNextIndex === -1) {
        for (let i = 0; i < predictedNextIndex; i++) {
            if (!options[i].disabled) {
                actualNextIndex = i;
                break;
            }
        }
    }
    if (actualNextIndex !== -1) {
        callBack(actualNextIndex);
    }
};
const selectPreviousOption = (options, selected, callBack) => {
    if (!hasEnabledOption(options)) {
        return;
    }
    const current = currentSelected(options, selected);
    const predictedPreviousIndex = current === -1 ? options.length - 1 : current - 1;
    let actualPreviousIndex = -1;
    for (let i = predictedPreviousIndex; i >= 0; i--) {
        if (!options[i].disabled) {
            actualPreviousIndex = i;
            break;
        }
    }
    if (actualPreviousIndex === -1) {
        for (let i = options.length - 1; i > predictedPreviousIndex; i--) {
            if (!options[i].disabled) {
                actualPreviousIndex = i;
                break;
            }
        }
    }
    if (actualPreviousIndex !== -1) {
        callBack(actualPreviousIndex);
    }
};

const indexCss = ".bk-dropdown-list__content.sc-bk-dropdown-list{min-width:200px;outline:none}.bk-dropdown-list__no-option.sc-bk-dropdown-list{color:#909399;text-align:center;margin-top:10px}.bk-dropdown-list__search.sc-bk-dropdown-list{margin-bottom:5px}.bk-dropdown-list__list.sc-bk-dropdown-list{padding:0;margin:0 -20px;max-height:250px;overflow-y:auto}.bk-dropdown-list__item.sc-bk-dropdown-list{display:block;list-style:none;line-height:30px;padding:0 20px;margin:0;font-size:14px;color:#606266;cursor:pointer;outline:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.bk-dropdown-list__item.sc-bk-dropdown-list:not(.is-disabled):not(:focus):not(.is-active):hover{background-color:#ecf5ff;color:#66b1ff}.bk-dropdown-list__item.is-active.sc-bk-dropdown-list{background-color:#409eff;color:#ffffff}.bk-dropdown-list__item--divided.sc-bk-dropdown-list{position:relative;margin-top:6px;border-top:1px solid #ebeef5}.bk-dropdown-list__item--divided.sc-bk-dropdown-list:before{content:\"\";height:6px;display:block;margin:0 -20px;background-color:#ffffff}.bk-dropdown-list__item.is-disabled.sc-bk-dropdown-list{cursor:default;color:#bbb;pointer-events:none}.bk-dropdown-list__close-btn.sc-bk-dropdown-list{pointer-events:all}";

const DropdownList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchText = '';
        /** Pass stringified object when used with vanilla Javascript */
        this.options = [];
        /** Disable DropdownList */
        this.disabled = false;
        /** With search */
        this.searchable = false;
        /** Text to show when no option available */
        this.noOptionText = 'No option';
        this.setOptions = () => {
            try {
                if (typeof this.options === 'string') {
                    this._options = JSON.parse(this.options);
                }
                else {
                    this._options = this.options;
                }
            }
            catch (e) {
                this.options = [];
            }
        };
        this.validateSelectedOption = () => {
            if (this.selectedOption && !!this._options.find((o) => o.value === this.selectedOption && o.disabled)) {
                this.selectedOption = undefined;
                consoleWarn('DropdownList', 'Cannot set disabled option as selected');
            }
        };
        this.setFocus = (index) => {
            this.selectedOption = this._options[index].value;
            const currentOption = this.el.querySelector(`#option_${index}`);
            currentOption.focus();
        };
        this.handleMenuKeydown = (e) => {
            switch (true) {
                case e.detail === 'Home':
                    selectFirstEnabledOption(this._options, this.setFocus);
                    break;
                case e.detail === 'End':
                    selectLastEnabledOption(this._options, this.setFocus);
                    break;
                case e.detail === 'ArrowDown':
                    if (this.selectedOption) {
                        selectNextOption(this._options, this.selectedOption, this.setFocus);
                    }
                    break;
                case e.detail === 'ArrowUp':
                    if (this.selectedOption) {
                        selectPreviousOption(this._options, this.selectedOption, this.setFocus);
                    }
                    break;
            }
        };
        this.handleMenuOpen = () => {
            var _a;
            if (this.searchable && this.searchBar) {
                this.searchBar.focus();
            }
            (_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.addEventListener('bkMenuKeydown', this.handleMenuKeydown);
        };
        this.onOptionSelect = (e, option) => {
            e.stopImmediatePropagation();
            this.searchText = '';
            this.bkSelect.emit(option);
            if (this.dropdown) {
                dispatchEventCloseMenu(this.dropdown);
            }
        };
        this.onOptionClickHandler = (e, option, index) => {
            if (!this.selectedOption || option.value !== this.selectedOption) {
                this.setFocus(index);
                this.onOptionSelect(e, option);
            }
        };
        this.onOptionKeydownHandler = (e, option) => {
            if (e.key === 'Enter') {
                this.onOptionSelect(e, option);
            }
        };
        this.onSearchKeyDown = (e) => {
            if (e.key !== 'Home' && e.key !== 'End' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Escape') {
                e.stopImmediatePropagation();
            }
        };
        this.onSearchInput = (e) => {
            this.searchText = e.target.value;
        };
        this.onClearClick = (e) => {
            e.stopImmediatePropagation();
            this.searchText = '';
        };
        this.searchBarUI = () => {
            return (!!this.searchable && (h("div", { class: `bk-input bk-input--small bk-input--prefix ${!!this.searchText ? 'bk-input--suffix' : ''} bk-dropdown-list__search` }, h("input", { type: "text", placeholder: "Search", class: "bk-input__inner", value: this.searchText, ref: (el) => (this.searchBar = el), onInput: this.onSearchInput, onKeyDown: this.onSearchKeyDown }), h("span", { class: "bk-input__prefix" }, h("iron-icon", { icon: "search", class: "bk-icon bk-icon--sm" })), !!this.searchText && (h("button", { class: "bk-button bk-button--mini bk-button--text bk-input__suffix bk-dropdown-list__icon bk-dropdown-list__close-btn", onClick: this.onClearClick }, h("iron-icon", { icon: "close", class: "bk-icon bk-icon--sm" }))))));
        };
        this.listUI = () => {
            return (h("ul", { class: "bk-dropdown-list__list", role: "listbox" }, this._options.map((option, i) => (h("li", { key: i, id: `option_${i}`, class: `bk-dropdown-list__item ${option.disabled
                    ? 'is-disabled'
                    : this.selectedOption && this.selectedOption === option.value
                        ? 'is-active'
                        : ''}`, role: "option", tabIndex: -1, onClick: (e) => this.onOptionClickHandler(e, option, i), onKeyDown: (e) => this.onOptionKeydownHandler(e, option), title: option.label }, option.label)))));
        };
        this.bkSelect = createEvent(this, "bkSelect", 7);
    }
    watchOptions() {
        this.setOptions();
    }
    watchSelectedOption() {
        this.validateSelectedOption();
    }
    watchSearch(current, previous) {
        if (!!current && current !== previous) {
            this._options = this._options.filter((o) => o.label.indexOf(this.searchText) > -1);
        }
        else if (!!previous && !current) {
            this.setOptions();
        }
    }
    componentWillLoad() {
        this.setOptions();
        this.validateSelectedOption();
    }
    render() {
        return (h("bk-dropdown", { disabled: this.disabled, onBkOpened: this.handleMenuOpen, ref: (el) => (this.dropdown = el) }, h("slot", { name: "control" }), h("div", { slot: "content", class: "bk-dropdown-list__content", tabIndex: -1 }, this.searchBarUI(), this._options.length > 0 ? (this.listUI()) : (h("div", { class: "bk-dropdown-list__no-option" }, this.noOptionText)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "options": ["watchOptions"],
        "selectedOption": ["watchSelectedOption"],
        "searchText": ["watchSearch"]
    }; }
};
DropdownList.style = indexCss;

export { DropdownList as bk_dropdown_list };
