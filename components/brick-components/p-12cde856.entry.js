import{r as o,h as s,g as l}from"./p-d1c7e21c.js";const e=class{constructor(s){o(this,s),this.isAccordion=!0}componentWillLoad(){this.collapsiblePanels=this.el.querySelectorAll("bk-collapse")}onCollapseOpened(o){var s;this.isAccordion&&(null===(s=this.collapsiblePanels)||void 0===s||s.forEach(s=>{o.target!==s&&s.setAttribute("open","false")}))}render(){return s("slot",null)}get el(){return l(this)}};e.style="bk-collapse-group.sc-bk-collapse-group{display:block;border-top:1px solid #ebeef5}";export{e as bk_collapse_group}