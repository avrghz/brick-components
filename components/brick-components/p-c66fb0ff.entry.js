import{r as t,c as b,h as a,H as e,g as r}from"./p-035efb1b.js";import{K as s}from"./p-23b85818.js";const o=class{constructor(a){t(this,a),this.$tabHighlightReset=b(this,"$tabHighlightReset",7),this.$tabSetActive=b(this,"$tabSetActive",7),this.active=!1,this.disabled=!1,this.emitResetHighlighter=()=>{!this.disabled&&this.active&&this.$tabHighlightReset.emit()},this.emitHighlighter=()=>{!this.disabled&&this.active&&this.$tabSetActive.emit(this.tab)},this.handleClick=()=>{this.disabled||this.active||(this.active=!0)}}componentWillLoad(){this.emitResetHighlighter()}componentDidLoad(){this.timer=setTimeout(()=>{this.emitHighlighter()})}componentWillUpdate(){this.emitResetHighlighter()}componentDidUpdate(){this.emitHighlighter()}disconnectedCallback(){this.timer&&clearTimeout(this.timer)}onHighlightReset(t){t.target!==this.el&&(this.active=!1)}onClickHandler(){this.handleClick()}onKeyDownHandler(t){"Enter"!==t.key&&" "!==t.key||this.handleClick()}render(){return a(e,{id:this.tab,"aria-controls":"pane_"+this.tab,role:"tab",class:{"bk-tab-header":!0,"is-active":this.active&&!this.disabled,"is-disabled":this.disabled},tabIndex:this.active?0:-1,"aria-selected":""+this.active},a("div",{"data-tab-header":!0},a("slot",null)))}get el(){return r(this)}},i=class{constructor(b){t(this,b),this.active=!1}onSetActiveTab(t){this.active=t.detail===this.tab}render(){return a(e,{role:"tabpanel",id:"pane_"+this.tab,"aria-labelledby":this.tab,style:{display:this.active?"":"none"},class:"bk-tab-panel"},a("slot",null))}};const d=class{constructor(a){t(this,a),this.bkSelect=b(this,"bkSelect",3),this.shouldUpdateHighlighter=!1,this.position="top",this.variant="simple",this.setHighlighter=t=>{var b;const{width:a,height:e,x:r,y:s}=t.querySelector("[data-tab-header]").getBoundingClientRect(),{x:o,y:i}=this.el.getBoundingClientRect();if("top"===this.position||"bottom"===this.position){if(this.highlighterRef){const t=(null===(b=this.el.querySelector(".bk-tabs__scroll"))||void 0===b?void 0:b.scrollLeft)||0;this.highlighterRef.style.removeProperty("height"),this.highlighterRef.style.transform=`translateX(${t+r+-o}px)`,this.highlighterRef.style.width=a+"px"}}else this.highlighterRef&&(this.highlighterRef.style.removeProperty("width"),this.highlighterRef.style.transform=`translateY(${s-i}px)`,this.highlighterRef.style.height=e+"px")},this.getOrientation=()=>"left"===this.position||"right"===this.position?"vertical":"horizontal",this.getActiveTab=()=>this.activeTab?this.el.querySelector("#"+this.activeTab):null,this.getAllTabs=()=>this.el.querySelectorAll("bk-tab-header"),this.setActiveTab=t=>{t&&(t.setAttribute("active","true"),t.focus())}}watchPosition(t,b){this.shouldUpdateHighlighter="top"===t&&"top"!==b&&"bottom"!==b||"bottom"===t&&"top"!==b&&"bottom"!==b||"left"===t&&"left"!==b&&"right"!==b||"right"===t&&"left"!==b&&"right"!==b}componentDidUpdate(){this.shouldUpdateHighlighter&&this.activeTab&&"simple"===this.variant&&(this.shouldUpdateHighlighter=!1,this.setHighlighter(this.el.querySelector("#"+this.activeTab)))}onSetActiveTab(t){this.activeTab=t.detail,this.bkSelect.emit(this.activeTab),"simple"===this.variant&&this.setHighlighter(t.target)}onKeydownHandler(t){var b,a;const e=this.getOrientation();if("BK-TAB-HEADER"===t.target.tagName)switch(!0){case"ArrowDown"===t.key&&"vertical"===e:case"ArrowRight"===t.key&&"horizontal"===e:{const t=null===(b=this.getActiveTab())||void 0===b?void 0:b.nextElementSibling;if(t){this.setActiveTab(t);break}}case"Home"===t.key:this.setActiveTab(this.el.querySelector("bk-tab-header:first-child"));break;case"ArrowLeft"===t.key&&"horizontal"===e:case"ArrowUp"===t.key&&"vertical"===e:{const t=null===(a=this.getActiveTab())||void 0===a?void 0:a.previousElementSibling;if(t){this.setActiveTab(t);break}}case"End"===t.key:this.setActiveTab(this.el.querySelector("bk-tab-header:last-child"))}}render(){return a(e,{class:`bk-tabs bk-tabs--${this.position} bk-tabs--${this.variant}`,"aria-orientation":this.getOrientation()},a("div",{class:"bk-tabs__header"},a("div",{class:"bk-tabs__scroll"},a("div",{role:"tablist",class:"bk-tabs__nav"},"simple"===this.variant&&a("div",{ref:t=>this.highlighterRef=t,class:"bk-tabs__active-bar"}),a("slot",{name:"header"})))),a("slot",null))}get el(){return r(this)}static get watchers(){return{position:["watchPosition"]}}};(function(t,b,a,e){var r,s=arguments.length,o=s<3?b:null===e?e=Object.getOwnPropertyDescriptor(b,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,b,a,e);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(s<3?r(o):s>3?r(b,a,o):r(b,a))||o);s>3&&o&&Object.defineProperty(b,a,o)})([s()],d.prototype,"el",void 0),d.style='.bk-tab-header{padding:0 20px;height:40px;box-sizing:border-box;line-height:40px;display:inline-block;list-style:none;font-size:14px;font-weight:500;color:#303133;position:relative;cursor:pointer;margin-right:-4px;outline:none}.bk-tab-header:hover{color:#409eff}.bk-tab-header.is-active{color:#409eff}.bk-tab-header.is-disabled{opacity:0.5;pointer-events:none}.bk-tab-panel{display:block;position:relative;overflow:hidden;flex:1}.bk-tabs{padding:0;display:flex;flex-direction:column;position:relative;overflow:hidden}.bk-tabs__header{overflow:auto;position:relative;margin-bottom:16px}.bk-tabs__header::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1px;background-color:#e4e7ed;z-index:1}.bk-tabs__scroll{overflow:hidden}.bk-tabs__nav{white-space:nowrap;position:relative;transition:transform 0.3s;float:left;z-index:2}.bk-tabs__nav.is-stretch{min-width:100%;display:flex}.bk-tabs__nav.is-stretch>*{flex:1;text-align:center}.bk-tabs__active-bar{position:absolute;bottom:0;left:0;height:2px;background-color:#409eff;z-index:1;transition:transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);list-style:none}.bk-tabs--left .bk-tabs__header,.bk-tabs--right .bk-tabs__header{overflow:hidden;height:100%;margin-bottom:0}.bk-tabs--left .bk-tabs__header::after,.bk-tabs--right .bk-tabs__header::after{height:100%;width:1px;bottom:auto;top:0}.bk-tabs--left .bk-tabs__nav,.bk-tabs--right .bk-tabs__nav{float:none}.bk-tabs--left .bk-tabs__active-bar,.bk-tabs--right .bk-tabs__active-bar{top:0;bottom:auto;width:2px;height:auto}.bk-tabs--left bk-tab-header,.bk-tabs--right bk-tab-header{display:block}.bk-tabs--left{flex-direction:row}.bk-tabs--left .bk-tabs__header{margin-right:16px}.bk-tabs--left .bk-tabs__header::after{left:auto;right:0}.bk-tabs--left .bk-tabs__active-bar{right:0;left:auto}.bk-tabs--left bk-tab-header{text-align:right}.bk-tabs--right{flex-direction:row-reverse}.bk-tabs--right .bk-tabs__header{margin-left:16px}.bk-tabs--right .bk-tabs__header::after{left:0;right:auto}.bk-tabs--bottom .bk-tabs__scroll,.bk-tabs--top .bk-tabs__scroll{overflow-x:auto}.bk-tabs--bottom:not(.bk-tabs--border-card):not(.bk-tabs--card) bk-tab-header:first-of-type,.bk-tabs--top:not(.bk-tabs--border-card):not(.bk-tabs--card) bk-tab-header:first-of-type{padding-left:0}.bk-tabs--bottom:not(.bk-tabs--border-card):not(.bk-tabs--card) bk-tab-header:last-of-type,.bk-tabs--top:not(.bk-tabs--border-card):not(.bk-tabs--card) bk-tab-header:last-of-type{padding-right:0}.bk-tabs--bottom{flex-direction:column-reverse}.bk-tabs--bottom .bk-tabs__header{margin-top:16px;margin-bottom:0}.bk-tabs--card bk-tab-header,.bk-tabs--border-card bk-tab-header{text-align:center}.bk-tabs--card .bk-tabs__nav{border:1px solid #e4e7ed;border-radius:4px 4px 0 0;box-sizing:border-box}.bk-tabs--card bk-tab-header{transition:color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)}.bk-tabs--card.bk-tabs--top bk-tab-header,.bk-tabs--card.bk-tabs--bottom bk-tab-header{border-left:1px solid #e4e7ed}.bk-tabs--card.bk-tabs--top bk-tab-header:first-of-type,.bk-tabs--card.bk-tabs--bottom bk-tab-header:first-of-type{border-left:none}.bk-tabs--card.bk-tabs--top .bk-tabs__nav{border-bottom:none}.bk-tabs--card.bk-tabs--top bk-tab-header{border-bottom:1px solid transparent}.bk-tabs--card.bk-tabs--top bk-tab-header.is-active{border-bottom-color:#ffffff}.bk-tabs--card.bk-tabs--bottom .bk-tabs__header:after{bottom:auto;top:0}.bk-tabs--card.bk-tabs--bottom .bk-tabs__nav{border-top:none}.bk-tabs--card.bk-tabs--bottom bk-tab-header{border-top:1px solid transparent}.bk-tabs--card.bk-tabs--bottom bk-tab-header.is-active{border-top-color:#ffffff}.bk-tabs--card.bk-tabs--left .bk-tabs__nav,.bk-tabs--card.bk-tabs--right .bk-tabs__nav{border-bottom:1px solid #e4e7ed}.bk-tabs--card.bk-tabs--left bk-tab-header,.bk-tabs--card.bk-tabs--right bk-tab-header{border-top:1px solid #e4e7ed;border-bottom:none}.bk-tabs--card.bk-tabs--left bk-tab-header:first-child,.bk-tabs--card.bk-tabs--right bk-tab-header:first-child{border-top:none}.bk-tabs--card.bk-tabs--left bk-tab-header.is-active,.bk-tabs--card.bk-tabs--right bk-tab-header.is-active{border:1px solid #e4e7ed;border-bottom:none}.bk-tabs--card.bk-tabs--left bk-tab-header.is-active:first-child,.bk-tabs--card.bk-tabs--right bk-tab-header.is-active:first-child{border-top:none}.bk-tabs--card.bk-tabs--left bk-tab-header.is-active:last-child,.bk-tabs--card.bk-tabs--right bk-tab-header.is-active:last-child{border-bottom:none}.bk-tabs--card.bk-tabs--left .bk-tabs__nav{border-radius:4px 0 0 4px;border-right:none}.bk-tabs--card.bk-tabs--left bk-tab-header{border-left:none;border-right:1px solid #e4e7ed;margin:-1px 0 -1px -1px}.bk-tabs--card.bk-tabs--left bk-tab-header:first-child{border-right:1px solid #e4e7ed}.bk-tabs--card.bk-tabs--left bk-tab-header.is-active{border-right-color:#fff;border-left:none}.bk-tabs--card.bk-tabs--right .bk-tabs__nav{border-radius:0 4px 4px 0;border-left:none}.bk-tabs--card.bk-tabs--right bk-tab-header{border-right:none;border-left:1px solid #e4e7ed;margin:-1px -1px -1px 0}.bk-tabs--card.bk-tabs--right bk-tab-header:first-child{border-left:1px solid #e4e7ed}.bk-tabs--card.bk-tabs--right bk-tab-header.is-active{border-left-color:#fff;border-right:none}.bk-tabs--border-card{background:#ffffff;border:1px solid #dcdfe6;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04)}.bk-tabs--border-card .bk-tabs__header{background-color:#f5f7fa;margin:0}.bk-tabs--border-card .bk-tab-panel{padding:16px}.bk-tabs--border-card bk-tab-header{transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);border:1px solid transparent;margin-top:-1px;color:#909399}.bk-tabs--border-card bk-tab-header:first-child{margin-left:-1px}.bk-tabs--border-card bk-tab-header+bk-tab-header{margin-left:-1px}.bk-tabs--border-card bk-tab-header.is-active{color:#409eff;background-color:#ffffff}.bk-tabs--border-card bk-tab-header.is-disabled{color:#c0c4cc}.bk-tabs--border-card bk-tab-header:not(.is-disabled):hover{color:#409eff}.bk-tabs--border-card.bk-tabs--bottom bk-tab-header.is-active,.bk-tabs--border-card.bk-tabs--top bk-tab-header.is-active{border-right-color:#dcdfe6;border-left-color:#dcdfe6}.bk-tabs--border-card.bk-tabs--bottom bk-tab-header.is-active{border-bottom-color:#d1dbe5}.bk-tabs--border-card.bk-tabs--left bk-tab-header,.bk-tabs--border-card.bk-tabs--right bk-tab-header{border:1px solid transparent}.bk-tabs--border-card.bk-tabs--left bk-tab-header.is-active,.bk-tabs--border-card.bk-tabs--right bk-tab-header.is-active{border-color:transparent;border-top-color:#d1dbe5;border-bottom-color:#d1dbe5}.bk-tabs--border-card.bk-tabs--left bk-tab-header{margin:-1px 0 -1px -1px}.bk-tabs--border-card.bk-tabs--right bk-tab-header{margin:-1px -1px -1px 0}.bk-tabs.is-focus bk-tab-header:focus.is-active:not(:active){box-shadow:0 0 1px 1px #409eff inset;border-radius:3px}';export{o as bk_tab_header,i as bk_tab_panel,d as bk_tabs}