import{r as o,h as t,H as r}from"./p-d0f0745a.js";const s=class{constructor(t){o(this,t),this.width=1,this.height=16,this.radius=0,this.withUnit=o=>o<=1?100*o+"%":o+"px"}render(){return t(r,{style:{width:this.withUnit(this.width),height:this.height+"px",borderRadius:this.radius+"px"}})}};s.style='.sc-bk-skeleton-h{display:inline-block;position:relative;overflow:hidden;background-color:var(--color-info-light, hsl(var(--color-info-h), var(--color-info-s), calc(var(--color-info-l) + ((100% - var(--color-info-l)) * 80) / 100)))}.sc-bk-skeleton-h::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));animation:skeleton 1.5s infinite}@keyframes skeleton{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}';export{s as bk_skeleton};