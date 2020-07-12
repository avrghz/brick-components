import{r as t,h as i,c as o,g as s}from"./p-dd77af2d.js";import"./p-195bd1cc.js";import{c as n}from"./p-93ed5897.js";const e=(t,i)=>i?t.findIndex(t=>i===t.value):-1,r=t=>!!t.find(t=>!t.disabled),l=t=>t.findIndex(t=>!t.disabled);const d=class{constructor(s){t(this,s),this.searchText="",this.options=[],this.disabled=!1,this.searchable=!1,this.noOptionText="No option",this.validateSelectedOption=()=>{this.selectedOption&&this.options.find(t=>t.value===this.selectedOption&&t.disabled)&&(this.selectedOption=void 0,n("DropdownList","Cannot set disabled option as selected"))},this.setFocus=t=>{this.selectedOption=this.options[t].value,this.el.querySelector("#option_"+t).focus()},this.handleMenuKeydown=t=>{switch(!0){case"Home"===t.key:t.stopImmediatePropagation(),((t,i)=>{const o=l(this.options);-1!==o&&i(o)})(0,this.setFocus);break;case"End"===t.key:t.stopImmediatePropagation(),((t,i)=>{const o=l([...t].reverse());-1!==o&&i(t.length-1-o)})(this.options,this.setFocus);break;case"ArrowDown"===t.key:t.stopImmediatePropagation(),((t,i,o)=>{if(!r(t))return;let s=-1;for(let n=e(t,i)+1;n<t.length;n++)if(!t[n].disabled){s=n;break}-1!==s&&o(s)})(this.options,this.selectedOption||null,this.setFocus);break;case"ArrowUp"===t.key:t.stopImmediatePropagation(),((t,i,o)=>{if(!r(t))return;let s=-1;for(let n=e(t,i)-1;n>=0;n--)if(!t[n].disabled){s=n;break}-1!==s&&o(s)})(this.options,this.selectedOption||null,this.setFocus)}},this.handleMenuOpen=()=>{var t;this.searchable&&this.searchBar&&this.searchBar.focus(),null===(t=this.dropdown)||void 0===t||t.addEventListener("keydown",this.handleMenuKeydown)},this.onOptionSelect=(t,i)=>{t.stopImmediatePropagation(),this.searchText="",this.bkSelect.emit(i),this.dropdown&&this.dropdown.dispatchEvent(new Event("bkCloseDropdownMenu",{bubbles:!1}))},this.onOptionClickHandler=(t,i,o)=>{t.preventDefault(),this.selectedOption&&i.value===this.selectedOption||(this.setFocus(o),this.onOptionSelect(t,i))},this.onOptionKeydownHandler=(t,i)=>{"Enter"!==t.key&&"Space"!==t.code||(t.preventDefault(),this.onOptionSelect(t,i))},this.onSearchKeyDown=t=>{"Home"!==t.key&&"End"!==t.key&&"ArrowDown"!==t.key&&"ArrowUp"!==t.key&&"Escape"!==t.key&&"Tab"!==t.key&&t.stopImmediatePropagation()},this.onSearchInput=t=>{this.searchText=t.target.value},this.onClearClick=t=>{t.stopImmediatePropagation(),this.searchText=""},this.searchBarUI=()=>!!this.searchable&&i("div",{class:{"bk-input bk-input--small bk-input--prefix bk-dropdown-list__search":!0,"bk-input--suffix":!!this.searchText}},i("input",{type:"text",placeholder:"Search",class:"bk-input__inner",value:this.searchText,ref:t=>this.searchBar=t,onInput:this.onSearchInput,onKeyDown:this.onSearchKeyDown}),i("span",{class:"bk-input__prefix"},i("iron-icon",{icon:"search",class:"bk-icon bk-icon--sm"})),!!this.searchText&&i("button",{class:"bk-button bk-button--mini bk-button--text bk-input__suffix bk-dropdown-list__icon bk-dropdown-list__close-btn",onClick:this.onClearClick},i("iron-icon",{icon:"close",class:"bk-icon bk-icon--sm"}))),this.listUI=()=>i("ul",{class:"bk-dropdown-list__list",role:"listbox"},this.options.map((t,o)=>i("li",{key:o,class:"bk-dropdown-list__item"},i("a",{id:"option_"+o,tabIndex:-1,href:"",role:"option",title:t.label,onClick:i=>this.onOptionClickHandler(i,t,o),onKeyDown:i=>this.onOptionKeydownHandler(i,t),class:{"is-disabled":!!t.disabled,"is-active":!t.disabled&&!!this.selectedOption&&this.selectedOption===t.value}},t.label)))),this.bkSelect=o(this,"bkSelect",7)}watchSelectedOption(){this.validateSelectedOption()}watchSearch(t,i){t&&t!==i&&this.searchText?(this._options=[...this.options],this.options=this._options.filter(t=>t.label.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase())>-1)):i&&!t&&(this.options=[...this._options])}componentWillLoad(){this.validateSelectedOption()}render(){return i("bk-dropdown",{disabled:this.disabled,onBkOpened:this.handleMenuOpen,ref:t=>this.dropdown=t},i("slot",{name:"control"}),i("div",{slot:"content",class:"bk-dropdown-list__content",tabIndex:-1},this.searchBarUI(),this.options.length>0?this.listUI():i("div",{class:"bk-dropdown-list__no-option"},this.noOptionText)))}get el(){return s(this)}static get watchers(){return{selectedOption:["watchSelectedOption"],searchText:["watchSearch"]}}};(function(t,i,o,s){var n,e=arguments.length,r=e<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,o,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(e<3?n(r):e>3?n(i,o,r):n(i,o))||r);e>3&&r&&Object.defineProperty(i,o,r)})([("array",(t,i)=>{const{componentWillLoad:o,componentWillUpdate:s}=t,n=t=>{"string"==typeof t[i]&&(t[i]=(t=>{try{return JSON.parse(t)}catch(i){return[]}})(t[i]))};t.componentWillLoad=function(){return n(this),null==o?void 0:o.call(this)},t.componentWillUpdate=function(){return n(this),null==s?void 0:s.call(this)}})],d.prototype,"options",void 0),d.style='.bk-dropdown-list__content.sc-bk-dropdown-list{min-width:200px;outline:none}.bk-dropdown-list__no-option.sc-bk-dropdown-list{color:#909399;text-align:center;margin-top:10px}.bk-dropdown-list__search.sc-bk-dropdown-list{margin-bottom:5px}.bk-dropdown-list__list.sc-bk-dropdown-list{padding:0;margin:0 -20px;max-height:250px;overflow-y:auto}.bk-dropdown-list__item.sc-bk-dropdown-list{list-style:none;margin:0}.bk-dropdown-list__item.sc-bk-dropdown-list>a.sc-bk-dropdown-list{display:block;line-height:30px;padding:0 20px;font-size:14px;color:#606266;outline:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:left}.bk-dropdown-list__item.sc-bk-dropdown-list>a.sc-bk-dropdown-list:not(.is-disabled):not(:focus):not(.is-active):hover{background-color:#ecf5ff;color:#66b1ff}.bk-dropdown-list__item.sc-bk-dropdown-list>a.is-active.sc-bk-dropdown-list{background-color:#409eff;color:#ffffff}.bk-dropdown-list__item.sc-bk-dropdown-list>a.is-disabled.sc-bk-dropdown-list{cursor:default;color:#bbb;pointer-events:none}.bk-dropdown-list__item--divided.sc-bk-dropdown-list{position:relative;margin-top:6px;border-top:1px solid #ebeef5}.bk-dropdown-list__item--divided.sc-bk-dropdown-list:before{content:"";height:6px;display:block;margin:0 -20px;background-color:#ffffff}.bk-dropdown-list__close-btn.sc-bk-dropdown-list{pointer-events:all}';export{d as bk_dropdown_list}