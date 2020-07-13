var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Element, Prop, Watch, State, Event } from '@stencil/core';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { consoleWarn } from '../../shared/util';
import { selectNextOption, selectPreviousOption, selectFirstEnabledOption, selectLastEnabledOption, dispatchEventCloseMenu, } from './util';
import ParsePropTo from '../../shared/decorators/parsePropTo';
export class DropdownList {
    constructor() {
        this._options = [];
        this.searchText = '';
        /** Pass stringified object when used with vanilla Javascript */
        this.options = [];
        /** Disable DropdownList */
        this.disabled = false;
        /** With search */
        this.searchable = false;
        /** Text to show when no options available */
        this.noOptionText = 'No options';
        this.validateSelectedOption = () => {
            if (this.selectedOption &&
                !!this.options.find((o) => o.value === this.selectedOption && o.disabled)) {
                this.selectedOption = undefined;
                consoleWarn('DropdownList', 'Cannot set disabled option as selected');
            }
        };
        this.setFocus = (index) => {
            this.selectedOption = this.options[index].value;
            const currentOption = this.el.querySelector(`#option_${index}`);
            currentOption.focus();
        };
        this.handleMenuKeydown = (e) => {
            switch (true) {
                case e.key === 'Home':
                    e.stopImmediatePropagation();
                    selectFirstEnabledOption(this._options, this.setFocus);
                    break;
                case e.key === 'End':
                    e.stopImmediatePropagation();
                    selectLastEnabledOption(this._options, this.setFocus);
                    break;
                case e.key === 'ArrowDown':
                    e.stopImmediatePropagation();
                    selectNextOption(this._options, this.selectedOption || null, this.setFocus);
                    break;
                case e.key === 'ArrowUp':
                    e.stopImmediatePropagation();
                    selectPreviousOption(this._options, this.selectedOption || null, this.setFocus);
                    break;
            }
        };
        this.handleMenuOpen = () => {
            var _a;
            if (this.searchable && this.searchBar) {
                this.searchBar.focus();
            }
            (_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', this.handleMenuKeydown);
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
            e.preventDefault();
            if (!this.selectedOption || option.value !== this.selectedOption) {
                this.setFocus(index);
                this.onOptionSelect(e, option);
            }
        };
        this.onOptionKeydownHandler = (e, option) => {
            if (e.key === 'Enter' || e.code === 'Space') {
                e.preventDefault();
                this.onOptionSelect(e, option);
            }
        };
        this.onSearchKeyDown = (e) => {
            if (e.key !== 'Home' &&
                e.key !== 'End' &&
                e.key !== 'ArrowDown' &&
                e.key !== 'ArrowUp' &&
                e.key !== 'Escape' &&
                e.key !== 'Tab') {
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
            return (!!this.searchable &&
                this.options.length > 0 && (h("div", { class: {
                    'bk-input bk-input--small bk-input--prefix bk-dropdown-list__search': true,
                    'bk-input--suffix': !!this.searchText,
                } },
                h("input", { type: "text", placeholder: "Search", class: "bk-input__inner", value: this.searchText, ref: (el) => (this.searchBar = el), onInput: this.onSearchInput, onKeyDown: this.onSearchKeyDown }),
                h("span", { class: "bk-input__prefix" },
                    h("iron-icon", { icon: "search", class: "bk-icon bk-icon--sm" })),
                !!this.searchText && (h("button", { class: "bk-button bk-button--mini bk-button--text bk-input__suffix bk-dropdown-list__icon bk-dropdown-list__close-btn", onClick: this.onClearClick },
                    h("iron-icon", { icon: "close", class: "bk-icon bk-icon--sm" }))))));
        };
        this.listUI = () => {
            return (h("ul", { class: "bk-dropdown-list__list", role: "listbox" }, this._options.map((option, i) => (h("li", { key: `option_${option.value}`, class: "bk-dropdown-list__item" },
                h("a", { id: `option_${option.value}`, tabIndex: -1, href: "", role: "option", title: option.label, onClick: (e) => this.onOptionClickHandler(e, option, i), onKeyDown: (e) => this.onOptionKeydownHandler(e, option), class: {
                        'is-disabled': !!option.disabled,
                        'is-active': !option.disabled && !!this.selectedOption && this.selectedOption === option.value,
                    } }, option.label))))));
        };
    }
    watchSelectedOption() {
        this.validateSelectedOption();
    }
    watchSearch(current, previous) {
        if (!!current && current !== previous) {
            this._options = this._options.filter((o) => o.label.toLocaleLowerCase().indexOf(current.toLocaleLowerCase()) > -1);
        }
        else {
            this._options = this.options;
        }
    }
    componentWillLoad() {
        this.validateSelectedOption();
    }
    render() {
        return (h("bk-dropdown", { disabled: this.disabled, onBkOpened: this.handleMenuOpen, ref: (el) => (this.dropdown = el) },
            h("slot", { name: "control" }),
            h("div", { slot: "content", class: "bk-dropdown-list__content", tabIndex: -1 },
                this.searchBarUI(),
                this.options.length > 0 ? (this.listUI()) : (h("div", { class: "bk-dropdown-list__no-option" }, this.noOptionText)))));
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
            "mutable": true,
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
                "text": "Text to show when no options available"
            },
            "attribute": "no-option-text",
            "reflect": false,
            "defaultValue": "'No options'"
        }
    }; }
    static get states() { return {
        "_options": {},
        "searchText": {}
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
            "propName": "selectedOption",
            "methodName": "watchSelectedOption"
        }, {
            "propName": "searchText",
            "methodName": "watchSearch"
        }]; }
}
__decorate([
    ParsePropTo('array', '_options')
], DropdownList.prototype, "options", void 0);
