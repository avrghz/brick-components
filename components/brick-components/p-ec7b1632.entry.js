import{r as e,c as t,h as o,H as r,g as p}from"./p-e4a0f0fd.js";import{S as a}from"./p-dec14ca6.js";const i=class{constructor(o){e(this,o),this.bkOpened=t(this,"bkOpened",3),this.bkClosed=t(this,"bkClosed",3),this.triggerOn="click",this.show=!1,this.placement="auto",this.disabled=!1,this.setPlacement=async()=>{var e;return await(null===(e=this.popperInstance)||void 0===e?void 0:e.setOptions({placement:this.placement}))},this.onClickHandler=()=>this.show?this.onCloseHandler():this.onOpenHandler()}watchTriggerOn(e,t){var o;e!==t&&(this.show=!1,null===(o=this.popperInstance)||void 0===o||o.destroy(),this.registerEvents(!1,t),this.registerEvents(!0,e))}async watchPlacement(e,t){e!==t&&await this.setPlacement()}componentWillLoad(){this.registerEvents(!0,this.triggerOn)}disconnectedCallback(){this.registerEvents(!1,this.triggerOn)}onOpenHandler(){this.show=!0}onCloseHandler(){this.show=!1}registerEvents(e,t){const o=e?"addEventListener":"removeEventListener";switch(t){case"click":this.el[o]("click",this.onClickHandler,{capture:!0});break;case"hover":this.el[o]("mouseenter",this.onOpenHandler,{capture:!0}),this.el[o]("mouseout",this.onCloseHandler,{capture:!0});break;case"focus":this.el[o]("focus",this.onOpenHandler,{capture:!0}),this.el[o]("blur",this.onCloseHandler,{capture:!0})}}async onPopoverOpened(){await this.setPlacement()}render(){return o(r,{"aria-label":"popover",class:this.disabled?"bk-popover--disabled":""},o("slot",{name:"control"}),this.show&&!this.disabled&&o("div",{class:"bk-popover bk-popper",ref:e=>this.popoverRef=e,role:"tooltip"},o("div",{class:"bk-popover__inner"},o("div",{class:"bk-popper__arrow","data-popper-arrow":!0}),o("slot",{name:"content"}))))}get el(){return p(this)}static get watchers(){return{triggerOn:["watchTriggerOn"],placement:["watchPlacement"]}}};(function(e,t,o,r){var p,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(p=e[s])&&(i=(a<3?p(i):a>3?p(t,o,i):p(t,o))||i);a>3&&i&&Object.defineProperty(t,o,i)})([a({reference:"el",popper:"popoverRef",controllingProp:"show",eventAfterOpened:"bkOpened",eventAfterClosed:"bkClosed"})],i.prototype,"popperInstance",void 0),i.style='.bk-popper{position:absolute;z-index:2000;opacity:0;transition:opacity 0.2s ease-in;box-sizing:border-box}.bk-popper:focus:active,.bk-popper:focus{outline-width:0}.bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:" ";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#ebeef5;border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:#ffffff;border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:#ffffff}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#ebeef5;border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:#ffffff;border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#ebeef5}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#ffffff}:host{display:inline-block}:host(.bk-popover--disabled){opacity:0.5;pointer-events:none}.bk-popover{background:#ffffff;border-radius:4px;border:1px solid #ebeef5;padding:16px 20px;color:#606266;line-height:1.4;text-align:justify;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);word-break:break-all;font-size:14px}';export{i as bk_popover}