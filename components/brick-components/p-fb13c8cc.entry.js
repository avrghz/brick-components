import{h as s,r as e,c as t,H as i}from"./p-035efb1b.js";import"./p-195bd1cc.js";import{C as c}from"./p-b13f9827.js";const p=({step:e,icon:t,title:i,description:c,status:p,style:b,isCentered:o,isLast:k,direction:r,onClick:n})=>s("div",{class:Object.assign(Object.assign({"bk-step":!0,"is-center":!!o,"is-flex":!o&&!!k},p?{["is-"+p]:!0}:{}),{["is-"+r]:!0}),style:b},s("div",{class:"bk-step__head"},s("div",{class:"bk-step__line"},s("i",{class:"bk-step__line-inner"})),s("div",{class:"bk-step__icon "+(t?"is-icon":"is-text")},s("div",Object.assign({class:"bk-step__icon-inner"},"wait"!==p?{onClick:n}:{}),t?s("iron-icon",{icon:t,class:"bk-icon bk-icon--xxl"}):e))),s("div",{class:"bk-step__main"},s("div",{class:"bk-step__title"},i),c&&s("div",{class:"bk-step__description"},c)));const b=class{constructor(s){e(this,s),this.bkClick=t(this,"bkClick",3),this.isCentered=!1,this.direction="horizontal",this.steps=[],this.isStyleCentered=()=>!!this.isCentered&&"horizontal"===this.direction,this.computeStepStyle=()=>({flexBasis:100/(this.steps.length-(this.isStyleCentered()?0:1))+"%",marginRight:"0"})}render(){return s(i,{class:"is-"+this.direction},this.steps.map((e,t)=>{var{icon:i}=e,c=function(s,e){var t={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.indexOf(i)<0&&(t[i]=s[i]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(i=Object.getOwnPropertySymbols(s);c<i.length;c++)e.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(s,i[c])&&(t[i[c]]=s[i[c]])}return t}(e,["icon"]);return s(p,Object.assign({onClick:()=>this.bkClick.emit(t),direction:this.direction,style:this.computeStepStyle(),isCentered:this.isStyleCentered(),isLast:this.steps.length-1===t},i?{icon:i}:{step:t+1},c))}))}};(function(s,e,t,i){var c,p=arguments.length,b=p<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)b=Reflect.decorate(s,e,t,i);else for(var o=s.length-1;o>=0;o--)(c=s[o])&&(b=(p<3?c(b):p>3?c(e,t,b):c(e,t))||b);p>3&&b&&Object.defineProperty(e,t,b)})([c("array")],b.prototype,"steps",void 0),b.style=".bk-step.sc-bk-steps{position:relative;flex-shrink:1}.bk-step.sc-bk-steps:last-of-type .bk-step__line.sc-bk-steps{display:none}.bk-step.sc-bk-steps:last-of-type.is-flex{flex-basis:auto !important;flex-shrink:0;flex-grow:0}.bk-step.sc-bk-steps:last-of-type .bk-step__main.sc-bk-steps,.bk-step.sc-bk-steps:last-of-type .bk-step__description.sc-bk-steps{padding-right:0}.bk-step__line.sc-bk-steps{position:absolute;border-color:inherit;background-color:#c0c4cc}.bk-step__line-inner.sc-bk-steps{display:block;border-width:1px;border-style:solid;border-color:inherit;transition:0.15s ease-out;box-sizing:border-box;width:0;height:0}.bk-step__main.sc-bk-steps{white-space:normal;text-align:left}.bk-step__head.sc-bk-steps{position:relative;width:100%}.bk-step__title.sc-bk-steps{font-size:16px;line-height:38px}.bk-step__description.sc-bk-steps{padding-right:10%;margin-top:-5px;font-size:12px;line-height:20px;font-weight:normal}.bk-step__icon.sc-bk-steps{position:relative;z-index:1;display:inline-flex;justify-content:center;align-items:center;width:24px;height:24px;font-size:14px;box-sizing:border-box;background:#ffffff;transition:0.15s ease-out}.bk-step__icon.is-text.sc-bk-steps{border-radius:50%;border:2px solid;border-color:inherit}.bk-step__icon.is-icon.sc-bk-steps{width:40px}.bk-step__icon-inner.sc-bk-steps{display:inline-block;user-select:none;text-align:center;font-weight:bold;line-height:1;color:inherit;cursor:pointer}.bk-step.is-process.sc-bk-steps .bk-step__head.sc-bk-steps{color:#303133;border-color:#303133}.bk-step.is-process.sc-bk-steps .bk-step__title.sc-bk-steps{font-weight:bold;color:#303133}.bk-step.is-process.sc-bk-steps .bk-step__description.sc-bk-steps{color:#303133}.bk-step.is-wait.sc-bk-steps .bk-step__head.sc-bk-steps{color:#c0c4cc;border-color:#c0c4cc}.bk-step.is-wait.sc-bk-steps .bk-step__title.sc-bk-steps{color:#c0c4cc}.bk-step.is-wait.sc-bk-steps .bk-step__description.sc-bk-steps{color:#c0c4cc}.bk-step.is-wait.sc-bk-steps .bk-step__icon-inner.sc-bk-steps{pointer-events:none}.bk-step.is-success.sc-bk-steps .bk-step__head.sc-bk-steps{color:#67c23a;border-color:#67c23a}.bk-step.is-success.sc-bk-steps .bk-step__title.sc-bk-steps{color:#67c23a}.bk-step.is-success.sc-bk-steps .bk-step__description.sc-bk-steps{color:#67c23a}.bk-step.is-error.sc-bk-steps .bk-step__head.sc-bk-steps{color:#f56c6c;border-color:#f56c6c}.bk-step.is-error.sc-bk-steps .bk-step__title.sc-bk-steps{color:#f56c6c}.bk-step.is-error.sc-bk-steps .bk-step__description.sc-bk-steps{color:#f56c6c}.bk-step.is-finish.sc-bk-steps .bk-step__head.sc-bk-steps{color:#409eff;border-color:#409eff}.bk-step.is-finish.sc-bk-steps .bk-step__title.sc-bk-steps{color:#409eff}.bk-step.is-finish.sc-bk-steps .bk-step__description.sc-bk-steps{color:#409eff}.bk-step.is-horizontal.sc-bk-steps{display:inline-block}.bk-step.is-horizontal.sc-bk-steps .bk-step__line.sc-bk-steps{height:2px;top:11px;left:0;right:0}.bk-step.is-vertical.sc-bk-steps{display:flex}.bk-step.is-vertical.sc-bk-steps .bk-step__head.sc-bk-steps{flex-grow:0;width:24px}.bk-step.is-vertical.sc-bk-steps .bk-step__main.sc-bk-steps{padding-left:10px;flex-grow:1}.bk-step.is-vertical.sc-bk-steps .bk-step__title.sc-bk-steps{line-height:24px;padding-bottom:8px}.bk-step.is-vertical.sc-bk-steps .bk-step__line.sc-bk-steps{width:2px;top:0;bottom:0;left:11px}.bk-step.is-vertical.sc-bk-steps .bk-step__icon.is-icon.sc-bk-steps{width:24px}.bk-step.is-center.sc-bk-steps .bk-step__head.sc-bk-steps{text-align:center}.bk-step.is-center.sc-bk-steps .bk-step__main.sc-bk-steps{text-align:center}.bk-step.is-center.sc-bk-steps .bk-step__description.sc-bk-steps{padding-left:20%;padding-right:20%}.bk-step.is-center.sc-bk-steps .bk-step__line.sc-bk-steps{left:50%;right:-50%}.sc-bk-steps-h{width:100%;display:flex}.is-horizontal.sc-bk-steps-h{white-space:nowrap}.is-vertical.sc-bk-steps-h{height:100%;flex-flow:column}";export{b as bk_steps}