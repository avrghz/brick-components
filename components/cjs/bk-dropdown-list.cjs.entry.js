'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-02137fd9.js');
require('./iron-icons-289711e1.js');
const util = require('./util-654546b2.js');
const lodash = require('./lodash-9ed50696.js');

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
    const predictedNextIndex = currentSelected(options, selected) + 1;
    let actualNextIndex = -1;
    for (let i = predictedNextIndex; i < options.length; i++) {
        if (!options[i].disabled) {
            actualNextIndex = i;
            break;
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
    const predictedPreviousIndex = currentSelected(options, selected) - 1;
    let actualPreviousIndex = -1;
    for (let i = predictedPreviousIndex; i >= 0; i--) {
        if (!options[i].disabled) {
            actualPreviousIndex = i;
            break;
        }
    }
    if (actualPreviousIndex !== -1) {
        callBack(actualPreviousIndex);
    }
};

const parseObj = (obj, type) => {
    try {
        return JSON.parse(obj);
    }
    catch (e) {
        return type === 'array' ? [] : {};
    }
};
const ParsePropTo = (propType, state) => (target, property) => {
    let previousValue = null;
    const { componentWillLoad, componentWillUpdate } = target;
    const setPreviousValue = (component) => (previousValue = propType === 'array' ? [...component[property]] : Object.assign({}, component[property]));
    const setProp = (component) => {
        if (typeof component[property] === 'string') {
            const parsedObj = parseObj(component[property], propType);
            component[state] = [...parsedObj];
            component[property] = parsedObj;
        }
        else {
            if (!lodash.lodash.isEqual(previousValue, component[property])) {
                setPreviousValue(component);
                component[state] = propType === 'array' ? [...component[property]] : Object.assign({}, component[property]);
            }
        }
    };
    target.componentWillLoad = function () {
        setProp(this);
        setPreviousValue(this);
        return componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
    };
    target.componentWillUpdate = function () {
        setProp(this);
        return componentWillUpdate === null || componentWillUpdate === void 0 ? void 0 : componentWillUpdate.call(this);
    };
};

const indexCss = ".bk-dropdown-list__content.sc-bk-dropdown-list{min-width:200px;outline:none}.bk-dropdown-list__no-option.sc-bk-dropdown-list{color:#909399;text-align:center}.bk-dropdown-list__search.sc-bk-dropdown-list{margin-bottom:5px}.bk-dropdown-list__search.sc-bk-dropdown-list+.bk-dropdown-list__no-option.sc-bk-dropdown-list{margin-top:10px}.bk-dropdown-list__list.sc-bk-dropdown-list{padding:0;margin:0 -20px;max-height:250px;overflow-y:auto}.bk-dropdown-list__item.sc-bk-dropdown-list{list-style:none;margin:0}.bk-dropdown-list__item.sc-bk-dropdown-list>a.sc-bk-dropdown-list{display:block;line-height:30px;padding:0 20px;font-size:14px;color:#606266;outline:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:left}.bk-dropdown-list__item.sc-bk-dropdown-list>a.sc-bk-dropdown-list:not(.is-disabled):not(:focus):not(.is-active):hover{background-color:#ecf5ff;color:#66b1ff}.bk-dropdown-list__item.sc-bk-dropdown-list>a.is-active.sc-bk-dropdown-list{background-color:#409eff;color:#ffffff}.bk-dropdown-list__item.sc-bk-dropdown-list>a.is-disabled.sc-bk-dropdown-list{cursor:default;color:#bbb;pointer-events:none}.bk-dropdown-list__item--divided.sc-bk-dropdown-list{position:relative;margin-top:6px;border-top:1px solid #ebeef5}.bk-dropdown-list__item--divided.sc-bk-dropdown-list:before{content:\"\";height:6px;display:block;margin:0 -20px;background-color:#ffffff}.bk-dropdown-list__close-btn.sc-bk-dropdown-list{pointer-events:all}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const DropdownList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
                util.consoleWarn('DropdownList', 'Cannot set disabled option as selected');
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
                this.options.length > 0 && (index.h("div", { class: {
                    'bk-input bk-input--small bk-input--prefix bk-dropdown-list__search': true,
                    'bk-input--suffix': !!this.searchText,
                } }, index.h("input", { type: "text", placeholder: "Search", class: "bk-input__inner", value: this.searchText, ref: (el) => (this.searchBar = el), onInput: this.onSearchInput, onKeyDown: this.onSearchKeyDown }), index.h("span", { class: "bk-input__prefix" }, index.h("iron-icon", { icon: "search", class: "bk-icon bk-icon--sm" })), !!this.searchText && (index.h("button", { class: "bk-button bk-button--mini bk-button--text bk-input__suffix bk-dropdown-list__icon bk-dropdown-list__close-btn", onClick: this.onClearClick }, index.h("iron-icon", { icon: "close", class: "bk-icon bk-icon--sm" }))))));
        };
        this.listUI = () => {
            return (index.h("ul", { class: "bk-dropdown-list__list", role: "listbox" }, this._options.map((option, i) => (index.h("li", { key: `option_${option.value}`, class: "bk-dropdown-list__item" }, index.h("a", { id: `option_${option.value}`, tabIndex: -1, href: "", role: "option", title: option.label, onClick: (e) => this.onOptionClickHandler(e, option, i), onKeyDown: (e) => this.onOptionKeydownHandler(e, option), class: {
                    'is-disabled': !!option.disabled,
                    'is-active': !option.disabled && !!this.selectedOption && this.selectedOption === option.value,
                } }, option.label))))));
        };
        this.bkSelect = index.createEvent(this, "bkSelect", 7);
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
        return (index.h("bk-dropdown", { disabled: this.disabled, onBkOpened: this.handleMenuOpen, ref: (el) => (this.dropdown = el) }, index.h("slot", { name: "control" }), index.h("div", { slot: "content", class: "bk-dropdown-list__content", tabIndex: -1 }, this.searchBarUI(), this.options.length > 0 ? (this.listUI()) : (index.h("div", { class: "bk-dropdown-list__no-option" }, this.noOptionText)))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "selectedOption": ["watchSelectedOption"],
        "searchText": ["watchSearch"]
    }; }
};
__decorate([
    ParsePropTo('array', '_options')
], DropdownList.prototype, "options", void 0);
DropdownList.style = indexCss;

exports.bk_dropdown_list = DropdownList;
