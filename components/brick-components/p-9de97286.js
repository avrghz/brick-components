const e="brick-components";let t,n,l,o=!1,s=!1,i=!1,c=!1,r=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},p=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),b=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=e,i=h(t,o),c=w(n);d.ael(s,l,i,c),(t.o=t.o||[]).push(()=>d.rel(s,l,i,c))})},h=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},w=e=>0!=(2&e),y="http://www.w3.org/1999/xlink",g=new WeakMap,v=e=>"sc-"+e.u,k={},j=e=>"object"==(e=typeof e)||"function"===e,_=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,c=!1,r=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!j(l))&&(l+=""),i&&c?r[r.length-1].p+=l:r.push(i?O(null,l):l),c=i)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,M);const f=O(e,null);return f.$=t,r.length>0&&(f.m=r),f.h=o,f.g=s,f},O=(e,t)=>({t:0,v:e,p:t,k:null,m:null,$:null,h:null,g:null}),S={},M={forEach:(e,t)=>e.map(x).forEach(t),map:(e,t)=>e.map(x).map(t).map(C)},x=e=>({vattrs:e.$,vchildren:e.m,vkey:e.h,vname:e.g,vtag:e.v,vtext:e.p}),C=e=>{const t=O(e.vtag,e.vtext);return t.$=e.vattrs,t.m=e.vchildren,t.h=e.vkey,t.g=e.vname,t},R=(e,t,n,l,o,s)=>{if(n!==l){let c=de(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=T(n),s=T(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const a=j(l);if((c||a&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(y,t):e.removeAttribute(t)):(!c||4&s||o)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(y,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):de(a,r)?r.slice(2):r[2]+t.slice(3),n&&d.rel(e,t,n,!1),l&&d.ael(e,t,l,!1)}},U=/\s/,T=e=>e?e.split(U):[],E=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||k,i=t.$||k;for(l in s)l in i||R(o,l,s[l],void 0,n,t.t);for(l in i)R(o,l,s[l],i[l],n,t.t)},L=(e,s,r,a)=>{let f,d,p,$=s.m[r],m=0;if(o||(i=!0,"slot"===$.v&&(t&&a.classList.add(t+"-s"),$.t|=$.m?2:1)),null!==$.p)f=$.k=u.createTextNode($.p);else if(1&$.t)f=$.k=u.createTextNode("");else{if(c||(c="svg"===$.v),f=$.k=u.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.v),c&&"foreignObject"===$.v&&(c=!1),E(null,$,c),null!=t&&f["s-si"]!==t&&f.classList.add(f["s-si"]=t),$.m)for(m=0;m<$.m.length;++m)d=L(e,$,m,f),d&&f.appendChild(d);"svg"===$.v?c=!1:"foreignObject"===f.tagName&&(c=!0)}return f["s-hn"]=l,3&$.t&&(f["s-sr"]=!0,f["s-cr"]=n,f["s-sn"]=$.g||"",p=e&&e.m&&e.m[r],p&&p.v===$.v&&e.k&&P(e.k,!1)),f},P=(e,t)=>{d.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(F(e).insertBefore(e,A(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&P(e,t)}d.t&=-2},W=(e,t,n,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=L(null,n,s,e),c&&(o[s].k=c,r.insertBefore(c,A(t))))},D=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.k,G(l),s=!0,o["s-ol"]?o["s-ol"].remove():P(o,!0),o.remove())},N=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),A=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t)=>{const n=t.k=e.k,l=e.m,o=t.m,s=t.v,i=t.p;let r;null===i?(c="svg"===s||"foreignObject"!==s&&c,"slot"===s||E(e,t,c),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,c=0,r=0,a=0,f=t.length-1,u=t[0],d=t[f],p=l.length-1,$=l[0],m=l[p];for(;i<=f&&c<=p;)if(null==u)u=t[++i];else if(null==d)d=t[--f];else if(null==$)$=l[++c];else if(null==m)m=l[--p];else if(N(u,$))H(u,$),u=t[++i],$=l[++c];else if(N(d,m))H(d,m),d=t[--f],m=l[--p];else if(N(u,m))"slot"!==u.v&&"slot"!==m.v||P(u.k.parentNode,!1),H(u,m),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],m=l[--p];else if(N(d,$))"slot"!==u.v&&"slot"!==m.v||P(d.k.parentNode,!1),H(d,$),e.insertBefore(d.k,u.k),d=t[--f],$=l[++c];else{for(r=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].h&&t[a].h===$.h){r=a;break}r>=0?(s=t[r],s.v!==$.v?o=L(t&&t[c],n,r,e):(H(s,$),t[r]=void 0,o=s.k),$=l[++c]):(o=L(t&&t[c],n,c,e),$=l[++c]),o&&F(u.k).insertBefore(o,A(u.k))}i>f?W(e,null==l[p+1]?null:l[p+1].k,n,l,c,p):c>p&&D(t,i,f)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),W(n,null,t,o,0,o.length-1)):null!==l&&D(l,0,l.length-1),c&&"svg"===s&&(c=!1)):(r=n["s-cr"])?r.parentNode.textContent=i:e.p!==i&&(n.data=i)},q=e=>{let t,n,l,o,s,i,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(i=c[o].nodeType,""!==s){if(1===i&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==c[o].textContent.trim()){t.hidden=!0;break}q(t)}},V=[],z=e=>{let t,n,l,o,i,c,r=0,a=e.childNodes,f=a.length;for(;r<f;r++){if(t=a[r],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(B(n,o)?(i=V.find(e=>e.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,i?i._=t:V.push({_:t,j:n}),n["s-sr"]&&V.map(e=>{B(e.j,n["s-sn"])&&(i=V.find(e=>e.j===n),i&&!e._&&(e._=i._))})):V.some(e=>e.j===n)||V.push({j:n}));1===t.nodeType&&z(t)}},B=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,G=e=>{e.$&&e.$.ref&&e.$.ref(null),e.m&&e.m.map(G)},I=e=>ae(e).O,J=(e,t,n)=>{const l=I(e);return{emit:e=>K(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},K=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},Q=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.S=t))},X=(e,t)=>{if(e.t|=16,!(4&e.t))return Q(e,e.M),je(()=>Y(e,t));e.t|=512},Y=(e,t)=>{const n=e.s;let l;return t?(e.t|=256,e.i&&(e.i.map(([e,t])=>le(n,e,t)),e.i=null),l=le(n,"componentWillLoad")):l=le(n,"componentWillUpdate"),oe(l,()=>Z(e,n,t))},Z=(e,c,r)=>{const a=e.O,f=a["s-rc"];r&&(e=>{const t=e.C,n=e.O,l=t.t,o=((e,t)=>{let n=v(t),l=be.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=g.get(e=e.head||e);o||g.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e),((e,c)=>{const r=e.O,a=e.C,f=e.R||O(null,null),$=(e=>e&&e.v===S)(c)?c:_(null,null,c);if(l=r.tagName,a.U&&($.$=$.$||{},a.U.map(([e,t])=>$.$[t]=r[e])),$.v=null,$.t|=4,e.R=$,$.k=f.k=r.shadowRoot||r,t=r["s-sc"],n=r["s-cr"],o=p&&0!=(1&a.t),s=!1,H(f,$),d.t|=1,i){let e,t,n,l,o,s;z($.k);let i=0;for(;i<V.length;i++)e=V[i],t=e.j,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<V.length;i++)if(e=V[i],t=e.j,e._){for(l=e._.parentNode,o=e._.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&q($.k),d.t&=-2,V.length=0})(e,ee(e,c)),f&&(f.map(e=>e()),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>te(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},ee=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){pe(n)}return t},te=e=>{const t=e.O,n=e.s,l=e.M;64&e.t?le(n,"componentDidUpdate"):(e.t|=64,se(t),le(n,"componentDidLoad"),e.T(t),l||ne()),e.S&&(e.S(),e.S=void 0),512&e.t&&ke(()=>X(e,!1)),e.t&=-517},ne=()=>{se(u.documentElement),ke(()=>K(a,"appload",{detail:{namespace:"brick-components"}}))},le=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){pe(l)}},oe=(e,t)=>e&&e.then?e.then(t):t(),se=e=>e.classList.add("hydrated"),ie=(e,t,n)=>{if(t.L){e.watchers&&(t.P=e.watchers);const l=Object.entries(t.L),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>ae(this).W.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ae(this),s=o.W.get(t),i=o.t,c=o.s;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),!(8&i&&void 0!==s||n===s)&&(o.W.set(t,n),c)){if(l.P&&128&i){const e=l.P[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(l){pe(l)}})}2==(18&i)&&X(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){d.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.U.push([e,o]),o})}}return e},ce=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,i=s.querySelector("meta[charset]"),c=u.createElement("style"),r=[];let f,$=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",u.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],L:t[2],D:t[3]};s.L=t[2],s.D=t[3],s.U=[],s.P={},!p&&1&s.t&&(s.t|=8);const i=s.u,c=class extends HTMLElement{constructor(e){super(e),ue(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),$?r.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=ae(e),n=t.C,l=()=>{};if(1&t.t)b(e,t,n.D);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Q(t,t.M=n);break}}n.L&&Object.entries(n.L).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ke(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=me(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.P=o.watchers,ie(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){pe(c)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=v(n);if(!be.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_brick_components("./p-3833d40d.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=be.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,be.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.M,i=()=>X(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n))}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=ae(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),le(t,"disconnectedCallback"),le(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=ae(this);e.O.isConnected&&2==(18&e.t)&&X(e,!1)}})()}componentOnReady(){return ae(this).N}};s.A=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,ie(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),$=!1,r.length?r.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(ne,30))},re=new WeakMap,ae=e=>re.get(e),fe=(e,t)=>re.set(t.s=e,t),ue=(e,t)=>{const n={t:0,O:e,C:t,W:new Map};return n.N=new Promise(e=>n.T=e),e["s-p"]=[],e["s-rc"]=[],b(e,n,t.D),re.set(e,n)},de=(e,t)=>t in e,pe=e=>console.error(e),$e=new Map,me=e=>{const t=e.u.replace(/-/g,"_"),n=e.A,l=$e.get(n);return l?l[t]:__sc_import_brick_components(`./${n}.entry.js`).then(e=>($e.set(n,e),e[t]),pe)},be=new Map,he=[],we=[],ye=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&d.t?ke(ve):d.raf(ve))},ge=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){pe(t)}e.length=0},ve=()=>{ge(he),ge(we),(r=he.length>0)&&d.raf(ve)},ke=e=>$().then(e),je=ye(we,!0);export{f as C,S as H,e as N,$ as a,ce as b,J as c,u as d,I as g,_ as h,d as p,fe as r,a as w}