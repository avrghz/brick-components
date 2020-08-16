import{r as o,c as t,h as r,H as e,g as p}from"./p-6bd26c3b.js";import{S as i}from"./p-9332b412.js";const a=class{constructor(r){o(this,r),this.bkOpened=t(this,"bkOpened",3),this.bkClosed=t(this,"bkClosed",3),this.open=!1,this.clickOutsideToClose=!0,this.disabled=!1,this.handleDisabledState=()=>{this.disabled&&(this.open=!1)},this.setFocus=o=>{o&&o.focus()},this.onOutsideClickHandler=o=>{this.el.contains(o.target)||(this.open=!1)}}componentWillLoad(){this.handleDisabledState(),this.registerDomClick(!this.disabled&&this.clickOutsideToClose&&this.open)}componentDidLoad(){this.controlRef=this.el.querySelector('[slot="control"]')}componentWillUpdate(){this.handleDisabledState(),this.registerDomClick(!this.disabled&&this.clickOutsideToClose&&this.open)}componentDidUpdate(){this.open&&this.setFocus(this.menuRef)}registerDomClick(o=!0){o?(document.addEventListener("click",this.onOutsideClickHandler),document.addEventListener("keyup",this.onOutsideClickHandler)):(document.removeEventListener("click",this.onOutsideClickHandler),document.removeEventListener("keyup",this.onOutsideClickHandler))}onCloseMenu(){this.open=!1,this.setFocus(this.controlRef)}onKeyboardHandler(o){switch(o.key){case"ArrowDown":case"ArrowUp":this.open=!0;break;case"Enter":this.open&&o.target===o.currentTarget&&(this.open=!1,this.setFocus(this.controlRef));break;case"Escape":o.stopImmediatePropagation(),this.open=!1,this.setFocus(this.controlRef)}}onClickHandler(o){o.stopImmediatePropagation(),this.disabled||(this.open=!this.open)}render(){return r(e,{role:"button","aria-haspopup":"true","aria-expanded":this.open,class:{"bk-dropdown--disabled":this.disabled}},r("div",{class:"bk-dropdown"},r("slot",{name:"control"}),this.open&&r("div",{class:"bk-dropdown__menu bk-popper",ref:o=>this.menuRef=o,tabIndex:-1,onClick:o=>o.stopPropagation()},r("div",{class:"bk-popper__arrow","data-popper-arrow":!0}),r("slot",{name:"content"}))))}get el(){return p(this)}};(function(o,t,r,e){var p,i=arguments.length,a=i<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,r):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(o,t,r,e);else for(var s=o.length-1;s>=0;s--)(p=o[s])&&(a=(i<3?p(a):i>3?p(t,r,a):p(t,r))||a);i>3&&a&&Object.defineProperty(t,r,a)})([i({reference:"el",popper:"menuRef",controllingProp:"open",modifiers:[{name:"flip",options:{fallbackPlacements:["bottom-start","top-end","top-start"]}}],initialPlacement:"bottom-end",eventAfterOpened:"bkOpened",eventAfterClosed:"bkClosed"})],a.prototype,"popperInstance",void 0),a.style='.bk-popper{position:absolute;z-index:2000;opacity:0;transition:opacity 0.2s ease-in;box-sizing:border-box}.bk-popper:focus:active,.bk-popper:focus{outline-width:0}.bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:" ";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:var(--border-color-lighter);border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:var(--color-white);border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:var(--border-color-lighter)}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:var(--color-white)}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:var(--border-color-lighter);border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:var(--color-white);border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:var(--border-color-lighter)}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:var(--color-white)}:host{display:inline-block}:host(.bk-dropdown--disabled){opacity:0.5;pointer-events:none}.bk-dropdown{display:inline-block;position:relative;color:var(--color-text-regular);font-size:14px}.bk-dropdown__menu{padding:20px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.5);background-color:var(--color-white);border:1px solid var(--border-color-lighter);border-radius:4px;min-width:150px;max-width:300px}';export{a as bk_dropdown};