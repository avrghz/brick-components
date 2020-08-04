import"./p-035efb1b.js";function t(t){var n=t.getBoundingClientRect();return{width:n.width,height:n.height,top:n.top,right:n.right,bottom:n.bottom,left:n.left,x:n.left,y:n.top}}function n(t){if("[object Window]"!==t.toString()){var n=t.ownerDocument;return n?n.defaultView:window}return t}function e(t){var e=n(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function r(t){return t instanceof n(t).Element||t instanceof Element}function o(t){return t instanceof n(t).HTMLElement||t instanceof HTMLElement}function i(t){return t?(t.nodeName||"").toLowerCase():null}function a(t){return(r(t)?t.ownerDocument:t.document).documentElement}function u(n){return t(a(n)).left+e(n).scrollLeft}function f(t){return n(t).getComputedStyle(t)}function c(t){var n=f(t);return/auto|scroll|overlay|hidden/.test(n.overflow+n.overflowY+n.overflowX)}function p(r,f,p){void 0===p&&(p=!1);var s,d,l=a(f),v=t(r),b=o(f),h={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(b||!b&&!p)&&(("body"!==i(f)||c(l))&&(h=(s=f)!==n(s)&&o(s)?{scrollLeft:(d=s).scrollLeft,scrollTop:d.scrollTop}:e(s)),o(f)?((m=t(f)).x+=f.clientLeft,m.y+=f.clientTop):l&&(m.x=u(l))),{x:v.left+h.scrollLeft-m.x,y:v.top+h.scrollTop-m.y,width:v.width,height:v.height}}function s(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function d(t){return"html"===i(t)?t:t.assignedSlot||t.parentNode||t.host||a(t)}function l(t,e){void 0===e&&(e=[]);var r=function t(n){return["html","body","#document"].indexOf(i(n))>=0?n.ownerDocument.body:o(n)&&c(n)?n:t(d(n))}(t),a="body"===i(r),u=n(r),f=a?[u].concat(u.visualViewport||[],c(r)?r:[]):r,p=e.concat(f);return a?p:p.concat(l(d(f)))}function v(t){return["table","td","th"].indexOf(i(t))>=0}function b(t){if(!o(t)||"fixed"===f(t).position)return null;var n=t.offsetParent;if(n){var e=a(n);if("body"===i(n)&&"static"===f(n).position&&"static"!==f(e).position)return e}return n}function h(t){for(var e=n(t),r=b(t);r&&v(r)&&"static"===f(r).position;)r=b(r);return r&&"body"===i(r)&&"static"===f(r).position?e:r||function(t){for(var n=d(t);o(n)&&["html","body"].indexOf(i(n))<0;){var e=f(n);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return n;n=n.parentNode}return null}(t)||e}var m="top",y="bottom",O="right",j="left",g=[m,y,O,j],w=g.reduce((function(t,n){return t.concat([n+"-start",n+"-end"])}),[]),x=[].concat(g,["auto"]).reduce((function(t,n){return t.concat([n,n+"-start",n+"-end"])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(t){return t.split("-")[0]}function P(t,n){var e=Boolean(n.getRootNode&&n.getRootNode().host);if(t.contains(n))return!0;if(e){var r=n;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(t){return Object.assign(Object.assign({},t),{},{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function E(r,i){return"viewport"===i?B(function(t){var e=n(t),r=a(t),o=e.visualViewport,i=r.clientWidth,f=r.clientHeight,c=0,p=0;return o&&(i=o.width,f=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=o.offsetLeft,p=o.offsetTop)),{width:i,height:f,x:c+u(t),y:p}}(r)):o(i)?function(n){var e=t(n);return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}(i):B(function(t){var n=a(t),r=e(t),o=t.ownerDocument.body,i=Math.max(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=Math.max(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-r.scrollLeft+u(t),s=-r.scrollTop;return"rtl"===f(o||n).direction&&(p+=Math.max(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:c,x:p,y:s}}(a(r)))}function q(t){return t.split("-")[1]}function L(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function A(t){var n,e=t.reference,r=t.element,o=t.placement,i=o?k(o):null,a=o?q(o):null,u=e.x+e.width/2-r.width/2,f=e.y+e.height/2-r.height/2;switch(i){case m:n={x:u,y:e.y-r.height};break;case y:n={x:u,y:e.y+e.height};break;case O:n={x:e.x+e.width,y:f};break;case j:n={x:e.x-r.width,y:f};break;default:n={x:e.x,y:e.y}}var c=i?L(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case"start":n[c]=Math.floor(n[c])-Math.floor(e[p]/2-r[p]/2);break;case"end":n[c]=Math.floor(n[c])+Math.ceil(e[p]/2-r[p]/2)}}return n}function S(t){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),t)}function C(t,n){return n.reduce((function(n,e){return n[e]=t,n}),{})}function I(n,e){void 0===e&&(e={});var u=e.placement,c=void 0===u?n.placement:u,p=e.boundary,s=void 0===p?"clippingParents":p,v=e.rootBoundary,b=void 0===v?"viewport":v,j=e.elementContext,w=void 0===j?"popper":j,x=e.altBoundary,M=void 0!==x&&x,k=e.padding,q=void 0===k?0:k,L=S("number"!=typeof q?q:C(q,g)),I=n.elements.reference,R=n.rects.popper,T=n.elements[M?"popper"===w?"reference":"popper":w],W=function(t,n,e){var a="clippingParents"===n?function(t){var n=l(d(t)),e=["absolute","fixed"].indexOf(f(t).position)>=0&&o(t)?h(t):t;return r(e)?n.filter((function(t){return r(t)&&P(t,e)&&"body"!==i(t)})):[]}(t):[].concat(n),u=[].concat(a,[e]),c=u.reduce((function(n,e){var r=E(t,e);return n.top=Math.max(r.top,n.top),n.right=Math.min(r.right,n.right),n.bottom=Math.min(r.bottom,n.bottom),n.left=Math.max(r.left,n.left),n}),E(t,u[0]));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}(r(T)?T:T.contextElement||a(n.elements.popper),s,b),D=t(I),z=A({reference:D,element:R,strategy:"absolute",placement:c}),H=B(Object.assign(Object.assign({},R),z)),U="popper"===w?H:D,V={top:W.top-U.top+L.top,bottom:U.bottom-W.bottom+L.bottom,left:W.left-U.left+L.left,right:U.right-W.right+L.right},_=n.modifiersData.offset;if("popper"===w&&_){var F=_[c];Object.keys(V).forEach((function(t){var n=[O,y].indexOf(t)>=0?1:-1,e=[m,y].indexOf(t)>=0?"y":"x";V[t]+=F[e]*n}))}return V}var R={placement:"bottom",modifiers:[],strategy:"absolute"};function T(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function W(t){void 0===t&&(t={});var n=t.defaultModifiers,e=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?R:o;return function(t,n,o){void 0===o&&(o=i);var a,u,f={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},R),i),modifiersData:{},elements:{reference:t,popper:n},attributes:{},styles:{}},c=[],d=!1,v={state:f,setOptions:function(o){b(),f.options=Object.assign(Object.assign(Object.assign({},i),f.options),o),f.scrollParents={reference:r(t)?l(t):t.contextElement?l(t.contextElement):[],popper:l(n)};var a,u,p=function(t){var n=function(t){var n=new Map,e=new Set,r=[];return t.forEach((function(t){n.set(t.name,t)})),t.forEach((function(t){e.has(t.name)||function t(o){e.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!e.has(r)){var o=n.get(r);o&&t(o)}})),r.push(o)}(t)})),r}(t);return M.reduce((function(t,e){return t.concat(n.filter((function(t){return t.phase===e})))}),[])}((a=[].concat(e,f.options.modifiers),u=a.reduce((function(t,n){var e=t[n.name];return t[n.name]=e?Object.assign(Object.assign(Object.assign({},e),n),{},{options:Object.assign(Object.assign({},e.options),n.options),data:Object.assign(Object.assign({},e.data),n.data)}):n,t}),{}),Object.keys(u).map((function(t){return u[t]}))));return f.orderedModifiers=p.filter((function(t){return t.enabled})),f.orderedModifiers.forEach((function(t){var n=t.options,e=t.effect;if("function"==typeof e){var r=e({state:f,name:t.name,instance:v,options:void 0===n?{}:n});c.push(r||function(){})}})),v.update()},forceUpdate:function(){if(!d){var t=f.elements,n=t.reference,e=t.popper;if(T(n,e)){f.rects={reference:p(n,h(e),"fixed"===f.options.strategy),popper:s(e)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(t){return f.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(f=i({state:f,options:void 0===a?{}:a,name:o.name,instance:v})||f)}else f.reset=!1,r=-1}}},update:(a=function(){return new Promise((function(t){v.forceUpdate(),t(f)}))},function(){return u||(u=new Promise((function(t){Promise.resolve().then((function(){u=void 0,t(a())}))}))),u}),destroy:function(){b(),d=!0}};if(!T(t,n))return v;function b(){c.forEach((function(t){return t()})),c=[]}return v.setOptions(o).then((function(t){!d&&o.onFirstUpdate&&o.onFirstUpdate(t)})),v}}var D={passive:!0},z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function H(t){var e,r=t.popper,o=t.popperRect,i=t.placement,u=t.offsets,f=t.position,c=t.gpuAcceleration,p=t.adaptive,s=function(t){var n=t.y,e=window.devicePixelRatio||1;return{x:Math.round(t.x*e)/e||0,y:Math.round(n*e)/e||0}}(u),d=s.x,l=s.y,v=u.hasOwnProperty("x"),b=u.hasOwnProperty("y"),g=j,w=m,x=window;if(p){var M=h(r);M===n(r)&&(M=a(r)),i===m&&(w=y,l-=M.clientHeight-o.height,l*=c?1:-1),i===j&&(g=O,d-=M.clientWidth-o.width,d*=c?1:-1)}var k,P=Object.assign({position:f},p&&z);return Object.assign(Object.assign({},P),{},c?((k={})[w]=b?"0":"",k[g]=v?"0":"",k.transform=(x.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",k):((e={})[w]=b?l+"px":"",e[g]=v?d+"px":"",e.transform="",e))}var U={left:"right",right:"left",bottom:"top",top:"bottom"};function V(t){return t.replace(/left|right|bottom|top/g,(function(t){return U[t]}))}var _={start:"end",end:"start"};function F(t){return t.replace(/start|end/g,(function(t){return _[t]}))}function G(t,n){void 0===n&&(n={});var e=n.boundary,r=n.rootBoundary,o=n.padding,i=n.flipVariations,a=n.allowedAutoPlacements,u=void 0===a?x:a,f=q(n.placement),c=f?i?w:w.filter((function(t){return q(t)===f})):g,p=c.filter((function(t){return u.indexOf(t)>=0}));0===p.length&&(p=c);var s=p.reduce((function(n,i){return n[i]=I(t,{placement:i,boundary:e,rootBoundary:r,padding:o})[k(i)],n}),{});return Object.keys(s).sort((function(t,n){return s[t]-s[n]}))}const J={name:"flip",enabled:!0,phase:"main",fn:function(t){var n=t.state,e=t.options,r=t.name;if(!n.modifiersData[r]._skip){for(var o=e.mainAxis,i=void 0===o||o,a=e.altAxis,u=void 0===a||a,f=e.fallbackPlacements,c=e.padding,p=e.boundary,s=e.rootBoundary,d=e.altBoundary,l=e.flipVariations,v=void 0===l||l,b=e.allowedAutoPlacements,h=n.options.placement,g=k(h),w=f||(g!==h&&v?function(t){if("auto"===k(t))return[];var n=V(t);return[F(t),n,F(n)]}(h):[V(h)]),x=[h].concat(w).reduce((function(t,e){return t.concat("auto"===k(e)?G(n,{placement:e,boundary:p,rootBoundary:s,padding:c,flipVariations:v,allowedAutoPlacements:b}):e)}),[]),M=n.rects.reference,P=n.rects.popper,B=new Map,E=!0,L=x[0],A=0;A<x.length;A++){var S=x[A],C=k(S),R="start"===q(S),T=[m,y].indexOf(C)>=0,W=T?"width":"height",D=I(n,{placement:S,boundary:p,rootBoundary:s,altBoundary:d,padding:c}),z=T?R?O:j:R?y:m;M[W]>P[W]&&(z=V(z));var H=V(z),U=[];if(i&&U.push(D[C]<=0),u&&U.push(D[z]<=0,D[H]<=0),U.every((function(t){return t}))){L=S,E=!1;break}B.set(S,U)}if(E)for(var _=function(t){var n=x.find((function(n){var e=B.get(n);if(e)return e.slice(0,t).every((function(t){return t}))}));if(n)return L=n,"break"},J=v?3:1;J>0&&"break"!==_(J);J--);n.placement!==L&&(n.modifiersData[r]._skip=!0,n.placement=L,n.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function K(t,n,e){return Math.max(t,Math.min(n,e))}function N(t,n,e){return void 0===e&&(e={x:0,y:0}),{top:t.top-n.height-e.y,right:t.right-n.width+e.x,bottom:t.bottom-n.height+e.y,left:t.left-n.width-e.x}}function Q(t){return[m,O,y,j].some((function(n){return t[n]>=0}))}var X=W({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,r=t.instance,o=t.options,i=o.scroll,a=void 0===i||i,u=o.resize,f=void 0===u||u,c=n(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&p.forEach((function(t){t.addEventListener("scroll",r.update,D)})),f&&c.addEventListener("resize",r.update,D),function(){a&&p.forEach((function(t){t.removeEventListener("scroll",r.update,D)})),f&&c.removeEventListener("resize",r.update,D)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var n=t.state;n.modifiersData[t.name]=A({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var n=t.state,e=t.options,r=e.gpuAcceleration,o=void 0===r||r,i=e.adaptive,a=void 0===i||i,u={placement:k(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o};null!=n.modifiersData.popperOffsets&&(n.styles.popper=Object.assign(Object.assign({},n.styles.popper),H(Object.assign(Object.assign({},u),{},{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:a})))),null!=n.modifiersData.arrow&&(n.styles.arrow=Object.assign(Object.assign({},n.styles.arrow),H(Object.assign(Object.assign({},u),{},{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1})))),n.attributes.popper=Object.assign(Object.assign({},n.attributes.popper),{},{"data-popper-placement":n.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var n=t.state;Object.keys(n.elements).forEach((function(t){var e=n.styles[t]||{},r=n.attributes[t]||{},a=n.elements[t];o(a)&&i(a)&&(Object.assign(a.style,e),Object.keys(r).forEach((function(t){var n=r[t];!1===n?a.removeAttribute(t):a.setAttribute(t,!0===n?"":n)})))}))},effect:function(t){var n=t.state,e={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,e.popper),n.elements.arrow&&Object.assign(n.elements.arrow.style,e.arrow),function(){Object.keys(n.elements).forEach((function(t){var r=n.elements[t],a=n.attributes[t]||{},u=Object.keys(n.styles.hasOwnProperty(t)?n.styles[t]:e[t]).reduce((function(t,n){return t[n]="",t}),{});o(r)&&i(r)&&(Object.assign(r.style,u),Object.keys(a).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var n=t.state,e=t.name,r=t.options.offset,o=void 0===r?[0,0]:r,i=x.reduce((function(t,e){return t[e]=function(t,n,e){var r=k(t),o=[j,m].indexOf(r)>=0?-1:1,i="function"==typeof e?e(Object.assign(Object.assign({},n),{},{placement:t})):e,a=i[0],u=i[1];return a=a||0,u=(u||0)*o,[j,O].indexOf(r)>=0?{x:u,y:a}:{x:a,y:u}}(e,n.rects,o),t}),{}),a=i[n.placement],u=a.y;null!=n.modifiersData.popperOffsets&&(n.modifiersData.popperOffsets.x+=a.x,n.modifiersData.popperOffsets.y+=u),n.modifiersData[e]=i}},J,{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var n=t.state,e=t.options,r=t.name,o=e.mainAxis,i=void 0===o||o,a=e.altAxis,u=void 0!==a&&a,f=e.tether,c=void 0===f||f,p=e.tetherOffset,d=void 0===p?0:p,l=I(n,{boundary:e.boundary,rootBoundary:e.rootBoundary,padding:e.padding,altBoundary:e.altBoundary}),v=k(n.placement),b=q(n.placement),g=!b,w=L(v),x="x"===w?"y":"x",M=n.modifiersData.popperOffsets,P=n.rects.reference,B=n.rects.popper,E="function"==typeof d?d(Object.assign(Object.assign({},n.rects),{},{placement:n.placement})):d,A={x:0,y:0};if(M){if(i){var S="y"===w?m:j,C="y"===w?y:O,R="y"===w?"height":"width",T=M[w],W=M[w]+l[S],D=M[w]-l[C],z=c?-B[R]/2:0,H="start"===b?P[R]:B[R],U="start"===b?-B[R]:-P[R],V=n.elements.arrow,_=c&&V?s(V):{width:0,height:0},F=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=F[S],J=F[C],N=K(0,P[R],_[R]),Q=g?P[R]/2-z-N-G-E:H-N-G-E,X=g?-P[R]/2+z+N+J+E:U+N+J+E,Y=n.elements.arrow&&h(n.elements.arrow),Z=n.modifiersData.offset?n.modifiersData.offset[n.placement][w]:0,$=M[w]+X-Z,tt=K(c?Math.min(W,M[w]+Q-Z-(Y?"y"===w?Y.clientTop||0:Y.clientLeft||0:0)):W,T,c?Math.max(D,$):D);M[w]=tt,A[w]=tt-T}if(u){var nt=M[x],et=K(nt+l["x"===w?m:j],nt,nt-l["x"===w?y:O]);M[x]=et,A[x]=et-nt}n.modifiersData[r]=A}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var n,e=t.state,r=t.name,o=e.elements.arrow,i=e.modifiersData.popperOffsets,a=k(e.placement),u=L(a),f=[j,O].indexOf(a)>=0?"height":"width";if(o&&i){var c=e.modifiersData[r+"#persistent"].padding,p=s(o),d="y"===u?m:j,l="y"===u?y:O,v=e.rects.reference[f]+e.rects.reference[u]-i[u]-e.rects.popper[f],b=i[u]-e.rects.reference[u],g=h(o),w=g?"y"===u?g.clientHeight||0:g.clientWidth||0:0,x=w/2-p[f]/2+(v/2-b/2),M=K(c[d],x,w-p[f]-c[l]);e.modifiersData[r]=((n={})[u]=M,n.centerOffset=M-x,n)}},effect:function(t){var n=t.state,e=t.options,r=t.name,o=e.element,i=void 0===o?"[data-popper-arrow]":o,a=e.padding,u=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=n.elements.popper.querySelector(i)))&&P(n.elements.popper,i)&&(n.elements.arrow=i,n.modifiersData[r+"#persistent"]={padding:S("number"!=typeof u?u:C(u,g))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var n=t.state,e=t.name,r=n.rects.reference,o=n.rects.popper,i=n.modifiersData.preventOverflow,a=I(n,{elementContext:"reference"}),u=I(n,{altBoundary:!0}),f=N(a,r),c=N(u,o,i),p=Q(f),s=Q(c);n.modifiersData[e]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:s},n.attributes.popper=Object.assign(Object.assign({},n.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":s})}}]});const Y=({reference:t,popper:n,controllingProp:e,modifiers:r=[],initialPlacement:o="auto",eventAfterOpened:i,eventAfterClosed:a})=>(u,f)=>{let c;const{componentDidLoad:p,componentDidUpdate:s,disconnectedCallback:d}=u,l=(t,n)=>{n&&t[n].emit()},v=t=>{c&&(c.destroy(),c=void 0,l(t,a))},b=a=>{a[n]&&a[t]&&a[e]?c||(async e=>{const i=X(e[t],e[n],{placement:o,modifiers:[J,{name:"preventOverflow",options:{padding:16}},{name:"arrow",options:{padding:12}},{name:"offset",options:{offset:[0,10]}},...r]});return e[n].style.opacity="1",i})(a).then(t=>{c=t,a[f]=c,l(a,i)}):v(a)};u.componentDidLoad=function(){return b(this),null==p?void 0:p.call(this)},u.componentDidUpdate=function(){return b(this),null==s?void 0:s.call(this)},u.disconnectedCallback=function(){return v(this),null==d?void 0:d.call(this)}};export{Y as S}