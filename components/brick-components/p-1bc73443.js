var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n,t){return e(t={path:n,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}var t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,r=t||o||Function("return this")(),u=r.Symbol,i=Array.isArray,f=Object.prototype,l=f.hasOwnProperty,c=f.toString,a=u?u.toStringTag:void 0,s=Object.prototype.toString,b=u?u.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?function(e){var n=l.call(e,a),t=e[a];try{e[a]=void 0;var o=!0}catch(e){}var r=c.call(e);return o&&(n?e[a]=t:delete e[a]),r}(e):function(e){return s.call(e)}(e)},p=function(e){return null!=e&&"object"==typeof e},y=function(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==d(e)};export{u as _,y as a,r as b,d as c,p as d,n as e,t as f,i};