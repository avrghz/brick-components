import{h as s,r as e,c as t,H as i}from"./p-035efb1b.js";import"./p-a7655182.js";import{C as o}from"./p-b13f9827.js";const p=({step:e,icon:t,title:i,description:o,status:p,style:c,isCentered:r,isLast:b,direction:l,onClick:k})=>s("div",{class:Object.assign(Object.assign({"bk-step":!0,"is-center":!!r,"is-flex":!r&&!!b},p?{["is-"+p]:!0}:{}),{["is-"+l]:!0}),style:c},s("div",{class:"bk-step__head"},s("div",{class:"bk-step__line"},s("i",{class:"bk-step__line-inner"})),s("div",{class:"bk-step__icon "+(t?"is-icon":"is-text")},s("div",Object.assign({class:"bk-step__icon-inner"},"wait"!==p?{onClick:k}:{}),t?s("iron-icon",{icon:t,class:"bk-icon bk-icon--xxl"}):e))),s("div",{class:"bk-step__main"},s("div",{class:"bk-step__title"},i),o&&s("div",{class:"bk-step__description"},o)));const c=class{constructor(s){e(this,s),this.bkClick=t(this,"bkClick",3),this.isCentered=!1,this.direction="horizontal",this.steps=[],this.isStyleCentered=()=>!!this.isCentered&&"horizontal"===this.direction,this.computeStepStyle=()=>({flexBasis:100/(this.steps.length-(this.isStyleCentered()?0:1))+"%",marginRight:"0"})}render(){return s(i,{class:"is-"+this.direction},this.steps.map((e,t)=>{var{icon:i}=e,o=function(s,e){var t={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.indexOf(i)<0&&(t[i]=s[i]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(s);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(s,i[o])&&(t[i[o]]=s[i[o]])}return t}(e,["icon"]);return s(p,Object.assign({onClick:()=>this.bkClick.emit(t),direction:this.direction,style:this.computeStepStyle(),isCentered:this.isStyleCentered(),isLast:this.steps.length-1===t},i?{icon:i}:{step:t+1},o))}))}};(function(s,e,t,i){var o,p=arguments.length,c=p<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(o=s[r])&&(c=(p<3?o(c):p>3?o(e,t,c):o(e,t))||c);p>3&&c&&Object.defineProperty(e,t,c)})([o("array")],c.prototype,"steps",void 0),c.style=".bk-step.sc-bk-steps{position:relative;flex-shrink:1}.bk-step.sc-bk-steps:last-of-type .bk-step__line.sc-bk-steps{display:none}.bk-step.sc-bk-steps:last-of-type.is-flex{flex-basis:auto !important;flex-shrink:0;flex-grow:0}.bk-step.sc-bk-steps:last-of-type .bk-step__main.sc-bk-steps,.bk-step.sc-bk-steps:last-of-type .bk-step__description.sc-bk-steps{padding-right:0}.bk-step__line.sc-bk-steps{position:absolute;border-color:inherit;background-color:var(--color-text-placeholder)}.bk-step__line-inner.sc-bk-steps{display:block;border-width:1px;border-style:solid;border-color:inherit;transition:0.15s ease-out;box-sizing:border-box;width:0;height:0}.bk-step__main.sc-bk-steps{white-space:normal;text-align:left}.bk-step__head.sc-bk-steps{position:relative;width:100%}.bk-step__title.sc-bk-steps{font-size:16px;line-height:38px}.bk-step__description.sc-bk-steps{padding-right:10%;margin-top:-5px;font-size:12px;line-height:20px;font-weight:normal}.bk-step__icon.sc-bk-steps{position:relative;z-index:1;display:inline-flex;justify-content:center;align-items:center;width:24px;height:24px;font-size:14px;box-sizing:border-box;background:var(--color-html-bg);transition:0.15s ease-out}.bk-step__icon.is-text.sc-bk-steps{border-radius:50%;border:2px solid;border-color:inherit}.bk-step__icon.is-icon.sc-bk-steps{width:40px}.bk-step__icon-inner.sc-bk-steps{display:inline-block;user-select:none;text-align:center;font-weight:bold;line-height:1;color:inherit;cursor:pointer}.bk-step.is-process.sc-bk-steps .bk-step__head.sc-bk-steps{color:var(--color-text-primary);border-color:var(--color-text-primary)}.bk-step.is-process.sc-bk-steps .bk-step__title.sc-bk-steps{font-weight:bold;color:var(--color-text-primary)}.bk-step.is-process.sc-bk-steps .bk-step__description.sc-bk-steps{color:var(--color-text-primary)}.bk-step.is-wait.sc-bk-steps .bk-step__head.sc-bk-steps{color:var(--color-text-placeholder);border-color:var(--color-text-placeholder)}.bk-step.is-wait.sc-bk-steps .bk-step__title.sc-bk-steps{color:var(--color-text-placeholder)}.bk-step.is-wait.sc-bk-steps .bk-step__description.sc-bk-steps{color:var(--color-text-placeholder)}.bk-step.is-wait.sc-bk-steps .bk-step__icon-inner.sc-bk-steps{pointer-events:none}.bk-step.is-success.sc-bk-steps .bk-step__head.sc-bk-steps{color:var(--color-success);border-color:var(--color-success)}.bk-step.is-success.sc-bk-steps .bk-step__title.sc-bk-steps{color:var(--color-success)}.bk-step.is-success.sc-bk-steps .bk-step__description.sc-bk-steps{color:var(--color-success)}.bk-step.is-error.sc-bk-steps .bk-step__head.sc-bk-steps{color:var(--color-danger);border-color:var(--color-danger)}.bk-step.is-error.sc-bk-steps .bk-step__title.sc-bk-steps{color:var(--color-danger)}.bk-step.is-error.sc-bk-steps .bk-step__description.sc-bk-steps{color:var(--color-danger)}.bk-step.is-finish.sc-bk-steps .bk-step__head.sc-bk-steps{color:var(--color-primary);border-color:var(--color-primary)}.bk-step.is-finish.sc-bk-steps .bk-step__title.sc-bk-steps{color:var(--color-primary)}.bk-step.is-finish.sc-bk-steps .bk-step__description.sc-bk-steps{color:var(--color-primary)}.bk-step.is-horizontal.sc-bk-steps{display:inline-block}.bk-step.is-horizontal.sc-bk-steps .bk-step__line.sc-bk-steps{height:2px;top:11px;left:0;right:0}.bk-step.is-vertical.sc-bk-steps{display:flex}.bk-step.is-vertical.sc-bk-steps .bk-step__head.sc-bk-steps{flex-grow:0;width:24px}.bk-step.is-vertical.sc-bk-steps .bk-step__main.sc-bk-steps{padding-left:10px;flex-grow:1}.bk-step.is-vertical.sc-bk-steps .bk-step__title.sc-bk-steps{line-height:24px;padding-bottom:8px}.bk-step.is-vertical.sc-bk-steps .bk-step__line.sc-bk-steps{width:2px;top:0;bottom:0;left:11px}.bk-step.is-vertical.sc-bk-steps .bk-step__icon.is-icon.sc-bk-steps{width:24px}.bk-step.is-center.sc-bk-steps .bk-step__head.sc-bk-steps{text-align:center}.bk-step.is-center.sc-bk-steps .bk-step__main.sc-bk-steps{text-align:center}.bk-step.is-center.sc-bk-steps .bk-step__description.sc-bk-steps{padding-left:20%;padding-right:20%}.bk-step.is-center.sc-bk-steps .bk-step__line.sc-bk-steps{left:50%;right:-50%}.sc-bk-steps-h{width:100%;display:flex}.is-horizontal.sc-bk-steps-h{white-space:nowrap}.is-vertical.sc-bk-steps-h{height:100%;flex-flow:column}";export{c as bk_steps}