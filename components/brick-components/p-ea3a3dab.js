import"./p-e4a0f0fd.js";const o=o=>o.classList.contains("is-focus"),n=o=>o.classList.remove("is-focus"),s=s=>{o(s)||(s.classList.add("is-focus"),document.addEventListener("mousedown",()=>n(s),{once:!0}))},t=o=>{"Tab"===o.key&&s(o.currentTarget)},i=t=>{const i=t.currentTarget;"Tab"===t.key&&o(i)?n(i):s(i)},e=()=>(o,n)=>{const{componentDidLoad:s,componentDidUnload:e}=o;o.componentDidLoad=function(){return((o,n)=>{o[n].addEventListener("keyup",t),o[n].addEventListener("keydown",i)})(this,n),null==s?void 0:s.call(this)},o.componentDidUnload=function(){return((o,n)=>{o[n].removeEventListener("keyup",t),o[n].removeEventListener("keydown",i)})(this,n),null==e?void 0:e.call(this)}};export{e as K}