import{r as t,c as i,h as s,g as o}from"./p-6bd26c3b.js";import"./p-17c8d92c.js";const n=class{constructor(s){t(this,s),this.bkConfirmed=i(this,"bkConfirmed",3),this.bkCancelled=i(this,"bkCancelled",3),this.show=!1,this.confirmButtonText="Confirm",this.cancelButtonText="Cancel",this.confirmButtonVariant="primary",this.cancelButtonVariant="default",this.disabled=!1,this.onActionHandler=(t,i)=>{t.stopImmediatePropagation(),this.show=!1,this.focusOnControl(),i.emit()},this.focusOnControl=()=>{this.el.querySelector("[slot=control]").focus()},this.onPopConfirmOpenHandler=()=>{var t;null===(t=this.cancelButtonRef)||void 0===t||t.focus()},this.getButtonVariant=t=>"default"!==t?"bk-button--"+t:""}onClickHandler(){this.disabled||this.show||(this.show=!0)}render(){return s("bk-popover",{show:this.show,triggerOn:"manual",disabled:this.disabled,placement:"bottom-end",onBkOpened:this.onPopConfirmOpenHandler,"aria-label":"confirmation popup"},s("div",{class:"bk-pop-confirm",slot:"content"},s("focus-trap",null,s("div",{class:"bk-pop-confirm__message"},this.message),s("div",{class:"bk-pop-confirm__footer"},s("button",{class:"bk-button bk-button--mini "+this.getButtonVariant(this.cancelButtonVariant),onClick:t=>this.onActionHandler(t,this.bkCancelled),ref:t=>this.cancelButtonRef=t},this.cancelButtonText),s("button",{class:"bk-button bk-button--mini "+this.getButtonVariant(this.confirmButtonVariant),onClick:t=>this.onActionHandler(t,this.bkConfirmed)},this.confirmButtonText)))),s("slot",{name:"control"}))}get el(){return o(this)}};n.style=".bk-pop-confirm__footer.sc-bk-pop-confirm{display:flex;justify-content:flex-end;align-items:center;margin-top:16px}";export{n as bk_pop_confirm};