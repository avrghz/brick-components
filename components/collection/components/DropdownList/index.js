import { Component, h, Element, Prop, Watch, State, Event } from '@stencil/core';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { consoleWarn } from '../../shared/util';
import { selectNextOption, selectPreviousOption, selectFirstEnabledOption, selectLastEnabledOption, dispatchEventCloseMenu, } from './util';
export class DropdownList {
    constructor() {
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
            return (!!this.searchable && (h("div", { class: `bk-input bk-input--small bk-input--prefix ${!!this.searchText ? 'bk-input--suffix' : ''} bk-dropdown-list__search` },
                h("input", { type: "text", placeholder: "Search", class: "bk-input__inner", value: this.searchText, ref: (el) => (this.searchBar = el), onInput: this.onSearchInput, onKeyDown: this.onSearchKeyDown }),
                h("span", { class: "bk-input__prefix" },
                    h("iron-icon", { icon: "search", class: "bk-icon bk-icon--sm" })),
                !!this.searchText && (h("button", { class: "bk-button bk-button--mini bk-button--text bk-input__suffix bk-dropdown-list__icon bk-dropdown-list__close-btn", onClick: this.onClearClick },
                    h("iron-icon", { icon: "close", class: "bk-icon bk-icon--sm" }))))));
        };
        this.listUI = () => {
            return (h("ul", { class: "bk-dropdown-list__list", role: "listbox" }, this._options.map((option, i) => (h("li", { key: i, id: `option_${i}`, class: `bk-dropdown-list__item ${option.disabled
                    ? 'is-disabled'
                    : this.selectedOption && this.selectedOption === option.value
                        ? 'is-active'
                        : ''}`, role: "option", tabIndex: -1, onClick: (e) => this.onOptionClickHandler(e, option, i), onKeyDown: (e) => this.onOptionKeydownHandler(e, option), title: option.label }, option.label)))));
        };
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
        return (h("bk-dropdown", { disabled: this.disabled, onBkOpened: this.handleMenuOpen, ref: (el) => (this.dropdown = el) },
            h("slot", { name: "control" }),
            h("div", { slot: "content", class: "bk-dropdown-list__content", tabIndex: -1 },
                this.searchBarUI(),
                this._options.length > 0 ? (this.listUI()) : (h("div", { class: "bk-dropdown-list__no-option" }, this.noOptionText)))));
    }
    static get is() { return "bk-dropdown-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "options": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Option[] | string",
                "resolved": "Option[] | string",
                "references": {
                    "Option": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Pass stringified object when used with vanilla Javascript"
            },
            "attribute": "options",
            "reflect": false,
            "defaultValue": "[]"
        },
        "selectedOption": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Set selected option"
            },
            "attribute": "selected-option",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Disable DropdownList"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "searchable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "With search"
            },
            "attribute": "searchable",
            "reflect": false,
            "defaultValue": "false"
        },
        "noOptionText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text to show when no option available"
            },
            "attribute": "no-option-text",
            "reflect": false,
            "defaultValue": "'No option'"
        }
    }; }
    static get states() { return {
        "searchText": {},
        "_options": {}
    }; }
    static get events() { return [{
            "method": "bkSelect",
            "name": "bkSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired on selecting option"
            },
            "complexType": {
                "original": "Option",
                "resolved": "Option",
                "references": {
                    "Option": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "options",
            "methodName": "watchOptions"
        }, {
            "propName": "selectedOption",
            "methodName": "watchSelectedOption"
        }, {
            "propName": "searchText",
            "methodName": "watchSearch"
        }]; }
}
