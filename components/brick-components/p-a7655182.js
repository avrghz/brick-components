/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const t=!(window.ShadyDOM&&window.ShadyDOM.inUse);let e,i;function s(i){e=(!i||!i.shimcssproperties)&&(t||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const h=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?e=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const n=e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function l(t){return function t(e,i){let s=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){s=i.substring(e.previous?e.previous.end:e.parent.start,e.start-1),s=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(s),s=s.replace(d.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let t=e.parsedSelector=e.selector=s.trim();e.atRule=0===t.indexOf(v),e.atRule?0===t.indexOf(p)?e.type=c.MEDIA_RULE:t.match(d.keyframesRule)&&(e.type=c.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):e.type=0===t.indexOf(u)?c.MIXIN_RULE:c.STYLE_RULE}let h=e.rules;if(h)for(let n,r=0,l=h.length;r<l&&(n=h[r]);r++)t(n,i);return e}(function(t){let e=new r;e.start=0,e.end=t.length;let i=e;for(let s=0,h=t.length;s<h;s++)if(t[s]===o){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new r,i.start=s+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[s]===a&&(i.end=s+1,i=i.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}const c={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},o="{",a="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",p="@media",v="@",f=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,m=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,g=/@media\s(.*)/,z=new Set;function M(t){const e=t.textContent;if(!z.has(e)){z.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function H(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function w(t,e){return t?("string"==typeof t&&(t=l(t)),e&&V(t,e),function t(e,i,s=""){let h="";if(e.cssText||e.rules){let s=e.rules;if(s&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(u)}(s))for(let e,n=0,r=s.length;n<r&&(e=s[n]);n++)h=t(e,i,h);else h=i?e.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(e.cssText),h=h.trim(),h&&(h="  "+h+"\n")}return h&&(e.selector&&(s+=e.selector+" "+o+"\n"),s+=h,e.selector&&(s+=a+"\n\n")),s}(t,n)):""}function y(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=l(t.textContent)),t.__cssRules||null}function V(t,e,i,s){if(!t)return;let h=!1,n=t.type;if(s&&n===c.MEDIA_RULE){let e=t.selector.match(g);e&&(window.matchMedia(e[1]).matches||(h=!0))}n===c.STYLE_RULE?e(t):i&&n===c.KEYFRAMES_RULE?i(t):n===c.MIXIN_RULE&&(h=!0);let r=t.rules;if(r&&!h)for(let l,c=0,o=r.length;c<o&&(l=r[c]);c++)V(l,e,i,s)}function b(t){return""!==function(t){if(void 0!==i)return i;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}(t)}function _(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function L(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const C=/;\s*/m,x=/^\s*(initial)|(inherit)\s*$/,S=/\s*!important/;class k{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let P=null;class E{constructor(){this._currentElement=null,this._measureElement=null,this._map=new k}detectMixin(t){return function(t){const e=m.test(t)||f.test(t);return m.lastIndex=0,f.lastIndex=0,e}(t)}gatherStyles(e){const i=function(e){const i=[],s=e.querySelectorAll("style");for(let h=0;h<s.length;h++){const e=s[h];H(e)?t||(M(e),e.parentNode.removeChild(e)):(i.push(e.textContent),e.parentNode.removeChild(e))}return i.join("").trim()}(e.content);if(i){const t=document.createElement("style");return t.textContent=i,e.content.insertBefore(t,e.content.firstChild),t}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=y(t);return this.transformRules(i,e),t.textContent=w(i),i}transformCustomStyle(t){let e=y(t);return V(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=w(e),e}transformRules(t,e){this._currentElement=e,V(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f,(t,i,s,h)=>this._produceCssProperties(t,i,s,h,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let s=!1;return V(e,e=>{s=s||e===t,s||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=m.exec(t);){let s=i[0],h=i[1],n=i.index,r=n+s.indexOf("@apply"),l=n+s.length,c=t.slice(0,r),o=t.slice(l),a=e?this._fallbacksFromPreviousRules(e):{};Object.assign(a,this._cssTextToMap(c));let d=this._atApplyToCssProperties(h,a);t=`${c}${d}${o}`,m.lastIndex=n+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(C,"");let i=[],s=this._map.get(t);if(s||(this._map.set(t,{}),s=this._map.get(t)),s){let h,n,r;this._currentElement&&(s.dependants[this._currentElement]=!0);const l=s.properties;for(h in l)r=e&&e[h],n=[h,": var(",t,"_-_",h],r&&n.push(",",r.replace(S,"")),n.push(")"),S.test(l[h])&&n.push(" !important"),i.push(n.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=x.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,s,h=t.split(";"),n={};for(let r,l,c=0;c<h.length;c++)r=h[c],r&&(l=r.split(":"),l.length>1&&(i=l[0].trim(),s=l.slice(1).join(":"),e&&(s=this._replaceInitialOrInherit(i,s)),n[i]=s));return n}_invalidateMixinEntry(t){if(P)for(let e in t.dependants)e!==this._currentElement&&P(e)}_produceCssProperties(t,e,i,s,h){if(i&&function t(e,i){let s=e.indexOf("var(");if(-1===s)return i(e,"","","");let h=function(t,e){let i=0;for(let s=e,h=t.length;s<h;s++)if("("===t[s])i++;else if(")"===t[s]&&0==--i)return s;return-1}(e,s+3),n=e.substring(s+4,h),r=e.substring(0,s),l=t(e.substring(h+1),i),c=n.indexOf(",");return-1===c?i(r,n.trim(),"",l):i(r,n.substring(0,c).trim(),n.substring(c+1).trim(),l)}(i,(t,e)=>{e&&this._map.get(e)&&(s=`@apply ${e};`)}),!s)return t;let n=this._consumeCssProperties(""+s,h),r=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(n,!0),c=l,o=this._map.get(e),a=o&&o.properties;a?c=Object.assign(Object.create(a),l):this._map.set(e,c);let d,u,p=[],v=!1;for(d in c)u=l[d],void 0===u&&(u="initial"),a&&!(d in a)&&(v=!0),p.push(`${e}_-_${d}: ${u}`);return v&&this._invalidateMixinEntry(o),o&&(o.properties=c),i&&(r=`${t};${r}`),`${r}${p.join("; ")};`}}E.prototype.detectMixin=E.prototype.detectMixin,E.prototype.transformStyle=E.prototype.transformStyle,E.prototype.transformCustomStyle=E.prototype.transformCustomStyle,E.prototype.transformRules=E.prototype.transformRules,E.prototype.transformRule=E.prototype.transformRule,E.prototype.transformTemplate=E.prototype.transformTemplate,E.prototype._separator="_-_",Object.defineProperty(E.prototype,"invalidCallback",{get:()=>P,set(t){P=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const A={},O="_applyShimCurrentVersion",T="_applyShimNextVersion",N=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function j(t){let e=A[t];e&&function(t){t[O]=t[O]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[T]=(t[T]||0)+1}(e)}function I(t){return t[O]===t[T]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let $,D=null,B=window.HTMLImports&&window.HTMLImports.whenReady||null;function F(t){requestAnimationFrame((function(){B?B(t):(D||(D=new Promise(t=>{$=t}),"complete"===document.readyState?$():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&$()})),D.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const R="__shadyCSSCachedStyle";let J=null,q=null;class U{constructor(){this.customStyles=[],this.enqueued=!1,F(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&q&&(this.enqueued=!0,F(q))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[R])return t[R];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[R])continue;const s=this.getStyleForCustomStyle(i);if(s){const t=s.__appliedElement||s;J&&J(t),i[R]=t}}return t}}U.prototype.addCustomStyle=U.prototype.addCustomStyle,U.prototype.getStyleForCustomStyle=U.prototype.getStyleForCustomStyle,U.prototype.processStyles=U.prototype.processStyles,Object.defineProperties(U.prototype,{transformCallback:{get:()=>J,set(t){J=t}},validateCallback:{get:()=>q,set(t){let e=!1;q||(e=!0),q=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Y=new E;class Z{constructor(){this.customStyleInterface=null,Y.invalidCallback=j}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Y.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),b(t))return;A[e]=t;let i=Y.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=this.customStyleInterface.getStyleForCustomStyle(t[e]);i&&Y.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&_(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",s="";return e?e.indexOf("-")>-1?i=e:(s=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,s=t.extends),{is:i,typeExtension:s}}(t),i=A[e];if((!i||!b(i))&&i&&!I(i)){(function(t){return!I(t)&&t._applyShimValidatingVersion===t[T]})(i)||(this.prepareTemplate(i,e),function(t){t._applyShimValidatingVersion=t[T],t._validating||(t._validating=!0,N.then((function(){t[O]=t[T],t._validating=!1})))}(i));let s=t.shadowRoot;if(s){let t=s.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=w(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Z;let s=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,s){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(t,e)=>L(t,e),flushCustomStyles(){e.flushCustomStyles()},nativeCss:n,nativeShadow:t,cssBuild:i,disableRuntime:h},s&&(window.ShadyCSS.CustomStyleInterface=s)}window.ShadyCSS.ApplyShim=Y,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let G,K,W=/(url\()([^)]*)(\))/g,X=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Q(t,e){if(t&&X.test(t))return t;if("//"===t)return t;if(void 0===G){G=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",G="http://a/c%20d"===t.href}catch(i){}}if(e||(e=document.baseURI||window.location.href),G)try{return new URL(t,e).href}catch(i){return t}return K||(K=document.implementation.createHTMLDocument("temp"),K.base=K.createElement("base"),K.head.appendChild(K.base),K.anchor=K.createElement("a"),K.body.appendChild(K.anchor)),K.base.href=e,K.anchor.href=t,K.anchor.href||t}function tt(t,e){return t.replace(W,(function(t,i,s,h){return i+"'"+Q(s.replace(/["']/g,""),e)+"'"+h}))}function et(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const it=!window.ShadyDOM||!window.ShadyDOM.inUse,st=it&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let ht=window.Polymer&&window.Polymer.rootPath||et(document.baseURI||window.location.href),nt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,rt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,lt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ct=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ot=window.Polymer&&window.Polymer.legacyOptimizations||!1,at=window.Polymer&&window.Polymer.legacyWarnings||!1,dt=window.Polymer&&window.Polymer.syncInitialRender||!1,ut=window.Polymer&&window.Polymer.legacyUndefined||!1,pt=window.Polymer&&window.Polymer.orderedComputed||!1,vt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ft=window.Polymer&&window.Polymer.fastDomIf||!1,mt=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,gt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,zt=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Mt=0;const Ht=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Mt++;return function(s){let h=s.__mixinSet;if(h&&h[i])return s;let n=e,r=n.get(s);if(!r){r=t(s),n.set(s,r);let e=Object.create(r.__mixinSet||h||null);e[i]=!0,r.__mixinSet=e}return r}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let wt={},yt={};function Vt(t,e){wt[t]=yt[t.toLowerCase()]=e}function bt(t){return wt[t]||yt[t.toLowerCase()]}class _t extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=bt(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,s){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Q(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=et(e)}return this.__assetpath}register(t){if(t=t||this.id){if(lt&&void 0!==bt(t))throw Vt(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Vt(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}function Lt(t){return _t.import(t)}function Ct(t){const e=tt((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function xt(t){const e=t.trim().split(/\s+/),i=[];for(let s=0;s<e.length;s++)i.push(...St(e[s]));return i}function St(t){const e=Lt(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Pt(e));const i=e.querySelector("template");i&&t.push(...kt(i,e.assetpath)),e._styles=t}return e._styles}function kt(t,e){if(!t._styles){const i=[],s=t.content.querySelectorAll("style");for(let t=0;t<s.length;t++){let h=s[t],n=h.getAttribute("include");n&&i.push(...xt(n).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(h.textContent=tt(h.textContent,e)),i.push(h)}t._styles=i}return t._styles}function Pt(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let s=0;s<i.length;s++){let t=i[s];if(t.import){const i=t.import,s=t.hasAttribute("shady-unscoped");if(s&&!i._unscopedStyle){const t=Ct(i);t.setAttribute("shady-unscoped",""),i._unscopedStyle=t}else i._style||(i._style=Ct(i));e.push(s?i._unscopedStyle:i._style)}}return e}function Et(t){let e=Lt(t);if(e&&void 0===e._cssText){let t=function(t){let e="",i=Pt(t);for(let s=0;s<i.length;s++)e+=i[s].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const s=kt(t,e);for(let h=0;h<s.length;h++){let t=s[h];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}_t.prototype.modules=wt,customElements.define("dom-module",_t);const At=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ot(t){return t.indexOf(".")>=0}function Tt(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Nt(t,e){return 0===t.indexOf(e+".")}function jt(t,e){return 0===e.indexOf(t+".")}function It(t,e,i){return e+i.slice(t.length)}function $t(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let s=t[i].toString().split(".");for(let t=0;t<s.length;t++)e.push(s[t])}return e.join(".")}return t}function Dt(t){return Array.isArray(t)?$t(t).split("."):t.toString().split(".")}function Bt(t,e,i){let s=t,h=Dt(e);for(let n=0;n<h.length;n++){if(!s)return;s=s[h[n]]}return i&&(i.path=h.join(".")),s}function Ft(t,e,i){let s=t,h=Dt(e),n=h[h.length-1];if(h.length>1){for(let t=0;t<h.length-1;t++)if(s=s[h[t]],!s)return;s[n]=i}else s[e]=i;return h.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rt={},Jt=/-[a-z]/g,qt=/([A-Z])/g;function Ut(t){return Rt[t]||(Rt[t]=t.indexOf("-")<0?t:t.replace(Jt,t=>t[1].toUpperCase()))}function Yt(t){return Rt[t]||(Rt[t]=t.replace(qt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zt=0,Gt=0,Kt=[],Wt=0,Xt=!1,Qt=document.createTextNode("");new window.MutationObserver((function(){Xt=!1;const t=Kt.length;for(let i=0;i<t;i++){let t=Kt[i];if(t)try{t()}catch(e){setTimeout(()=>{throw e})}}Kt.splice(0,t),Gt+=t})).observe(Qt,{characterData:!0});const te={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},ee={run:t=>(Xt||(Xt=!0,Qt.textContent=Wt++),Kt.push(t),Zt++),cancel(t){const e=t-Gt;if(e>=0){if(!Kt[e])throw new Error("invalid async handle: "+t);Kt[e]=null}}},ie=ee,se=Ht(t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let s=this.__data[t],h=this._shouldPropertyChange(t,e,s);return h&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),h}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ie.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,s){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,s)}_attributeToProperty(t,e,i){if(!this.__serializing){const s=this.__dataAttributes,h=s&&s[t]||t;this[h]=this._deserializeValue(e,i||this.constructor.typeForProperty(h))}}_propertyToAttribute(t,e,i){this.__serializing=!0,this._valueToNodeAttribute(this,i=arguments.length<3?this[t]:i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const s=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=At(t)),void 0===s?t.removeAttribute(i):t.setAttribute(i,s)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),he={};let ne=HTMLElement.prototype;for(;ne;){let t=Object.getOwnPropertyNames(ne);for(let e=0;e<t.length;e++)he[t[e]]=!0;ne=Object.getPrototypeOf(ne)}const re=Ht(t=>{const e=se(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Ut(t[e]))}static attributeNameForProperty(t){return Yt(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(e){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(s){i=t}break;case Array:try{i=JSON.parse(t)}catch(s){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!he[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),le={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ce=!1,oe=!1;function ae(t){let e=t.getAttribute("is");if(e&&le[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function de(t,e){let i=e.parentInfo&&de(t,e.parentInfo);if(!i)return t;for(let s=i.firstChild,h=0;s;s=s.nextSibling)if(e.parentIndex===h++)return s}function ue(t,e,i,s){s.id&&(e[s.id]=i)}function pe(t,e,i){if(i.events&&i.events.length)for(let s,h=0,n=i.events;h<n.length&&(s=n[h]);h++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function ve(t,e,i,s){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=s)}const fe=Ht(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let s=!1,h=t;return"template"!=h.localName||h.hasAttribute("preserve-content")?"slot"===h.localName&&(e.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(h,e,i)||s,function(t){(function(){if(!ce){ce=!0;const t=document.createElement("textarea");t.placeholder="a",oe=t.placeholder===t.textContent}return oe})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}(h),h.firstChild&&this._parseTemplateChildNodes(h,e,i),h.hasAttributes&&h.hasAttributes()&&(s=this._parseTemplateNodeAttributes(h,e,i)||s),s||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let s,h=t.firstChild,n=0;h;h=s){if("template"==h.localName&&(h=ae(h)),s=h.nextSibling,h.nodeType===Node.TEXT_NODE){let i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)h.textContent+=i.textContent,s=i.nextSibling,t.removeChild(i),i=s;if(e.stripWhiteSpace&&!h.textContent.trim()){t.removeChild(h);continue}}let r={parentIndex:n,parentInfo:i};this._parseTemplateNode(h,e,r)&&(r.infoIndex=e.nodeInfoList.push(r)-1),h.parentNode&&n++}}static _parseTemplateNestedTemplate(t,e,i){let s=t,h=this._parseTemplate(s,e);return(h.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),i.templateInfo=h,!0}static _parseTemplateNodeAttributes(t,e,i){let s=!1,h=Array.from(t.attributes);for(let n,r=h.length-1;n=h[r];r--)s=this._parseTemplateNodeAttribute(t,e,i,n.name,n.value)||s;return s}static _parseTemplateNodeAttribute(t,e,i,s,h){return"on-"===s.slice(0,3)?(t.removeAttribute(s),i.events=i.events||[],i.events.push({name:s.slice(3),value:h}),!0):"id"===s&&(i.id=h,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,s=document.importNode(e.content||t.content,!0);s.__noInsertionPoint=!e.hasInsertionPoint;let h=s.nodeList=new Array(i.length);s.$={};for(let n,r=0,l=i.length;r<l&&(n=i[r]);r++){let t=h[r]=de(s,n);ue(0,s.$,t,n),ve(0,t,n,e),pe(this,t,n)}return s=s,s}_addMethodEventListenerToNode(t,e,i,s){let h=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(s=s||t,0,i);return this._addEventListenerToNode(t,e,h),h}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let me=0;const ge=[],ze={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Me=/[A-Z]/;function He(t,e,i){let s=t[e];if(s){if(!t.hasOwnProperty(e)&&(s=t[e]=Object.create(t[e]),i))for(let h in s){let t=s[h],e=s[h]=Array(t.length);for(let i=0;i<t.length;i++)e[i]=t[i]}}else s=t[e]={};return s}function we(t,e,i,s,h,n){if(e){let r=!1;const l=me++;for(let c in i){let o=e[h?Tt(c):c];if(o)for(let e,a=0,d=o.length;a<d&&(e=o[a]);a++)e.info&&e.info.lastRun===l||h&&!Ve(c,e.trigger)||(e.info&&(e.info.lastRun=l),e.fn(t,c,i,s,e.info,h,n),r=!0)}return r}return!1}function ye(t,e,i,s,h,n,r,l){let c=!1,o=e[r?Tt(s):s];if(o)for(let a,d=0,u=o.length;d<u&&(a=o[d]);d++)a.info&&a.info.lastRun===i||r&&!Ve(s,a.trigger)||(a.info&&(a.info.lastRun=i),a.fn(t,s,h,n,a.info,r,l),c=!0);return c}function Ve(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!Nt(i,t))||!(!e.wildcard||!jt(i,t))}return!0}function be(t,e,i,s,h){let n="string"==typeof h.method?t[h.method]:h.method,r=h.property;n?n.call(t,t.__data[r],s[r]):h.dynamicFn||console.warn("observer method `"+h.method+"` not defined")}function _e(t,e,i){let s=Tt(e);return s!==e&&(Le(t,Yt(s)+"-changed",i[e],e),!0)}function Le(t,e,i,s){let h={value:i,queueProperty:!0};s&&(h.path=s),At(t).dispatchEvent(new CustomEvent(e,{detail:h}))}function Ce(t,e,i,s,h,n){let r=(n?Tt(e):e)!=e?e:null,l=r?Bt(t,r):t.__data[e];r&&void 0===l&&(l=i[e]),Le(t,h.eventName,l,r)}function xe(t,e,i,s,h){let n=t.__data[e];nt&&(n=nt(n,h.attrName,"attribute",t)),t._propertyToAttribute(e,h.attrName,n)}const Se=(t,e,i)=>{let s=0,h=e.length-1,n=-1;for(;s<=h;){const r=s+h>>1,l=i.get(e[r].methodInfo)-i.get(t.methodInfo);if(l<0)s=r+1;else{if(!(l>0)){n=r;break}h=r-1}}n<0&&(n=h+1),e.splice(n,0,t)},ke=(t,e,i,s,h)=>{const n=e[h?Tt(t):t];if(n)for(let r=0;r<n.length;r++){const e=n[r];e.info.lastRun===me||h&&!Ve(t,e.trigger)||(e.info.lastRun=me,Se(e.info,i,s))}};function Pe(t,e,i,s,h){let n=Ie(t,e,i,0,h);if(n===ge)return!1;let r=h.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[r]?t._setPendingProperty(r,n,!0):(t[r]=n,!1)}function Ee(t,e,i,s,h,n,r){i.bindings=i.bindings||[];let l={kind:s,target:h,parts:n,literal:r,isCompound:1!==n.length};if(i.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Yt(h)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let o=0;o<l.parts.length;o++){let i=l.parts[o];i.compoundIndex=o,Ae(t,e,l,i,c)}}function Ae(t,e,i,s,h){if(!s.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let n=s.dependencies,r={index:h,binding:i,part:s,evaluator:t};for(let i=0;i<n.length;i++){let s=n[i];"string"==typeof s&&(s=Re(s),s.wildcard=!0),t._addTemplatePropertyEffect(e,s.rootProperty,{fn:Oe,info:r,trigger:s})}}}function Oe(t,e,i,s,h,n,r){let l=r[h.index],c=h.binding,o=h.part;if(n&&o.source&&e.length>o.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let s=i[e];e=It(o.source,c.target,e),l._setPendingPropertyOrPath(e,s,!1,!0)&&t._enqueueClient(l)}else{let r=h.evaluator._evaluateBinding(t,o,e,i,s,n);r!==ge&&function(t,e,i,s,h){if(h=function(t,e,i,s){if(i.isCompound){let h=t.__dataCompoundStorage[i.target];h[s.compoundIndex]=e,e=h.join("")}return"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,h,i,s),nt&&(h=nt(h,i.target,i.kind,e)),"attribute"==i.kind)t._valueToNodeAttribute(e,h,i.target);else{let s=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?e[ze.READ_ONLY]&&e[ze.READ_ONLY][s]||e._setPendingProperty(s,h)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,h)}}(t,l,c,o,r)}}function Te(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,h=new Array(s.length);for(let t=0;t<s.length;t++)h[t]=s[t].literal;let n=e.target;i[n]=h,e.literal&&"property"==e.kind&&("className"===n&&(t=At(t)),t[n]=e.literal)}}function Ne(t,e,i){if(i.listenerEvent){let s=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,s,h){let n,r=t.detail,l=r&&r.path;l?(s=It(i,s,l),n=r&&r.value):n=t.currentTarget[i],n=h?!n:n,e[ze.READ_ONLY]&&e[ze.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,n,!0,Boolean(l))||r&&r.queueProperty||e._invalidateProperties()}(t,e,i.target,s.source,s.negate)}))}}function je(t,e,i,s,h,n){let r={methodName:e.methodName,args:e.args,methodInfo:h,dynamicFn:n=e.static||n&&("object"!=typeof n||n[e.methodName])};for(let l,c=0;c<e.args.length&&(l=e.args[c]);c++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:s,info:r,trigger:l});return n&&t._addPropertyEffect(e.methodName,i,{fn:s,info:r}),r}function Ie(t,e,i,s,h){let n=t._methodHost||t,r=n[h.methodName];if(r){let s=t._marshalArgs(h.args,e,i);return s===ge?ge:r.apply(n,s)}h.dynamicFn||console.warn("method `"+h.methodName+"` not defined")}const $e=[],De=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Be(t){let e="";for(let i=0;i<t.length;i++)e+=t[i].literal||"";return e}function Fe(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:$e};return e[2].trim()?function(t,e){return e.args=t.map((function(t){let i=Re(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}function Re(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},s=e[0];switch("-"===s&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Tt(e),i.structured=Ot(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function Je(t,e,i){let s=Bt(t,i);return void 0===s&&(s=e[i]),s}function qe(t,e,i,s){const h={indexSplices:s};ut&&!t._overrideLegacyUndefined&&(e.splices=h),t.notifyPath(i+".splices",h),t.notifyPath(i+".length",e.length),ut&&!t._overrideLegacyUndefined&&(h.indexSplices=[])}function Ue(t,e,i,s,h,n){qe(t,e,i,[{index:s,addedCount:h,removed:n,object:e,type:"splice"}])}const Ye=Ht(t=>{const e=fe(re(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0}get PROPERTY_EFFECT_TYPES(){return ze}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ze.length){let t=Ze[Ze.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[ze.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==ze.READ_ONLY);let s=He(this,e,!0)[t];s||(s=this[e][t]=[]),s.push(i)}_removePropertyEffect(t,e,i){let s=He(this,e,!0)[t],h=s.indexOf(i);h>=0&&s.splice(h,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,ze.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,ze.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,ze.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,ze.COMPUTE)}_setPendingPropertyOrPath(t,e,i,s){if(s||Tt(Array.isArray(t)?t[0]:t)!==t){if(!s){let i=Bt(this,t);if(!(t=Ft(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let s=t.__dataLinkedPaths;if(s){let h;for(let n in s){let r=s[n];jt(n,e)?(h=It(n,r,e),t._setPendingPropertyOrPath(h,i,!0,!0)):jt(r,e)&&(h=It(r,n,e),t._setPendingPropertyOrPath(h,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=At(t)),t[e]=i)}_setPendingProperty(t,e,i){let s=this.__dataHasPaths&&Ot(t);return!!this._shouldPropertyChange(t,e,(s?this.__dataTemp:this.__data)[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),s?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(s||this[ze.NOTIFY]&&this[ze.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[ze.READ_ONLY]&&this[ze.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let s,h=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,i,s){let h=t[ze.COMPUTE];if(h)if(pt){me++;const n=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[ze.COMPUTE];let s,{counts:h,ready:n,total:r}=function(t){const e=t.__computeInfo,i={},s=t[ze.COMPUTE],h=[];let n=0;for(let r in e){const t=e[r];n+=i[r]=t.args.filter(t=>!t.literal).length+(t.dynamicFn?1:0)}for(let r in s)e[r]||h.push(r);return{counts:i,ready:h,total:n}}(t);for(;s=n.shift();){e.set(s,e.size);const t=i[s];t&&t.forEach(t=>{const e=t.info.methodInfo;--r,0==--h[e]&&n.push(e)})}0!==r&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}(t),r=[];for(let t in e)ke(t,h,r,n,s);let l;for(;l=r.shift();)Pe(t,"",e,i,l)&&ke(l.methodInfo,h,r,n,s);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let n=e;for(;we(t,h,n,i,s);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),n=t.__dataPending,t.__dataPending=null}}(this,e,i,h),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,h),this._flushClients(),we(this,this[ze.REFLECT],e,i,h),we(this,this[ze.OBSERVE],e,i,h),s&&function(t,e,i,s,h){let n,r,l=t[ze.NOTIFY],c=me++;for(let o in e)e[o]&&(l&&ye(t,l,c,o,i,s,h)||h&&_e(t,o,i))&&(n=!0);n&&(r=t.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,s,e,i,h),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[ze.PROPAGATE]&&we(this,this[ze.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,s){const h=(e,s)=>{we(this,t.propertyEffects,e,i,s,t.nodeList);for(let h=t.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,e,i,s)};t.runEffects?t.runEffects(h,e,s):h(e,s)}linkPaths(t,e){t=$t(t),e=$t(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=$t(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};qe(this,Bt(this,t,i),i.path,e)}get(t,e){return Bt(e||this,t)}set(t,e,i){i?Ft(i,t,e):this[ze.READ_ONLY]&&this[ze.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},s=Bt(this,t,i),h=s.length,n=s.push(...e);return e.length&&Ue(this,s,i.path,h,e.length,[]),n}pop(t){let e={path:""},i=Bt(this,t,e),s=Boolean(i.length),h=i.pop();return s&&Ue(this,i,e.path,i.length,0,[h]),h}splice(t,e,i,...s){let h,n={path:""},r=Bt(this,t,n);return e<0?e=r.length-Math.floor(-e):e&&(e=Math.floor(e)),h=2===arguments.length?r.splice(e):r.splice(e,i,...s),(s.length||h.length)&&Ue(this,r,n.path,e,s.length,h),h}shift(t){let e={path:""},i=Bt(this,t,e),s=Boolean(i.length),h=i.shift();return s&&Ue(this,i,e.path,0,0,[h]),h}unshift(t,...e){let i={path:""},s=Bt(this,t,i),h=s.unshift(...e);return e.length&&Ue(this,s,i.path,0,e.length,[]),h}notifyPath(t,e){let i;if(1==arguments.length){let s={path:""};e=Bt(this,t,s),i=s.path}else i=Array.isArray(t)?$t(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,ze.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let s={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,ze.OBSERVE,{fn:be,info:s,trigger:{name:t}}),i&&this._addPropertyEffect(e,ze.OBSERVE,{fn:be,info:s,trigger:{name:e}})}_createMethodObserver(t,e){let i=Fe(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");je(this,i,ze.OBSERVE,Ie,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,ze.NOTIFY,{fn:Ce,info:{eventName:Yt(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,ze.REFLECT,{fn:xe,info:{attrName:e}})}_createComputedProperty(t,e,i){let s=Fe(e);if(!s)throw new Error("Malformed computed expression '"+e+"'");const h=je(this,s,ze.COMPUTE,Pe,t,i);He(this,"__computeInfo")[t]=h}_marshalArgs(t,e,i){const s=this.__data,h=[];for(let n=0,r=t.length;n<r;n++){let{name:r,structured:l,wildcard:c,value:o,literal:a}=t[n];if(!a)if(c){const t=jt(r,e),h=Je(s,i,t?e:r);o={path:t?e:r,value:h,base:t?Bt(s,r):h}}else o=l?Je(s,i,r):s[r];if(ut&&!this._overrideLegacyUndefined&&void 0===o&&t.length>1)return ge;h[n]=o}return h}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),s=this.__preBoundTemplateInfo==i;if(!s)for(let h in i.propertyEffects)this._createPropertyAccessor(h);if(e)if(i=Object.create(i),i.wasPreBound=s,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,s=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=s,s?s.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let s=t.propertyEffects=t.propertyEffects||{};(s[e]=s[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Ze.push(this);let i=super._stampTemplate(t,e);if(Ze.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:s}=e;if(s.length)for(let h=0;h<s.length;h++){let e=i[h],n=s[h].bindings;if(n)for(let i=0;i<n.length;i++){let s=n[i];Te(e,s),Ne(e,t,s)}e.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:s,parent:h}=e;i?i.nextSibling=s:h&&(h.firstChild=s),s?s.previousSibling=i:h&&(h.lastChild=i),e.nextSibling=e.previousSibling=null;let n=e.childNodes;for(let r=0;r<n.length;r++){let t=n[r];At(At(t).parentNode).removeChild(t)}}static _parseTemplateNode(t,i,s){let h=e._parseTemplateNode.call(this,t,i,s);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=Be(e)||" ",Ee(this,i,s,"text","textContent",e),h=!0)}return h}static _parseTemplateNodeAttribute(t,i,s,h,n){let r=this._parseBindings(n,i);if(r){let e=h,n="property";Me.test(h)?n="attribute":"$"==h[h.length-1]&&(h=h.slice(0,-1),n="attribute");let l=Be(r);return l&&"attribute"==n&&("class"==h&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(h)),t.setAttribute(h,l)),"attribute"==n&&"disable-upgrade$"==e&&t.setAttribute(h,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===n&&(h=Ut(h)),Ee(this,i,s,n,h,r,l),!0}return e._parseTemplateNodeAttribute.call(this,t,i,s,h,n)}static _parseTemplateNestedTemplate(t,i,s){let h=e._parseTemplateNestedTemplate.call(this,t,i,s);const n=t.parentNode,r=s.templateInfo,l="dom-if"===n.localName;vt&&(l||"dom-repeat"===n.localName)&&(n.removeChild(t),(s=s.parentInfo).templateInfo=r,s.noted=!0,h=!1);let c=r.hostProps;if(ft&&l)c&&(i.hostProps=Object.assign(i.hostProps||{},c),vt||(s.parentInfo.noted=!0));else{let t="{";for(let e in c)Ee(this,i,s,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}return h}static _parseBindings(t,e){let i,s=[],h=0;for(;null!==(i=De.exec(t));){i.index>h&&s.push({literal:t.slice(h,i.index)});let n=i[1][0],r=Boolean(i[2]),l=i[3].trim(),c=!1,o="",a=-1;"{"==n&&(a=l.indexOf("::"))>0&&(o=l.substring(a+2),l=l.substring(0,a),c=!0);let d=Fe(l),u=[];if(d){let{args:t,methodName:i}=d;for(let e=0;e<t.length;e++){let i=t[e];i.literal||u.push(i)}let s=e.dynamicFns;(s&&s[i]||d.static)&&(u.push(i),d.dynamicFn=!0)}else u.push(l);s.push({source:l,mode:n,negate:r,customEvent:c,signature:d,dependencies:u,event:o}),h=De.lastIndex}if(h&&h<t.length){let e=t.substring(h);e&&s.push({literal:e})}return s.length?s:null}static _evaluateBinding(t,e,i,s,h,n){let r;return r=e.signature?Ie(t,i,s,0,e.signature):i!=e.source?Bt(t,e.source):n&&Ot(i)?Bt(t,i):t.__data[i],e.negate&&(r=!r),r}}}),Ze=[],Ge=Ht(t=>{const e=se(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof h?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const s=t[i];e[i]="function"==typeof s?{type:s}:s}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class h extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return h}),Ke=window.ShadyCSS&&window.ShadyCSS.cssBuild,We=Ht(t=>{const e=Ge(Ye(t));function i(t,e,i,s){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,s)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,s[i.observer]),t._addPropertyToAttributeMap(e)}return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):ot||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let s=0;s<t.length;s++)i._createMethodObserver(t[s],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!lt||ct)&&(e=_t.import(t,"template"),lt&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=et(t.url);else{const t=_t.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super()}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ht,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let s=e[i];"value"in s&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=s)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return tt(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;(function(t,e,i,s){if(!Ke){const h=e.content.querySelectorAll("style"),n=kt(e),r=function(t){let e=Lt(t);return e?Pt(e):[]}(i),l=e.content.firstElementChild;for(let i=0;i<r.length;i++){let h=r[i];h.textContent=t._processStyleText(h.textContent,s),e.content.insertBefore(h,l)}let c=0;for(let e=0;e<n.length;e++){let i=n[e],r=h[c];r!==i?(i=i.cloneNode(!0),r.parentNode.insertBefore(i,r)):c++,i.textContent=t._processStyleText(i.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),zt&&Ke&&st){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}})(this,e,t,i?Q(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=At(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),dt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Q(this.importPath)),Q(t,e)}static _parseTemplateContent(t,i,s){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,s)}static _addTemplatePropertyEffect(t,i,s){return!at||i in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,s)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Xe{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Qe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Qe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof Xe?t._cancelAsync():t=new Xe,t.setConfig(e,i),t}}let Qe=new Set;const ti=function(t){Qe.add(t)},ei=function(){const t=Boolean(Qe.size);return Qe.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ii="string"==typeof document.head.style.touchAction,si="__polymerGesturesHandled",hi="__polymerGesturesTouchAction",ni=["mousedown","mousemove","mouseup","click"],ri=[0,1,4,2],li=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ci(t){return ni.indexOf(t)>-1}let oi=!1;function ai(t){if(!ci(t)&&"touchend"!==t)return ii&&oi&&rt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){oi=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let di=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const ui=[],pi={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},vi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function fi(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let s=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<s.length;t++)e.push(s[t])}}return e}let mi=function(t){let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(t[si]={skip:!0},"click"===t.type)){let e=!1,i=yi(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)ui.push(i[t]);else if(pi[i[t].localName]){let s=fi(i[t]);for(let t=0;t<s.length;t++)e=e||ui.indexOf(s[t])>-1}if(i[t]===Mi.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function gi(t){let e=di?["click"]:ni;for(let i,s=0;s<e.length;s++)i=e[s],t?(ui.length=0,document.addEventListener(i,mi,!0)):document.removeEventListener(i,mi,!0)}function zi(t){let e=t.type;if(!ci(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!li&&(e=ri[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let Mi={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Hi(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function wi(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){Mi.mouse.mouseIgnoreJob||gi(!0),Mi.mouse.target=yi(t)[0],Mi.mouse.mouseIgnoreJob=Xe.debounce(Mi.mouse.mouseIgnoreJob,te.after(2500),(function(){gi(),Mi.mouse.target=null,Mi.mouse.mouseIgnoreJob=null}))}),!!oi&&{passive:!0});const yi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Vi={},bi=[];function _i(t){const e=yi(t);return e.length>0?e[0]:t.target}function Li(t){let e,i=t.type,s=t.currentTarget.__polymerGestures;if(!s)return;let h=s[i];if(h){if(!t[si]&&(t[si]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(Mi.touch.id=e.identifier),Mi.touch.id!==e.identifier)return;ii||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)Mi.touch.x=e.clientX,Mi.touch.y=e.clientY,Mi.touch.scrollDecided=!1;else if("touchmove"===i){if(Mi.touch.scrollDecided)return;Mi.touch.scrollDecided=!0;let i=function(t){let e="auto",i=yi(t);for(let s,h=0;h<i.length;h++)if(s=i[h],s[hi]){e=s[hi];break}return e}(t),s=!1,h=Math.abs(Mi.touch.x-e.clientX),n=Math.abs(Mi.touch.y-e.clientY);t.cancelable&&("none"===i?s=!0:"pan-x"===i?s=n>h:"pan-y"===i&&(s=h>n)),s?t.preventDefault():ki("track")}}(t)}if(e=t[si],!e.skip){for(let i,s=0;s<bi.length;s++)i=bi[s],h[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let s,n=0;n<bi.length;n++)s=bi[n],h[s.name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function Ci(t){bi.push(t);for(let e=0;e<t.emits.length;e++)Vi[t.emits[e]]=t}function xi(t,e){ii&&t instanceof HTMLElement&&ee.run(()=>{t.style.touchAction=e}),t[hi]=e}function Si(t,e,i){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,At(t).dispatchEvent(s),s.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function ki(t){let e=function(t){for(let e,i=0;i<bi.length;i++){e=bi[i];for(let i,s=0;s<e.emits.length;s++)if(i=e.emits[s],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Pi(t,e,i,s){e&&Si(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(t){return ki(t)}})}function Ei(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),h=Math.abs(t.y-i);return s>=5||h>=5}function Ai(t,e,i){if(!e)return;let s,h=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],r=0;h&&(s=n.x-h.x,r=n.y-h.y),Si(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:n.x-t.x,dy:n.y-t.y,ddx:s,ddy:r,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let h=s;if(s=s.shadowRoot.elementFromPoint(t,e),h===s)break;s&&(i=s)}return i}(i.clientX,i.clientY)}})}function Oi(t,e,i){let s=Math.abs(e.clientX-t.x),h=Math.abs(e.clientY-t.y),n=_i(i||e);!n||vi[n.localName]&&n.hasAttribute("disabled")||(isNaN(s)||isNaN(h)||s<=25&&h<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=_i(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),s=t.pageX,h=t.pageY;return!(s>=i.left&&s<=i.right&&h>=i.top&&h<=i.bottom)}return!1}(e))&&(t.prevent||Si(n,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Ci({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){wi(this.info)},mousedown:function(t){if(!zi(t))return;let e=_i(t),i=this;Hi(this.info,(function(t){zi(t)||(Pi("up",e,t),wi(i.info))}),(function(t){zi(t)&&Pi("up",e,t),wi(i.info)})),Pi("down",e,t)},touchstart:function(t){Pi("down",_i(t),t.changedTouches[0],t)},touchend:function(t){Pi("up",_i(t),t.changedTouches[0],t)}}),Ci({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,wi(this.info)},mousedown:function(t){if(!zi(t))return;let e=_i(t),i=this,s=function(t){let s=t.clientX,h=t.clientY;Ei(i.info,s,h)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&ki("tap"),i.info.addMove({x:s,y:h}),zi(t)||(i.info.state="end",wi(i.info)),e&&Ai(i.info,e,t),i.info.started=!0)};Hi(this.info,s,(function(t){i.info.started&&s(t),wi(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=_i(t),i=t.changedTouches[0],s=i.clientX,h=i.clientY;Ei(this.info,s,h)&&("start"===this.info.state&&ki("tap"),this.info.addMove({x:s,y:h}),Ai(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=_i(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Ai(this.info,e,i))}}),Ci({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){zi(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){zi(t)&&Oi(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Oi(this.info,t.changedTouches[0],t)}});const Ti=Ht(t=>class extends t{_addEventListenerToNode(t,e,i){(function(t,e,i){return!!Vi[e]&&(function(t,e,i){let s=Vi[e],h=s.deps,n=s.name,r=t.__polymerGestures;r||(t.__polymerGestures=r={});for(let l,c,o=0;o<h.length;o++)l=h[o],di&&ci(l)&&"click"!==l||(c=r[l],c||(r[l]=c={_count:0}),0===c._count&&t.addEventListener(l,Li,ai(l)),c[n]=(c[n]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,i),s.touchAction&&xi(t,s.touchAction)}(t,e,i),!0)})(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){(function(t,e,i){return!!Vi[e]&&(function(t,e,i){let s=Vi[e],h=s.deps,n=s.name,r=t.__polymerGestures;if(r)for(let l,c,o=0;o<h.length;o++)l=h[o],c=r[l],c&&c[n]&&(c[n]=(c[n]||1)-1,c._count=(c._count||1)-1,0===c._count&&t.removeEventListener(l,Li,ai(l)));t.removeEventListener(e,i)}(t,e,i),!0)})(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}),Ni=/:host\(:dir\((ltr|rtl)\)\)/g,ji=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Ii=/:dir\((?:ltr|rtl)\)/,$i=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Di=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Bi=null,Fi="";function Ri(){Fi=document.documentElement.getAttribute("dir")}function Ji(t){t.__autoDirOptOut||t.setAttribute("dir",Fi)}function qi(){Ri(),Fi=document.documentElement.getAttribute("dir");for(let t=0;t<Di.length;t++)Ji(Di[t])}const Ui=Ht(t=>{$i||Bi||(Ri(),Bi=new MutationObserver(qi),Bi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=re(t);class i extends e{static _processStyleText(t,i){return t=e._processStyleText.call(this,t,i),!$i&&Ii.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Ni,':host([dir="$1"])'),e=e.replace(ji,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Bi&&Bi.takeRecords().length&&qi(),Di.push(this),Ji(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=Di.indexOf(this);t>-1&&Di.splice(t,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Yi(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Zi(t,e,i){return{index:t,removed:e,addedCount:i}}function Gi(t,e){return function(t,e,i,s,h,n){let r,l=0,c=0,o=Math.min(i-e,n-h);if(0==e&&0==h&&(l=function(t,e,i){for(let s=0;s<i;s++)if(!Ki(t[s],e[s]))return s;return i}(t,s,o)),i==t.length&&n==s.length&&(c=function(t,e,i){let s=t.length,h=e.length,n=0;for(;n<i&&Ki(t[--s],e[--h]);)n++;return n}(t,s,o-l)),h+=l,n-=c,(i-=c)-(e+=l)==0&&n-h==0)return[];if(e==i){for(r=Zi(e,[],0);h<n;)r.removed.push(s[h++]);return[r]}if(h==n)return[Zi(e,[],i-e)];let a=function(t){let e=t.length-1,i=t[0].length-1,s=t[e][i],h=[];for(;e>0||i>0;){if(0==e){h.push(2),i--;continue}if(0==i){h.push(3),e--;continue}let n,r=t[e-1][i-1],l=t[e-1][i],c=t[e][i-1];n=l<c?l<r?l:r:c<r?c:r,n==r?(r==s?h.push(0):(h.push(1),s=r),e--,i--):n==l?(h.push(3),e--,s=l):(h.push(2),i--,s=c)}return h.reverse(),h}(function(t,e,i,s,h,n){let r=n-h+1,l=i-e+1,c=new Array(r);for(let o=0;o<r;o++)c[o]=new Array(l),c[o][0]=o;for(let o=0;o<l;o++)c[0][o]=o;for(let o=1;o<r;o++)for(let i=1;i<l;i++)if(Ki(t[e+i-1],s[h+o-1]))c[o][i]=c[o-1][i-1];else{let t=c[o-1][i]+1,e=c[o][i-1]+1;c[o][i]=t<e?t:e}return c}(t,e,i,s,h,n));r=void 0;let d=[],u=e,p=h;for(let v=0;v<a.length;v++)switch(a[v]){case 0:r&&(d.push(r),r=void 0),u++,p++;break;case 1:r||(r=Zi(u,[],0)),r.addedCount++,u++,r.removed.push(s[p]),p++;break;case 2:r||(r=Zi(u,[],0)),r.addedCount++,u++;break;case 3:r||(r=Zi(u,[],0)),r.removed.push(s[p]),p++}return r&&d.push(r),d}(t,0,t.length,e,0,e.length)}function Ki(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Wi(t){return"slot"===t.localName}"interactive"===document.readyState||"complete"===document.readyState?Yi():window.addEventListener("DOMContentLoaded",Yi);let Xi=class{static getFlattenedNodes(t){const e=At(t);return Wi(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>Wi(t)?At(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Wi(this._target)?this._listenSlots([this._target]):At(this._target).children&&(this._listenSlots(At(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Wi(this._target)?this._unlistenSlots([this._target]):At(this._target).children&&(this._unlistenSlots(At(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,ee.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Gi(e,this._effectiveNodes);for(let h,n=0;n<i.length&&(h=i[n]);n++)for(let e,i=0;i<h.removed.length&&(e=h.removed[i]);i++)t.removedNodes.push(e);for(let h,n=0;n<i.length&&(h=i[n]);n++)for(let i=h.index;i<h.index+h.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let s=!1;return(t.addedNodes.length||t.removedNodes.length)&&(s=!0,this.callback.call(this._target,t)),s}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Wi(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Wi(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qi=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=ei()}while(t||e)},ts=Element.prototype,es=ts.matches||ts.matchesSelector||ts.mozMatchesSelector||ts.msMatchesSelector||ts.oMatchesSelector||ts.webkitMatchesSelector,is=function(t,e){return es.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ss{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Xi(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(At(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=At(e).parentNode||At(e).host;return e===this.node}getOwnerRoot(){return At(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?At(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=At(this.node).assignedSlot;for(;e;)t.push(e),e=At(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return At(i).importNode(t,e)}getEffectiveChildNodes(){return Xi.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let s,h=0,n=e.length;h<n&&(s=e[h]);h++)s.nodeType===Node.ELEMENT_NODE&&is(s,t)&&i.push(s);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function hs(t,e){for(let i=0;i<e.length;i++){let s=e[i];Object.defineProperty(t,s,{get:function(){return this.node[s]},configurable:!0})}}class ns{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let rs=ss;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(ss.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=ss.prototype[e])}),hs(t.prototype,["classList"]),rs=t,Object.defineProperties(ns.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&ls(t).getOwnerRoot(),i=this.path;for(let s=0;s<i.length;s++){const t=i[s];if(ls(t).getOwnerRoot()===e)return t}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let s=e[i];t[s]=function(){return this.node[s].apply(this.node,arguments)}}}(ss.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),hs(ss.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let s=e[i];Object.defineProperty(t,s,{get:function(){return this.node[s]},set:function(t){this.node[s]=t},configurable:!0})}}(ss.prototype,["textContent","innerHTML","className"]);const ls=function(t){if((t=t||document)instanceof rs)return t;if(t instanceof ns)return t;let e=t.__domApi;return e||(e=t instanceof Event?new ns(t):new rs(t),t.__domApi=e),e},cs=window.ShadyDOM,os=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function as(t,e){return At(t).getRootNode()===e}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const ds=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Ht(t=>{const e=We(t);let i=ds(e);return class extends e{constructor(){super()}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,i,s){"disable-upgrade"==t?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,At(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,i,s)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});let us=window.ShadyCSS;const ps=Ht(t=>{const e=Ti(We(t)),i=Ke?e:Ui(e),s=ds(i),h={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends i{constructor(){super()}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,i){(this.__dataAttributes&&this.__dataAttributes[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,i,null)}setAttribute(t,e){if(gt&&!this._legacyForceObservedAttributes){const i=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,i,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(gt&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return gt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[]),this.__observedAttributes):s.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,i,s){e!==i&&("disable-upgrade"==t?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,At(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,i,s),this.attributeChanged(t,e,i)))}attributeChanged(t,e,i){}_initializeProperties(){if(ot&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),gt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,i=t.length;e<i;e++){const i=t[e];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let s,h=0;h<i.length&&(s=i[h]);h++){let i=Object.getOwnPropertyDescriptor(e,s);i&&Object.defineProperty(t,s,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=e,At(i.node||this).dispatchEvent(s),s}listen(t,e,i){t=t||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),h=s.get(t);h||(h={},s.set(t,h));let n=e+i;h[n]||(h[n]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let s=this.__boundListeners&&this.__boundListeners.get(t),h=e+i,n=s&&s[h];n&&(this._removeEventListenerFromNode(t,e,n),s[h]=null)}setScrollDirection(t,e){xi(e||this,h[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=At(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=ls(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return ls(this).getEffectiveChildNodes()}queryDistributedElements(t){return ls(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,s=0;i=t[s];s++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?ls(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&At(this).contains(t)&&At(this).getRootNode()===At(t).getRootNode()}isLocalDescendant(t){return this.root===At(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!cs||!os)return null;if(!cs.handlesDynamicScoping)return null;const i=os.ScopingShim;if(!i)return null;const s=i.scopeForNode(t),h=At(t).getRootNode(),n=t=>{if(!as(t,h))return;const e=Array.from(cs.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let n=0;n<e.length;n++){const t=e[n];if(!as(t,h))continue;const r=i.currentScopeForNode(t);r!==s&&(""!==r&&i.unscopeNode(t,r),i.scopeNode(t,s))}};if(n(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&n(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return us.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=Xe.debounce(this._debouncers[t],i>0?te.after(i):ee,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?te.run(t.bind(this),e):~ee.run(t.bind(this))}cancelAsync(t){t<0?ee.cancel(~t):te.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let s in e)i[s]=e[s];return i}elementMatches(t,e){return is(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(At(i).setAttribute(t,""),!0):(At(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,s){this.transform("translate3d("+t+","+e+","+i+")",s=s||this)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else if(i=Bt(this,t).indexOf(e),i>=0)return this.splice(t,i,1);return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return n.prototype.is="",n}),vs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},fs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},ms=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},fs);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function gs(t,e,i,s){!function(t,e,i){const s=t._noAccessors,h=Object.getOwnPropertyNames(t);for(let n=0;n<h.length;n++){let r=h[n];if(!(r in i))if(s)e[r]=t[r];else{let i=Object.getOwnPropertyDescriptor(t,r);i&&(i.configurable=!0,Object.defineProperty(e,r,i))}}}(e,t,s);for(let h in vs)e[h]&&(i[h]=i[h]||[],i[h].push(e[h]))}function zs(t,e){for(const i in e){const s=t[i],h=e[i];t[i]=!("value"in h)&&s&&"value"in s?Object.assign({value:s.value},h):h}}const Ms=ps(HTMLElement);const Hs=function(t){let e;return e="function"==typeof t?t:Hs.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ws(t,e,i,s,h){let n;h&&(n="object"==typeof i&&null!==i,n&&(s=t.__dataTemp[e]));let r=s!==i&&(s==s||i==i);return n&&r&&(t.__dataTemp[e]=i),r}Hs.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Ms):Ms;return i=function(t,e,i){let s;const h={};class n extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let t,e=0;e<s.length;e++)t=s[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(s)for(let t=0;t<s.length;t++)zs(e,s[t].properties);return zs(e,t.properties),e}static get observers(){let e=[];if(s)for(let t,i=0;i<s.length;i++)t=s[i],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=h.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=n.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),ot&&r(t);const e=Object.getPrototypeOf(this);let i=h.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=h.registered,i)for(let t=0;t<i.length;t++)i[t].call(e)}}_applyListeners(){super._applyListeners();const t=h.listeners;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}_ensureAttributes(){const t=h.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}ready(){super.ready();let t=h.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=h.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=h.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,i){super.attributeChanged();let s=h.attributeChanged;if(s)for(let h=0;h<s.length;h++)s[h].call(this,t,e,i)}}if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;s=function t(e,i,s){i=i||[];for(let h=e.length-1;h>=0;h--){let n=e[h];n?Array.isArray(n)?t(n,i):i.indexOf(n)<0&&(!s||s.indexOf(n)<0)&&i.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),n.prototype.behaviors=t?t.concat(i):s}const r=e=>{s&&function(t,e,i){for(let s=0;s<e.length;s++)gs(t,e[s],i,ms)}(e,s,h),gs(e,t,h,fs)};return ot||r(n.prototype),n.generatedFrom=t,n}(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};const ys=Ht(t=>class extends t{_shouldPropertyChange(t,e,i){return ws(this,t,e,i,!0)}}),Vs=Ht(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return ws(this,t,e,i,this.mutableData)}});ys._mutablePropertyChange=ws;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let bs=null;function _s(){return bs}_s.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:_s,writable:!0}});const Ls=Ye(_s),Cs=ys(Ls),xs=Ye(class{});function Ss(t,e){for(let i=0;i<e.length;i++){let s=e[i];if(Boolean(t)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)t?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(t)s.__polymerReplaced__=document.createComment("hidden-slot"),At(At(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const t=s.__polymerReplaced__;t&&At(At(t).parentNode).replaceChild(s,t)}else s.style&&(t?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=t,s._showHideChildren&&s._showHideChildren(t)}}class ks extends xs{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let s=this.root.firstChild;s;s=s.nextSibling)e.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,i)}}_showHideChildren(t){Ss(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}const Ps=ys(ks);function Es(t){let e=t.__dataHost;return e&&e._methodHost||e}function As(t,e){return function(t,i,s){e.call(t.__templatizeOwner,i.substring("_host_".length),s[i])}}function Os(t,e){return function(t,i,s){e.call(t.__templatizeOwner,t,i,s[i])}}function Ts(t,e,i){if(lt&&!Es(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let s=(e?e.constructor:ks)._parseTemplate(t),h=s.templatizeInstanceClass;h||(h=function(t,e,i){let s=i.mutableData?Ps:ks;Ts.mixin&&(s=Ts.mixin(s));let h=class extends s{};return h.prototype.__templatizeOptions=i,h.prototype._bindTemplate(t),function(t,e,i,s){let h=i.hostProps||{};for(let n in s.instanceProps){delete h[n];let e=s.notifyInstanceProp;e&&t.prototype._addPropertyEffect(n,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Os(0,e)})}if(s.forwardHostProp&&e.__dataHost)for(let n in h)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(n,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(h,t,e,i),h}(t,s,i),s.templatizeInstanceClass=h);const n=Es(t);!function(t,e,i,s){let h=i.forwardHostProp;if(h&&e.hasHostProps){const n="template"==t.localName;let r=e.templatizeTemplateClass;if(!r){if(n){let t=i.mutableData?Cs:Ls;class s extends t{}r=e.templatizeTemplateClass=s}else{const i=t.constructor;class s extends i{}r=e.templatizeTemplateClass=s}let l=e.hostProps;for(let t in l)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:As(0,h)}),r.prototype._createNotifyingProperty("_host_"+t);at&&s&&function(t,e,i){const s=i.constructor._properties,{propertyEffects:h}=t,{instanceProps:n}=e;for(let r in h)if(!(s[r]||n&&n[r])){const t=h[r];for(let e=0;e<t.length;e++){const{part:i}=t[e].info;if(!i.signature||!i.signature.static){console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,i,s)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),n)!function(t,e){bs=t,Object.setPrototypeOf(t,e.prototype),new e,bs=null}(t,r),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,r.prototype);const i=e.hostProps;for(let e in i)if(e="_host_"+e,e in t){const i=t[e];delete t[e],t.__data[e]=i}}}}(t,s,i,n);let r=class extends h{};return r.prototype._methodHost=n,r.prototype.__dataHost=t,r.prototype.__templatizeOwner=e,r.prototype.__hostProps=s.hostProps,r=r,r}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ns=!1;function js(){if(ot&&!it){if(!Ns){Ns=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Is=Ti(Vs(Ye(HTMLElement)));customElements.define("dom-bind",class extends Is{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),lt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,i,s){this.mutableData=!0}connectedCallback(){js()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){At(At(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class $s{constructor(t){this.value=t.toString()}toString(){return this.value}}const Ds=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,s)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof $s)return function(t){if(t instanceof $s)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(i)+t[s+1],t[0]),i},Bs=We(HTMLElement),Fs=Vs(Bs);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Rs extends Fs{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!mt,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),js()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=At(At(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Ts(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(t,e){let i=this.__instances;for(let s,h=0;h<i.length&&(s=i[h]);h++)s.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if((s=this.as)===(h=e)||Nt(s,h)||jt(s,h)){let s=t[this.itemsIndexAs];e==this.as&&(this.items[s]=i);let h=It(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,e);this.notifyPath(h,i)}var s,h}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=Xe.debounce(this.__renderDebouncer,e>0?te.after(e):ee,t.bind(this)),ti(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Qi()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),mt&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((e,i,s)=>this.__filterFn(t[e],i,s))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),s=Math.max(e-i,0),this.__chunkCount=s||1):(s=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+s,t)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime;this.__chunkCount=Math.round(this.__chunkCount*(this._targetFrameTime/t))||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const s=this.__itemsIdxToInstIdx={};let h;for(h=0;h<e;h++){let e=this.__instances[h],n=i[h],r=t[n];s[n]=h,e?(e._setPendingProperty(this.as,r),e._setPendingProperty(this.indexAs,h),e._setPendingProperty(this.itemsIndexAs,n),e._flushProperties()):this.__insertInstance(r,h,n)}for(let n=this.__instances.length-1;n>=h;n--)this.__detachAndRemoveInstance(n)}__detachInstance(t){let e=this.__instances[t];const i=At(e.root);for(let s=0;s<e.children.length;s++)i.appendChild(e.children[s]);return e}__attachInstance(t,e){e.insertBefore(this.__instances[t].root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let s={};return s[this.as]=t,s[this.indexAs]=e,s[this.itemsIndexAs]=i,new this.__ctor(s)}__insertInstance(t,e,i){const s=this.__stampInstance(t,e,i);let h=this.__instances[e+1],n=h?h.children[0]:this;return At(At(this).parentNode).insertBefore(s.root,n),this.__instances[e]=s,s}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),s=i.indexOf("."),h=s<0?i:i.substring(0,s);if(h==parseInt(h,10)){let t=s<0?"":i.substring(s+1);this.__handleObservedPaths(t);let n=this.__instances[this.__itemsIdxToInstIdx[h]];return n&&(n._setPendingPropertyOrPath(this.as+(t?"."+t:""),e,!1,!0),n._flushProperties()),!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=At(e).parentNode;return null}(this.template,t)}}customElements.define(Rs.is,Rs);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Js extends Bs{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Xe.debounce(this.__renderDebouncer,ee,()=>this.__render()),ti(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=At(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||At(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),js()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:At(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!At(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=At(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&At(this).previousSibling!==e[e.length-1])for(let i,s=0;s<e.length&&(i=e[s]);s++)At(t).insertBefore(i,this)}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Qi()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),mt&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const qs=ft?class extends Js{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(lt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(t,e,i)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(s.changedProps,e)),t(e,i);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:t,changedProps:{}}),i)for(const h in e){const t=Tt(h);s.changedProps[t]=this.__dataHost[t]}else Object.assign(s.changedProps,e)},this.__instance=e._stampTemplate(this.__template,i),At(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){this.__instance&&((this.__dataHost||this)._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Ss(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends Js{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Ts(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Tt(t)]=!0))}})),this.__instance=new this.__ctor,At(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=At(t[0]).parentNode;if(e){e=At(e);for(let i,s=0;s<t.length&&(i=t[s]);s++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(qs.is,qs);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Us=Ht(t=>{let e=We(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],s=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),s){let t=Gi(i,s);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=i.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let s=0;s<t.length;s++){let i=t[s];e.forEach((t,s)=>{t<i.index||e.set(s,t>=i.index+i.removed.length?t+i.addedCount-i.removed.length:-1)});for(let t=0;t<i.addedCount;t++){let s=i.index+t;e.has(this.items[s])&&e.set(this.items[s],s)}}this.__updateLinks();let i=0;e.forEach((t,s)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(s)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,s)=>{e==t++&&this.deselect(s)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(Bs);class Ys extends Us{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ys.is,Ys);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Zs=new U;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){Zs.processStyles(),_(t,e)},styleElement(t){Zs.processStyles()},styleDocument(t){Zs.processStyles(),_(document.body,t)},getComputedStyleValue:(t,e)=>L(t,e),flushCustomStyles(){},nativeCss:n,nativeShadow:t,cssBuild:i,disableRuntime:h}),window.ShadyCSS.CustomStyleInterface=Zs;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Gs=window.ShadyCSS.CustomStyleInterface;class Ks extends HTMLElement{constructor(){super(),this._style=null,Gs.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=function(t){let e=t.trim().split(/\s+/),i="";for(let s=0;s<e.length;s++)i+=Et(e[s]);return i}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ks);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ws=ps(HTMLElement).prototype,Xs=Ds`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Xs.setAttribute("style","display: none;"),document.head.appendChild(Xs.content);var Qs=document.createElement("style");Qs.textContent="[hidden] { display: none !important; }",document.head.appendChild(Qs);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class th{constructor(t){th[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return th.types[t]&&th.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=th.types[e]=th.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=th.types[this.type];return t?Object.keys(t).map((function(t){return eh[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}th[" "]=function(){},th.types={};var eh=th.types;Hs({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var s=new th({type:t,key:e});return void 0!==i&&i!==s.value?s.value=i:this.value!==s.value&&(this.value=s.value),s},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new th({type:this.type,key:t}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Hs({_template:Ds`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Ws.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&ls(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,ls(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Hs({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new th({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var s=ls(t.root||t);return s.insertBefore(i,s.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(ls(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return ls(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var s=t.cloneNode(!0),h=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=s.getAttribute("viewBox")||"0 0 "+e+" "+e,r="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&s.hasAttribute("mirror-in-rtl")&&(r+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),h.setAttribute("viewBox",n),h.setAttribute("preserveAspectRatio","xMidYMid meet"),h.setAttribute("focusable","false"),h.style.cssText=r,h.appendChild(s).removeAttribute("id"),h}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ih=Ds`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(ih.content);export{Ds as h}