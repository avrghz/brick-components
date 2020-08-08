import{r,c as o,h as l,H as a}from"./p-035efb1b.js";import"./p-a7655182.js";const c=class{constructor(l){r(this,l),this.bkClosed=o(this,"bkClosed",3),this.variant="default",this.shade="light",this.dismissible=!0,this.onCloseHandler=r=>{r.preventDefault(),this.bkClosed.emit()}}render(){return l(a,{role:"alert",class:`bk-alert bk-alert--${this.variant} bk-alert--${this.shade} ${this.dismissible?"is--dismissible":""}`},this.dismissible&&l("button",{class:"bk-button bk-button--text bk-alert__close-btn",onClick:this.onCloseHandler},l("iron-icon",{icon:"close",class:"bk-icon"})),l("slot",null))}};c.style=".sc-bk-alert-h{display:block;width:100%;padding:16px 20px;margin:0;box-sizing:border-box;border-radius:4px;position:relative;background-color:var(--color-white);overflow:hidden;opacity:1;display:flex;align-items:center;transition:opacity 0.2s;font-size:14px}.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert{position:absolute;cursor:pointer;box-sizing:border-box;padding:5px;opacity:0.75;outline:none;line-height:1;background-color:transparent;border:none;top:8px;right:0}.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-text-regular);width:18px}.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert:hover,.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert:active,.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert:focus{opacity:1}.is--dismissible.sc-bk-alert-h{padding-right:32px}.bk-alert--default.sc-bk-alert-h{border-color:var(--color-primary)}.bk-alert--default.bk-alert--light.sc-bk-alert-h{background-color:var(--color-primary-light-9, hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) + ((100% - var(--color-primary-l)) * 90) / 100)));color:var(--color-primary)}.bk-alert--default.bk-alert--light.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-primary)}.bk-alert--default.bk-alert--dark.sc-bk-alert-h{background-color:var(--color-primary);color:var(--color-white)}.bk-alert--default.bk-alert--dark.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-white)}.bk-alert--success.sc-bk-alert-h{border-color:var(--color-success)}.bk-alert--success.bk-alert--light.sc-bk-alert-h{background-color:var(--color-success-lighter, hsl(var(--color-success-h), var(--color-success-s), calc(var(--color-success-l) + ((100% - var(--color-success-l)) * 90) / 100)));color:var(--color-success)}.bk-alert--success.bk-alert--light.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-success)}.bk-alert--success.bk-alert--dark.sc-bk-alert-h{background-color:var(--color-success);color:var(--color-white)}.bk-alert--success.bk-alert--dark.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-white)}.bk-alert--info.sc-bk-alert-h{border-color:var(--color-info)}.bk-alert--info.bk-alert--light.sc-bk-alert-h{background-color:var(--color-info-lighter, hsl(var(--color-info-h), var(--color-info-s), calc(var(--color-info-l) + ((100% - var(--color-info-l)) * 90) / 100)));color:var(--color-info)}.bk-alert--info.bk-alert--light.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-info)}.bk-alert--info.bk-alert--dark.sc-bk-alert-h{background-color:var(--color-info);color:var(--color-white)}.bk-alert--info.bk-alert--dark.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-white)}.bk-alert--warning.sc-bk-alert-h{border-color:var(--color-warning)}.bk-alert--warning.bk-alert--light.sc-bk-alert-h{background-color:var(--color-warning-lighter, hsl(var(--color-warning-h), var(--color-warning-s), calc(var(--color-warning-l) + ((100% - var(--color-warning-l)) * 90) / 100)));color:var(--color-warning)}.bk-alert--warning.bk-alert--light.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-warning)}.bk-alert--warning.bk-alert--dark.sc-bk-alert-h{background-color:var(--color-warning);color:var(--color-white)}.bk-alert--warning.bk-alert--dark.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-white)}.bk-alert--danger.sc-bk-alert-h{border-color:var(--color-danger)}.bk-alert--danger.bk-alert--light.sc-bk-alert-h{background-color:var(--color-danger-lighter, hsl(var(--color-danger-h), var(--color-danger-s), calc(var(--color-danger-l) + ((100% - var(--color-danger-l)) * 90) / 100)));color:var(--color-danger)}.bk-alert--danger.bk-alert--light.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-danger)}.bk-alert--danger.bk-alert--dark.sc-bk-alert-h{background-color:var(--color-danger);color:var(--color-white)}.bk-alert--danger.bk-alert--dark.sc-bk-alert-h .bk-alert__close-btn.sc-bk-alert iron-icon.sc-bk-alert{color:var(--color-white)}";export{c as bk_alert}