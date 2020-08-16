import{r,c as o,h as e,H as t,g as p}from"./p-6bd26c3b.js";import{S as a}from"./p-9332b412.js";const i=class{constructor(e){r(this,e),this.bkOpened=o(this,"bkOpened",3),this.bkClosed=o(this,"bkClosed",3),this.triggerOn="click",this.show=!1,this.placement="auto",this.disabled=!1,this.setPlacement=async()=>{var r;return await(null===(r=this.popperInstance)||void 0===r?void 0:r.setOptions({placement:this.placement}))},this.onClickHandler=()=>this.show?this.onCloseHandler():this.onOpenHandler()}watchTriggerOn(r,o){var e;r!==o&&(this.show=!1,null===(e=this.popperInstance)||void 0===e||e.destroy(),this.registerEvents(!1,o),this.registerEvents(!0,r))}async watchPlacement(r,o){r!==o&&await this.setPlacement()}componentWillLoad(){this.registerEvents(!0,this.triggerOn)}disconnectedCallback(){this.registerEvents(!1,this.triggerOn)}onOpenHandler(){this.show=!0}onCloseHandler(){this.show=!1}registerEvents(r,o){const e=r?"addEventListener":"removeEventListener";switch(o){case"click":this.el[e]("click",this.onClickHandler,{capture:!0});break;case"hover":this.el[e]("mouseenter",this.onOpenHandler,{capture:!0}),this.el[e]("mouseout",this.onCloseHandler,{capture:!0});break;case"focus":this.el[e]("focus",this.onOpenHandler,{capture:!0}),this.el[e]("blur",this.onCloseHandler,{capture:!0})}}async onPopoverOpened(){await this.setPlacement()}render(){return e(t,{"aria-label":"popover",class:this.disabled?"bk-popover--disabled":""},e("slot",{name:"control"}),this.show&&!this.disabled&&e("div",{class:"bk-popover bk-popper",ref:r=>this.popoverRef=r,role:"tooltip"},e("div",{class:"bk-popover__inner"},e("div",{class:"bk-popper__arrow","data-popper-arrow":!0}),e("slot",{name:"content"}))))}get el(){return p(this)}static get watchers(){return{triggerOn:["watchTriggerOn"],placement:["watchPlacement"]}}};(function(r,o,e,t){var p,a=arguments.length,i=a<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(r,o,e,t);else for(var s=r.length-1;s>=0;s--)(p=r[s])&&(i=(a<3?p(i):a>3?p(o,e,i):p(o,e))||i);a>3&&i&&Object.defineProperty(o,e,i)})([a({reference:"el",popper:"popoverRef",controllingProp:"show",eventAfterOpened:"bkOpened",eventAfterClosed:"bkClosed"})],i.prototype,"popperInstance",void 0),i.style='.bk-popper{position:absolute;z-index:2000;opacity:0;transition:opacity 0.2s ease-in;box-sizing:border-box}.bk-popper:focus:active,.bk-popper:focus{outline-width:0}.bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:" ";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:var(--border-color-lighter);border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:var(--color-white);border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:var(--border-color-lighter)}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:var(--color-white)}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:var(--border-color-lighter);border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:var(--color-white);border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:var(--border-color-lighter)}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:var(--color-white)}:host{display:inline-block}:host(.bk-popover--disabled){opacity:0.5;pointer-events:none}.bk-popover{background:var(--color-white);border-radius:4px;border:1px solid var(--border-color-lighter);padding:16px 20px;color:var(--color-text-regular);line-height:1.4;text-align:justify;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.5);word-break:break-all;font-size:14px}';export{i as bk_popover};