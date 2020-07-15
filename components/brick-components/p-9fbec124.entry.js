import{r as t,c as o,h as r,H as e,g as p}from"./p-dd77af2d.js";import{c as i}from"./p-dff9bbcc.js";const a=class{constructor(r){t(this,r),this.triggerOn="click",this.show=!1,this.placement="auto",this.disabled=!1,this.onClickHandler=()=>this.show?this.onCloseHandler():this.onOpenHandler(),this.bkOpened=o(this,"bkOpened",7),this.bkClosed=o(this,"bkClosed",7)}onTriggerOnUpdated(t,o){t!==o&&(this.show=!1,this.destroyPopper(),this.registerEvents(!1,o),this.registerEvents(!0,t))}componentWillLoad(){this.registerEvents(!0,this.triggerOn)}componentDidUpdate(){this.show&&!this.disabled?this.initPopper():this.destroyPopper()}componentDidUnload(){this.destroyPopper(),this.registerEvents(!1,this.triggerOn)}onOpenHandler(){this.show=!0}onCloseHandler(){this.show=!1}registerEvents(t,o){const r=t?"addEventListener":"removeEventListener";switch(o){case"click":this.el[r]("click",this.onClickHandler,{capture:!0});break;case"hover":this.el[r]("mouseenter",this.onOpenHandler,{capture:!0}),this.el[r]("mouseout",this.onCloseHandler,{capture:!0});break;case"focus":this.el[r]("focus",this.onOpenHandler,{capture:!0}),this.el[r]("blur",this.onCloseHandler,{capture:!0})}}initPopper(){this.popoverRef&&(this.popperInstance=i(this.el,this.popoverRef,{placement:this.placement,modifiers:[{name:"arrow",options:{padding:12}}]}),this.popoverRef.style.opacity="1",this.bkOpened.emit())}destroyPopper(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=void 0,this.bkClosed.emit())}render(){return r(e,{"aria-label":"popover",class:this.disabled?"bk-popover--disabled":""},r("slot",{name:"control"}),this.show&&!this.disabled&&r("div",{class:"bk-popover bk-popper",ref:t=>this.popoverRef=t,role:"tooltip"},r("div",{class:"bk-popover__inner"},r("div",{class:"bk-popper__arrow","data-popper-arrow":!0}),r("slot",{name:"content"}))))}get el(){return p(this)}static get watchers(){return{triggerOn:["onTriggerOnUpdated"]}}};a.style='.bk-popper__arrow,.bk-popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.bk-popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))}.bk-popper__arrow::after{content:" ";border-width:6px}.bk-popper[data-popper-placement^=top] .bk-popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#ebeef5;border-bottom-width:0}.bk-popper[data-popper-placement^=top] .bk-popper__arrow::after{bottom:0;margin-left:-6px;border-top-color:#ffffff;border-bottom-width:0}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.bk-popper[data-popper-placement^=bottom] .bk-popper__arrow::after{top:0;margin-left:-6px;border-top-width:0;border-bottom-color:#ffffff}.bk-popper[data-popper-placement^=right] .bk-popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#ebeef5;border-left-width:0}.bk-popper[data-popper-placement^=right] .bk-popper__arrow::after{bottom:-6px;left:0;border-right-color:#ffffff;border-left-width:0}.bk-popper[data-popper-placement^=left] .bk-popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#ebeef5}.bk-popper[data-popper-placement^=left] .bk-popper__arrow::after{right:0;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#ffffff}:host{display:inline-block}:host(.bk-popover--disabled){opacity:0.5;pointer-events:none}.bk-popover{position:absolute;padding:10px;opacity:0;transition:opacity 0.2s ease-in}.bk-popover__inner{position:relative;background:#ffffff;border-radius:4px;border:1px solid #ebeef5;padding:16px 20px;z-index:2000;color:#606266;line-height:1.4;text-align:justify;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);word-break:break-all;font-size:14px}.bk-popover:focus:active,.bk-popover:focus{outline-width:0}';export{a as bk_popover}