(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(module){module.exports=JSON.parse('[{"label":"Apple","value":"1","disabled":true},{"label":"Orange","value":"2"},{"label":"Mango","value":"3"},{"label":"Kiwi","value":"4"}]')},21:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return VARIANTS})),__webpack_require__.d(__webpack_exports__,"b",(function(){return SHADES})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BUTTON_VARIANTS}));const VARIANTS=["default","danger","warning","success","info"],SHADES=["light","dark"],BUTTON_VARIANTS=[...VARIANTS,"text","primary"]},311:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/video.9d9cbb34.mp4"},312:function(module){module.exports=JSON.parse('[{"title":"Title 1","description":"Description 1","status":"success"},{"title":"Title 2","status":"process","description":"Description 2"},{"title":"Title 3","status":"wait","description":"Description 3"}]')},313:function(module){module.exports=JSON.parse('[{"title":"Create","status":"success","icon":"create"},{"title":"Upload","status":"process","icon":"cloud-upload"},{"title":"Save","status":"wait","icon":"check-circle"}]')},314:function(module,exports,__webpack_require__){__webpack_require__(315),__webpack_require__(464),__webpack_require__(465),module.exports=__webpack_require__(691)},381:function(module,exports){},465:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(18),__webpack_require__(111),__webpack_require__(24),__webpack_require__(96),__webpack_require__(52),__webpack_require__(467),__webpack_require__(468),__webpack_require__(25),__webpack_require__(26);var _storybook_web_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(193),_storybook_theming__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(194),_storybook_addons__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(62),_storybook_addons__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_storybook_addons__WEBPACK_IMPORTED_MODULE_11__);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(_storybook_web_components__WEBPACK_IMPORTED_MODULE_9__.addParameters)({docs:{iframeHeight:"200px"},darkMode:{light:_objectSpread(_objectSpread({},_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.themes.normal),{},{appBg:"white"}),dark:_objectSpread(_objectSpread({},_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.themes.dark),{},{appBg:"black"})}}),_storybook_addons__WEBPACK_IMPORTED_MODULE_11___default.a.getChannel().on("DARK_MODE",(function(isDark){isDark?document.querySelector("html").setAttribute("dark-mode","true"):document.querySelector("html").removeAttribute("dark-mode")}));var req=__webpack_require__(666);Object(_storybook_web_components__WEBPACK_IMPORTED_MODULE_9__.configure)(req,module)}.call(this,__webpack_require__(466)(module))},666:function(module,exports,__webpack_require__){var map={"./atoms/button.stories.tsx":667,"./atoms/input.stories.tsx":668,"./atoms/link.stories.tsx":669,"./components/Alert/alert.stories.tsx":704,"./components/Card/card.stories.tsx":696,"./components/CheckboxWrapper/CheckboxWrapper.stories.tsx":697,"./components/Collapse/Collapse.stories.tsx":698,"./components/Dropdown/Dropdown.stories.tsx":705,"./components/DropdownList/DropdownList.stories.tsx":706,"./components/LazyMedia/LazyMedia.stories.tsx":692,"./components/Modal/Modal.stories.tsx":707,"./components/PopConfirm/PopConfirm.stories.tsx":708,"./components/Popover/Popover.stories.tsx":699,"./components/ProgressBar/ProgressBar.stories.tsx":700,"./components/RadioWrapper/RadioWrapper.stories.tsx":701,"./components/Rating/Rating.stories.tsx":694,"./components/Slider/Slider.stories.tsx":709,"./components/Steps/Steps.stories.tsx":702,"./components/Switch/switch.stories.tsx":710,"./components/Tabs/Tabs.stories.tsx":693,"./components/Timeline/Timeline.stories.tsx":703,"./components/Toast/Toast.stories.tsx":711};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=666},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button",(function(){return Button}));var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);__webpack_exports__.default={title:"Atoms",component:"button"};const Button=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Basic</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button">Default</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Plain</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button is-plain">Plain</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary is-plain">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success is-plain">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning is-plain">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info is-plain">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger is-plain">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Round</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button is-round">Round</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary is-round">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success is-round">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning is-round">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info is-round">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger is-round">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Disabled</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button is-disabled">Disabled</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary is-disabled">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success is-disabled">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning is-disabled">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info is-disabled">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger is-disabled">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Text only</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--text">Text only</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--text is-disabled">Disabled</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Size</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button">Default</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--medium">Medium</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--small">Small</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--mini">Mini</button>
            </div>
        </div>
    `},668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Input",(function(){return Input}));var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);__webpack_exports__.default={title:"Atoms",component:"input"};const Input=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Input</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-24">
                <div class="bk-row mb-4">
                    <div class="bk-col-md-12 mb-4 mb-md-0">
                        <div class="bk-input">
                            <input type="text" autocomplete="off" placeholder="Placeholder" class="bk-input__inner" />
                        </div>
                    </div>
                    <div class="bk-col-md-12">
                        <div class="bk-input is-disabled">
                            <input
                                type="text"
                                autocomplete="off"
                                placeholder="Disabled"
                                class="bk-input__inner"
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div class="bk-row">
                    <div class="bk-col-md-12 mb-4 mb-md-0">
                        <div class="bk-input bk-input-group bk-input-group--prepend">
                            <div class="bk-input-group__prepend">Http://</div>
                            <input type="text" autocomplete="off" placeholder="Please input" class="bk-input__inner" />
                        </div>
                    </div>
                    <div class="bk-col-md-12">
                        <div class="bk-input bk-input-group bk-input-group--append">
                            <input type="text" autocomplete="off" placeholder="Please input" class="bk-input__inner" />
                            <div class="bk-input-group__append">Http://</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Text area</h2>
        </div>

        <div class="bk-row">
            <div class="bk-col-md-12 mb-4 mb-md-0">
                <div class="bk-input">
                    <textarea
                        autocomplete="off"
                        rows="2"
                        placeholder="Placeholder"
                        class="bk-textarea__inner"
                    ></textarea>
                </div>
            </div>
            <div class="bk-col-md-12">
                <div class="bk-input is-disabled">
                    <textarea
                        autocomplete="off"
                        rows="2"
                        placeholder="Placeholder"
                        class="bk-textarea__inner"
                        disabled
                    ></textarea>
                </div>
            </div>
        </div>
    `},669:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Link",(function(){return Link}));var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);__webpack_exports__.default={title:"Atoms",component:"link"};const Link=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Basic</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--default is-underline">
                    <span class="bk-link--inner">default</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--primary is-underline">
                    <span class="bk-link--inner">primary</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--success is-underline">
                    <span class="bk-link--inner">success</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--info is-underline">
                    <span class="bk-link--inner">info</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--warning is-underline">
                    <span class="bk-link--inner">warning</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--danger is-underline">
                    <span class="bk-link--inner">danger</span
                </a>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Disabled</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--default is-underline is-disabled">
                    <span class="bk-link--inner">default</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--primary is-underline is-disabled">
                    <span class="bk-link--inner">primary</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--success is-underline is-disabled">
                    <span class="bk-link--inner">success</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--info is-underline is-disabled">
                    <span class="bk-link--inner">info</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--warning is-underline is-disabled">
                    <span class="bk-link--inner">warning</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--danger is-underline is-disabled">
                    <span class="bk-link--inner">danger</span
                </a>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">No underline</h2>
        </div>
        <div class="bk-row">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--default">
                    <span class="bk-link--inner">default</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--primary">
                    <span class="bk-link--inner">primary</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--success">
                    <span class="bk-link--inner">success</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--info">
                    <span class="bk-link--inner">info</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--warning">
                    <span class="bk-link--inner">warning</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--danger">
                    <span class="bk-link--inner">danger</span
                </a>
            </div>
        </div>
    `},692:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Image",(function(){return Image})),__webpack_require__.d(__webpack_exports__,"Picture",(function(){return Picture})),__webpack_require__.d(__webpack_exports__,"BackgroundImage",(function(){return BackgroundImage})),__webpack_require__.d(__webpack_exports__,"Video",(function(){return Video}));var lit_html=__webpack_require__(2),video=__webpack_require__(311),video_default=__webpack_require__.n(video);__webpack_exports__.default={title:"Components/LazyMedia",component:"bk-lazy-media"};const courtesy=lit_html.html` <div class="bk-row" style="margin-top:20px; text-align:right">
    <h4>Photos taken from https://picsum.photos/</h4>
</div>`,Image=()=>{const images=[];for(let i=1;i<=50;i++)images.push(lit_html.html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
            <img
                src="https://picsum.photos/seed/${i}/5/5?grayscale"
                data-src="https://picsum.photos/seed/${i}/300/300?grayscale"
                alt="https://picsum.photos/"
                style="min-height: 100px"
            />
        </div>`);return lit_html.html` <bk-lazy-media>
        <div class="bk-row is-no-gutter">
            ${images}
        </div>
        ${courtesy}
    </bk-lazy-media>`};Image.story={parameters:{notes:'# bk-lazy-media\n\nLazy load an image.\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst images = []\n\nfor (let i = 1; i <= 50; i++) {\n    images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">\n        <img\n            src="https://picsum.photos/seed/${i}/5/5?grayscale"\n            data-src="https://picsum.photos/seed/${i}/300/300?grayscale"\n            alt="https://picsum.photos/"\n            style="min-height: 100px"\n        />\n    </div>`)\n}\n\nhtml` <bk-lazy-media>\n    <div class="bk-row">\n        ${images}\n    </div>\n</bk-lazy-media>`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n---\n'}};const Picture=()=>{const images=[];for(let i=1;i<=50;i++)images.push(lit_html.html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
            <picture>
                <source
                    media="(min-width: 1200px)"
                    srcset="https://picsum.photos/seed/${i}/9/6?grayscale"
                    data-srcset="https://picsum.photos/seed/${i}/900/600?grayscale"
                />
                <source
                    media="(min-width: 768px)"
                    srcset="https://picsum.photos/seed/${i}/7/5?grayscale"
                    data-srcset="https://picsum.photos/seed/${i}/700/500?grayscale"
                />

                <img
                    src="https://picsum.photos/seed/${i}/5/5?grayscale"
                    data-src="https://picsum.photos/seed/${i}/500/500?grayscale"
                    alt="https://picsum.photos/"
                    style="min-height: 100px"
                />
            </picture>
        </div>`);return lit_html.html` <bk-lazy-media>
        <div class="bk-row is-no-gutter">
            ${images}
        </div>
        ${courtesy}
    </bk-lazy-media>`};Picture.story={parameters:{notes:'# bk-lazy-media\n\nLazy load a picture\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst images = []\n\nfor (let i = 1; i <= 50; i++) {\n    images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">\n        <picture>\n            <source\n                media="(min-width: 1200px)"\n                srcset="https://picsum.photos/seed/${i}/9/6?grayscale"\n                data-srcset="https://picsum.photos/seed/${i}/900/600?grayscale"\n            />\n            <source\n                media="(min-width: 768px)"\n                srcset="https://picsum.photos/seed/${i}/7/5?grayscale"\n                data-srcset="https://picsum.photos/seed/${i}/700/500?grayscale"\n            />\n\n            <img\n                src="https://picsum.photos/seed/${i}/5/5?grayscale"\n                data-src="https://picsum.photos/seed/${i}/500/500?grayscale"\n                alt="https://picsum.photos/"\n                style="min-height: 100px"\n            />\n        </picture>\n    </div>`)\n}\n\nhtml` <bk-lazy-media>\n    <div class="bk-row">\n        ${images}\n    </div>\n</bk-lazy-media>`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n---\n'}};const BackgroundImage=()=>{const images=[];for(let i=1;i<=50;i++)images.push(lit_html.html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">
            <div
                data-bg-image="https://picsum.photos/seed/${i}/900/500?grayscale"
                style="min-height: 300px;
                background-image: url(https://picsum.photos/seed/${i}/9/5?grayscale);
                background-repeat: no-repeat;
                background-size: cover;"
            ></div>
        </div>`);return lit_html.html`
        <bk-lazy-media>
            <div class="bk-row is-no-gutter">
                ${images}
            </div>
            ${courtesy}
        </bk-lazy-media>
    `};BackgroundImage.story={parameters:{notes:'# bk-lazy-media\n\nLazy load a background image\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst images = []\n\nfor (let i = 1; i <= 50; i++) {\n    images.push(html`<div class="bk-col-12 bk-col-sm-8 bk-col-md-6">\n        <div\n            data-bg-image="https://picsum.photos/seed/${i}/900/500?grayscale"\n            style="min-height: 300px;\n                background-image: url(https://picsum.photos/seed/${i}/9/5?grayscale);\n                background-repeat: no-repeat;\n                background-size: cover;"\n        ></div>\n    </div>`)\n}\n\nhtml`\n    <bk-lazy-media>\n        <div class="bk-row">\n            ${images}\n        </div>\n        ${courtesy}\n    </bk-lazy-media>\n`\n```\n\n&nbsp;\n'}};const Video=()=>lit_html.html`<div class="bk-row bk-row--flex">
        <div class="bk-col-24 bk-col-md-12 bk-col-md-offset-6">
            <bk-lazy-media>
                <video controls poster="https://picsum.photos/seed/99/900/500?grayscale" style="width:100%">
                    <source data-src="${video_default.a}" type="video/mp4" />
                </video>
            </bk-lazy-media>
        </div>
    </div>`;Video.story={parameters:{notes:'# bk-lazy-media\n\nLazy load a video\n\n```javascript\nimport { html } from \'lit-html\'\nimport poster from \'poster.jpg\'\nimport video from \'video.mp4\'\n\nhtml`<bk-lazy-media>\n    <video controls poster="${poster}" style="width:100%">\n        <source data-src="${video}" type="video/mp4" />\n    </video>\n</bk-lazy-media>`\n```\n\n&nbsp;\n'}}},693:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Tabs",(function(){return Tabs}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4);const POSITION=["top","bottom","left","right"],VARIANT=["simple","card","border-card"];__webpack_exports__.default={title:"Components",component:"bk-tabs",parameters:{notes:{tabs:'# bk-tabs\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`<bk-tabs position=${position} variant=${variant} @bkSelect=${(e: CustomEvent) => {}}>\n        <div slot="header">\n            <bk-tab-header tab="tab_1" active="true">Config</bk-tab-header>\n            <bk-tab-header tab="tab-2">I am very long tab 1</bk-tab-header>\n            <bk-tab-header tab="tab-3">I am very long tab 2</bk-tab-header>\n            <bk-tab-header tab="tab-4">User</bk-tab-header>\n        </div>\n        <bk-tab-panel tab="tab_1">Config content</bk-tab-panel>\n        <bk-tab-panel tab="tab-2"> <button class="bk-button">Test</button> </bk-tab-panel>\n        <bk-tab-panel tab="tab-3">I am very long tab 2 content</bk-tab-panel>\n        <bk-tab-panel tab="tab-4">User content</bk-tab-panel>\n    </bk-tabs> `\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description         | Type                                     | Default    |\n| ---------- | ---------- | ------------------- | ---------------------------------------- | ---------- |\n| `position` | `position` | Position of the tab | `"bottom" \\| "left" \\| "right" \\| "top"` | `\'top\'`    |\n| `variant`  | `variant`  | Variant of the tab  | `"border-card" \\| "card" \\| "simple"`    | `\'simple\'` |\n\n\n## Events\n\n| Event      | Description                                                      | Type                  |\n| ---------- | ---------------------------------------------------------------- | --------------------- |\n| `bkSelect` | This event will fire on selection of a tab with tab id as detail | `CustomEvent<string>` |\n\n\n----------------------------------------------\n\n\n',tabHeader:"# bk-tab-header\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute  | Description           | Type      | Default     |\n| ------------------ | ---------- | --------------------- | --------- | ----------- |\n| `active`           | `active`   | set active tab        | `boolean` | `false`     |\n| `disabled`         | `disabled` | Enable or disable tab | `boolean` | `false`     |\n| `tab` _(required)_ | `tab`      | Unique tab id         | `string`  | `undefined` |\n\n\n## Events\n\n| Event                | Description    | Type                  |\n| -------------------- | -------------- | --------------------- |\n| `$tabHighlightReset` | Internal event | `CustomEvent<any>`    |\n| `$tabSetActive`      | Internal event | `CustomEvent<string>` |\n\n\n----------------------------------------------\n\n\n",tabPanel:"# bk-tab-panel\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute | Description                          | Type     | Default     |\n| ------------------ | --------- | ------------------------------------ | -------- | ----------- |\n| `tab` _(required)_ | `tab`     | Same value as tab header's tab value | `string` | `undefined` |\n\n\n----------------------------------------------\n\n\n"}}};const Tabs=()=>{const position=Object(dist.select)("position",POSITION,"top"),variant=Object(dist.select)("variant",VARIANT,"simple"),bkSelect=Object(addon_actions_dist.action)("bkSelect");return lit_html.html`<bk-tabs position=${position} variant=${variant} @bkSelect=${e=>bkSelect(e.detail)}>
        <div slot="header">
            <bk-tab-header tab="tab_1" active="true">Config</bk-tab-header>
            <bk-tab-header tab="tab-2">I am very long tab 1</bk-tab-header>
            <bk-tab-header tab="tab-3">I am very long tab 2</bk-tab-header>
            <bk-tab-header tab="tab-4">User</bk-tab-header>
        </div>
        <bk-tab-panel tab="tab_1">Config content</bk-tab-panel>
        <bk-tab-panel tab="tab-2"> <button class="bk-button">Test</button> </bk-tab-panel>
        <bk-tab-panel tab="tab-3">I am very long tab 2 content</bk-tab-panel>
        <bk-tab-panel tab="tab-4">User content</bk-tab-panel>
    </bk-tabs> `}},694:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Rating",(function(){return Rating}));var lit_html=__webpack_require__(2),dist=__webpack_require__(4),addon_knobs_dist=__webpack_require__(0),_fixtures_colors={1:"red",2:"red",3:"yellow",5:"green"};const SIZE=["small","medium","large"];var SMILEY_ICONS;!function(SMILEY_ICONS){SMILEY_ICONS[SMILEY_ICONS["social:sentiment-very-dissatisfied"]=0]="social:sentiment-very-dissatisfied",SMILEY_ICONS[SMILEY_ICONS["social:sentiment-dissatisfied"]=1]="social:sentiment-dissatisfied",SMILEY_ICONS[SMILEY_ICONS["social:sentiment-neutral"]=2]="social:sentiment-neutral",SMILEY_ICONS[SMILEY_ICONS["social:sentiment-satisfied"]=3]="social:sentiment-satisfied",SMILEY_ICONS[SMILEY_ICONS["social:sentiment-very-satisfied"]=4]="social:sentiment-very-satisfied"}(SMILEY_ICONS||(SMILEY_ICONS={}));__webpack_exports__.default={title:"Components",component:"bk-rating",parameters:{notes:'# bk-rating\n\nDescription goes here\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml` <bk-rating/> `\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute   | Description                  | Type                             | Default     |\n| ---------- | ----------- | ---------------------------- | -------------------------------- | ----------- |\n| `asSmiley` | `as-smiley` | show smiley instead of start | `boolean`                        | `false`     |\n| `colors`   | `colors`    | The color for each rating    | `Colors \\| string \\| undefined`  | `undefined` |\n| `rating`   | `rating`    | The rating out of 5          | `number`                         | `0`         |\n| `size`     | `size`      | Size of the rating           | `"large" \\| "medium" \\| "small"` | `\'medium\'`  |\n\n\n## Events\n\n| Event      | Description                             | Type                  |\n| ---------- | --------------------------------------- | --------------------- |\n| `bkChange` | This event is fired when rating changed | `CustomEvent<number>` |\n\n\n----------------------------------------------\n\n\n'}};const Rating=()=>{const rating=Object(addon_knobs_dist.number)("rating",0),size=Object(addon_knobs_dist.select)("size",SIZE,"medium"),asSmiley=Object(addon_knobs_dist.boolean)("as-smiley",!1),colors=Object(addon_knobs_dist.object)("colors",_fixtures_colors),bkChange=Object(dist.action)("bkChange");return lit_html.html`<bk-rating
        rating=${rating}
        colors=${JSON.stringify(colors)}
        size=${size}
        as-smiley=${asSmiley}
        @bkChange=${e=>bkChange(e.detail)}
    />`}},696:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Card",(function(){return Card}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0);const SHADOW=["never","always","hover"];__webpack_exports__.default={title:"Components",component:"bk-card",decorators:[dist.withKnobs],parameters:{notes:'# bk-card\n\nIntegrate information in a card container.\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <bk-card shadow="never">\n        <div slot="header">\n            Card Heading\n        </div>\n        <div slot="body">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </div>\n    </bk-card>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description                 | Type                             | Default   |\n| -------- | --------- | --------------------------- | -------------------------------- | --------- |\n| `shadow` | `shadow`  | Set shadow of the component | `"always" \\| "hover" \\| "never"` | `\'never\'` |\n\n\n## Slots\n\n| Slot       | Description                         |\n| ---------- | ----------------------------------- |\n| `"body"`   | Use this to render the card body.   |\n| `"header"` | Use this to render the card header. |\n\n\n## Dependencies\n\n### Used by\n\n - [bk-timeline-item](../Timeline/TimelineItem)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-timeline-item --\x3e bk-card\n  style bk-card fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const Card=()=>{const shadow=Object(dist.select)("shadow",SHADOW,"never");return lit_html.html`
        <div class="bk-row">
            <bk-card shadow=${shadow} class="bk-col-sm-16 bk-col-md-8 bk-col-sm-push-4 bk-col-md-push-8">
                <div slot="header">
                    Card Heading
                </div>
                <div slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </bk-card>
        </div>
    `}},697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Group",(function(){return Group}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0);__webpack_exports__.default={title:"Components/CheckboxWrapper",component:"bk-checkbox-wrapper"};const Basic=()=>{const indeterminate=Object(dist.boolean)("indeterminate",!1);return lit_html.html`
        <bk-checkbox-wrapper label="Option" indeterminate=${indeterminate}>
            <input type="checkbox" aria-hidden="false" value="option" name="options" />
        </bk-checkbox-wrapper>
    `};Basic.story={parameters:{notes:'# bk-checkbox-wrapper\n\nThis is a style wrapper for checkbox\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <bk-checkbox-wrapper label="Option" indeterminate="false">\n        <input type="checkbox" aria-hidden="false" value="option" name="options" />\n    </bk-checkbox-wrapper>\n`\n```\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute       | Description              | Type      | Default     |\n| -------------------- | --------------- | ------------------------ | --------- | ----------- |\n| `indeterminate`      | `indeterminate` | Show indeterminate state | `boolean` | `false`     |\n| `label` _(required)_ | `label`         | Checkbox label           | `string`  | `undefined` |\n\n\n----------------------------------------------\n\n\n'}};const Group=()=>lit_html.html`<div>
        <bk-checkbox-wrapper label="Apple">
            <input type="checkbox" aria-hidden="false" value="apple" name="fruits" />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Kiwi">
            <input type="checkbox" aria-hidden="false" value="kiwi" name="fruits" checked />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Grape">
            <input type="checkbox" aria-hidden="false" value="grape" name="fruits" checked disabled />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Orange">
            <input type="checkbox" aria-hidden="false" value="orange" name="fruits" disabled />
        </bk-checkbox-wrapper>
    </div>`;Group.story={parameters:{notes:'# bk-checkbox-wrapper\n\nMultiple checkboxes bound in one group\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <div>\n        <bk-checkbox-wrapper label="Apple">\n            <input type="checkbox" aria-hidden="false" value="apple" name="fruits" />\n        </bk-checkbox-wrapper>\n        <bk-checkbox-wrapper label="Kiwi">\n            <input type="checkbox" aria-hidden="false" value="kiwi" name="fruits" checked />\n        </bk-checkbox-wrapper>\n        <bk-checkbox-wrapper label="Grape">\n            <input type="checkbox" aria-hidden="false" value="grape" name="fruits" checked disabled />\n        </bk-checkbox-wrapper>\n        <bk-checkbox-wrapper label="Orange">\n            <input type="checkbox" aria-hidden="false" value="orange" name="fruits" disabled />\n        </bk-checkbox-wrapper>\n    </div>\n`\n```\n'}}},698:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Individual",(function(){return Individual})),__webpack_require__.d(__webpack_exports__,"Group",(function(){return Group}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4);__webpack_exports__.default={title:"Components/Collapse",component:"bk-collapse"};const Individual=()=>{const open=Object(dist.boolean)("open",!1),disabled=Object(dist.boolean)("disabled",!1),bkOpen=Object(addon_actions_dist.action)("bkOpen"),bkOpened=Object(addon_actions_dist.action)("bkOpened"),bkClose=Object(addon_actions_dist.action)("bkClose"),bkClosed=Object(addon_actions_dist.action)("bkClosed");return lit_html.html`<bk-collapse
        open=${open}
        disabled=${disabled}
        @bkOpen=${bkOpen}
        @bkOpened=${bkOpened}
        @bkClose=${bkClose}
        @bkClosed=${bkClosed}
    >
        <span slot="header">Lorem ipsum dolor sit amet</span>
        <div slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </div>
    </bk-collapse>`};Individual.story={parameters:{notes:'# bk-collapse\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`<bk-collapse open="false" disabled="false" @bkOpened=${() => {}} @bkClosed=${() => {}}>\n    <span slot="header">Lorem ipsum dolor sit amet</span>\n    <div slot="content">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n        laborum.\n    </div>\n</bk-collapse>`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                | Type      | Default |\n| ---------- | ---------- | -------------------------- | --------- | ------- |\n| `disabled` | `disabled` | Enable or disable collapse | `boolean` | `false` |\n| `open`     | `open`     | Open or close the collapse | `boolean` | `false` |\n\n\n## Events\n\n| Event      | Description                                      | Type               |\n| ---------- | ------------------------------------------------ | ------------------ |\n| `bkClose`  | This event is fired just before the panel closes | `CustomEvent<any>` |\n| `bkClosed` | This event is fired after the panel is closed    | `CustomEvent<any>` |\n| `bkOpen`   | This event is fired just before the panel opens  | `CustomEvent<any>` |\n| `bkOpened` | This event is fired after the panel is opened    | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n\n'}};const Group=()=>{const isAccordion=Object(dist.boolean)("is-accordion",!0);return lit_html.html`<bk-collapse-group is-accordion=${isAccordion}>
        <bk-collapse open="false" disabled="false">
            <span slot="header">Title 1</span>
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        </bk-collapse>
        <bk-collapse open="true" disabled="false">
            <span slot="header">Title 2</span>
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
        </bk-collapse>
        <bk-collapse open="false" disabled="false">
            <span slot="header">Title 3</span>
            <div slot="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
        </bk-collapse>
    </bk-collapse-group>`};Group.story={parameters:{notes:'# bk-collapse-group\n\nGrouping collapsible\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`<bk-collapse-group is-accordion="true">\n    <bk-collapse open="false" disabled="false">\n        <span slot="header">Title 1</span>\n        <div slot="content">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </div>\n    </bk-collapse>\n    <bk-collapse open="true" disabled="false">\n        <span slot="header">Title 2</span>\n        <div slot="content">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat.\n        </div>\n    </bk-collapse>\n    <bk-collapse open="false" disabled="false">\n        <span slot="header">Title 3</span>\n        <div slot="content">\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat.\n            </p>\n            <p>\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                laborum.\n            </p>\n        </div>\n    </bk-collapse>\n</bk-collapse-group>`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute      | Description | Type      | Default |\n| ------------- | -------------- | ----------- | --------- | ------- |\n| `isAccordion` | `is-accordion` |             | `boolean` | `true`  |\n\n\n----------------------------------------------\n\n\n'}}},699:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Popover",(function(){return Popover}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4);const TRIGGER_ON=["click","focus","hover","manual"];__webpack_exports__.default={title:"Components",component:"bk-popover",decorators:[dist.withKnobs],parameters:{notes:'# bk-popover\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst onOpened = () => {}\n\nconst onClosed = () => {}\n\nhtml`\n    <bk-popover trigger-on="click" placement="auto" disabled="true" @bkOpened=${onOpened} @bkClosed=${onClosed}>\n        <button class="bk-button" slot="control">Popover</button>\n        <div slot="content">This is the content of the popover</div>\n    </bk-popover>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                    | Type                                                                                                                                                                                                         | Default   |\n| ----------- | ------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |\n| `disabled`  | `disabled`   | Enable or disable popover      | `boolean`                                                                                                                                                                                                    | `false`   |\n| `placement` | `placement`  | This will set the trigger even | `"auto" \\| "auto-end" \\| "auto-start" \\| "bottom" \\| "bottom-end" \\| "bottom-start" \\| "left" \\| "left-end" \\| "left-start" \\| "right" \\| "right-end" \\| "right-start" \\| "top" \\| "top-end" \\| "top-start"` | `\'auto\'`  |\n| `show`      | `show`       | show or hide the popover.      | `boolean`                                                                                                                                                                                                    | `false`   |\n| `triggerOn` | `trigger-on` | This will set the trigger even | `"click" \\| "focus" \\| "hover" \\| "manual"`                                                                                                                                                                  | `\'click\'` |\n\n\n## Events\n\n| Event      | Description          | Type               |\n| ---------- | -------------------- | ------------------ |\n| `bkClosed` | Fired when destroyed | `CustomEvent<any>` |\n| `bkOpened` | Fired when opened    | `CustomEvent<any>` |\n\n\n## Slots\n\n| Slot        | Description                                    |\n| ----------- | ---------------------------------------------- |\n| `"content"` | The content of the popover.                    |\n| `"control"` | The element on which the popover should apply. |\n\n\n## Dependencies\n\n### Used by\n\n - [bk-pop-confirm](../PopConfirm)\n - [bk-slider](../Slider)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-pop-confirm --\x3e bk-popover\n  bk-slider --\x3e bk-popover\n  style bk-popover fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const placements=["auto","top","bottom","left","right","auto-start","auto-end","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Popover=()=>{let show=!1;const triggerOn=Object(dist.select)("trigger-on",TRIGGER_ON,"click"),placement=Object(dist.select)("placement",placements,"auto"),disabled=Object(dist.boolean)("disabled",!1);return"manual"===triggerOn&&(show=Object(dist.boolean)("show",!1)),lit_html.html`
        <div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
            <bk-popover
                show=${show}
                trigger-on=${triggerOn}
                placement=${placement}
                disabled=${disabled}
                @bkOpened=${Object(addon_actions_dist.action)("opened")}
                @bkClosed=${Object(addon_actions_dist.action)("closed")}
            >
                <button class="bk-button" slot="control">Popover</button>
                <div slot="content">This is the content of the popover</div>
            </bk-popover>
        </div>
    `}},700:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ProgressBar",(function(){return ProgressBar}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),types=__webpack_require__(21);const BAR_TYPE=["line","circle","dashboard"];__webpack_exports__.default={title:"Components",component:"bk-progress-bar",decorators:[dist.withKnobs],parameters:{notes:'# bk-progress-bar\n\nProgress is used to show the progress of current operation, and inform the user the current status.\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <bk-progress-bar progress="50" bar-type="line" show-percentage-text="true" variant="default" text-inside="true" />\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute              | Description                                                                                                                                  | Type                                                        | Default     |\n| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |\n| `barType`            | `bar-type`             | Set the kind of progress bar                                                                                                                 | `"circle" \\| "dashboard" \\| "line"`                         | `\'line\'`    |\n| `progress`           | `progress`             | Progressed value. Must be between 0 and 100                                                                                                  | `number`                                                    | `0`         |\n| `showPercentageText` | `show-percentage-text` | Display progressed value as a text along with the progress bar                                                                               | `boolean`                                                   | `true`      |\n| `textInside`         | `text-inside`          | Display progressed value as a text, inside the progress bar. This has effect only when `showPercentageText` is enabled and `barType` is line | `boolean`                                                   | `false`     |\n| `variant`            | `variant`              | Type of the progress bar                                                                                                                     | `"danger" \\| "default" \\| "info" \\| "success" \\| "warning"` | `\'default\'` |\n\n\n----------------------------------------------\n\n\n'}};const ProgressBar=()=>{const variant=Object(dist.select)("variant",types.c,"default"),showPercentageText=Object(dist.boolean)("show-percentage-text",!0),textInside=Object(dist.boolean)("text-inside",!1),progress=Object(dist.number)("progress",50),barType=Object(dist.select)("bar-type",BAR_TYPE,"line");return lit_html.html` <div style=${"line"!==barType?"width: 200px":"width:100%"}>
        <bk-progress-bar
            progress=${progress}
            bar-type=${barType}
            show-percentage-text=${showPercentageText}
            variant=${variant}
            text-inside=${textInside}
        />
    </div>`}},701:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Group",(function(){return Group}));var lit_html=__webpack_require__(2);__webpack_exports__.default={title:"Components/RadioWrapper",component:"bk-radio-wrapper"};const Basic=()=>lit_html.html`
        <bk-radio-wrapper label="Option">
            <input type="radio" aria-hidden="false" value="1" name="options" />
        </bk-radio-wrapper>
    `;Basic.story={parameters:{notes:'# bk-radio-wrapper\n\nThis is a style wrapper for radio button\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <bk-radio-wrapper label="Option">\n        <input type="radio" aria-hidden="false" value="1" name="options" />\n    </bk-radio-wrapper>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute | Description | Type     | Default     |\n| -------------------- | --------- | ----------- | -------- | ----------- |\n| `label` _(required)_ | `label`   | radio label | `string` | `undefined` |\n\n\n----------------------------------------------\n\n\n'}};const Group=()=>lit_html.html`
        <div>
            <bk-radio-wrapper label="Option A">
                <input type="radio" aria-hidden="false" value="a" name="options" />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option B">
                <input type="radio" aria-hidden="false" value="b" name="options" checked />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option C">
                <input type="radio" aria-hidden="false" value="c" name="options" />
            </bk-radio-wrapper>
            <bk-radio-wrapper label="Option D">
                <input type="radio" aria-hidden="false" value="d" name="options" disabled />
            </bk-radio-wrapper>
        </div>
    `;Group.story={parameters:{notes:'# bk-checkbox-wrapper\n\nMultiple radio buttons bound in one group\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <div>\n        <bk-radio-wrapper label="Option A">\n            <input type="radio" aria-hidden="false" value="a" name="options" />\n        </bk-radio-wrapper>\n        <bk-radio-wrapper label="Option B">\n            <input type="radio" aria-hidden="false" value="b" name="options" checked />\n        </bk-radio-wrapper>\n        <bk-radio-wrapper label="Option C">\n            <input type="radio" aria-hidden="false" value="c" name="options" />\n        </bk-radio-wrapper>\n        <bk-radio-wrapper label="Option D">\n            <input type="radio" aria-hidden="false" value="d" name="options" disabled />\n        </bk-radio-wrapper>\n    </div>\n`\n```\n'}}},702:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"WithIcons",(function(){return WithIcons}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4);const DIRECTION=["vertical","horizontal"];var stepsWithoutIcon=__webpack_require__(312),stepsWithIcon=__webpack_require__(313);__webpack_exports__.default={title:"Components/Steps",component:"bk-steps",parameters:{notes:"# bk-steps\n\nGuide the user to complete tasks in accordance with the process.\n\nNote: The icon is implemented using [Polymer iron-icon](https://www.webcomponents.org/element/@polymer/iron-icon). Icon name can be found [here](https://www.webcomponents.org/element/@polymer/iron-icons/demo/demo/index.html)\n\n```javascript\nimport { html } from 'lit-html'\n\nexport const STEP_STATE = ['process', 'wait', 'success', 'error', 'finish'] as const\n\ninterface StepComponent {\n    title: string\n    icon?: string\n    description?: string\n    status?: typeof STEP_STATE[number]\n}\n\nconst steps: StepComponent[] = [\n    {\n        title: 'Title 1',\n        description: 'Description 1',\n        status: 'success',\n    },\n    {\n        title: 'Title 2',\n        status: 'process',\n        description: 'Description 2',\n    },\n]\n\nhtml`<bk-steps\n    is-centered=\"false\"\n    direction=\"horizontal\"\n    steps=${JSON.stringify(steps)}\n    @bkClick=${(e) => {\n        console.log(e.detail)\n    }}\n/>`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute     | Description                  | Type                         | Default        |\n| ------------ | ------------- | ---------------------------- | ---------------------------- | -------------- |\n| `direction`  | `direction`   | Display direction            | `\"horizontal\" \\| \"vertical\"` | `'horizontal'` |\n| `isCentered` | `is-centered` | Center title and description | `boolean`                    | `false`        |\n| `steps`      | `steps`       | Steps to be displayed        | `StepComponent[] \\| string`  | `[]`           |\n\n\n## Events\n\n| Event     | Description                                | Type                  |\n| --------- | ------------------------------------------ | --------------------- |\n| `bkClick` | This event is fired when clicked on a step | `CustomEvent<number>` |\n\n\n----------------------------------------------\n\n\n"}};const Basic=()=>{const isCentered=Object(dist.boolean)("is-centered",!1),direction=Object(dist.select)("direction",DIRECTION,"horizontal"),steps=Object(dist.object)("steps",stepsWithoutIcon),bkClick=Object(addon_actions_dist.action)("bkClick");return lit_html.html`<bk-steps
        is-centered=${isCentered}
        direction=${direction}
        steps=${JSON.stringify(steps)}
        @bkClick=${e=>bkClick(e.detail)}
        style=${"vertical"===direction?"height:300px":""}
    />`},WithIcons=()=>{const isCentered=Object(dist.boolean)("is-centered",!1),direction=Object(dist.select)("direction",DIRECTION,"horizontal"),steps=Object(dist.object)("steps",stepsWithIcon),bkClick=Object(addon_actions_dist.action)("bkClick");return lit_html.html`<bk-steps
        is-centered=${isCentered}
        direction=${direction}
        steps=${JSON.stringify(steps)}
        @bkClick=${e=>bkClick(e.detail)}
        style=${"vertical"===direction?"height:300px":""}
    />`}},703:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SingleItem",(function(){return SingleItem})),__webpack_require__.d(__webpack_exports__,"Group",(function(){return Group}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),types=__webpack_require__(21);__webpack_exports__.default={title:"Components/Timeline",component:"bk-timeline"};const SingleItem=()=>{const time=Object(dist.text)("time","25-05-2020"),variant=Object(dist.select)("variant",types.c,"default");return lit_html.html`
        <bk-timeline-item time=${time} variant=${variant}>
            <h4>Update Github template</h4>
            <p>Tom committed 25-05-2020 20:46</p>
        </bk-timeline-item>
    `};SingleItem.story={parameters:{notes:'# bk-timeline-item\n\nSingle time line item\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <bk-timeline-item time="01-01-2020 19:20" variant="success">\n        <h4>Update Github template</h4>\n        <p>Tom committed 01-01-2020 19:20</p>\n    </bk-timeline-item>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute | Description          | Type                                                        | Default     |\n| ------------------- | --------- | -------------------- | ----------------------------------------------------------- | ----------- |\n| `time` _(required)_ | `time`    | Time to be displayed | `string`                                                    | `undefined` |\n| `variant`           | `variant` | The variant of node  | `"danger" \\| "default" \\| "info" \\| "success" \\| "warning"` | `\'default\'` |\n\n\n## Dependencies\n\n### Depends on\n\n- [bk-card](../../Card)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-timeline-item --\x3e bk-card\n  style bk-timeline-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const Group=()=>lit_html.html`
        <bk-timeline>
            <bk-timeline-item time="01-01-2020 19:20" variant="success">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:20</p>
            </bk-timeline-item>
            <bk-timeline-item time="01-01-2020 19:35" variant="success">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:35</p>
            </bk-timeline-item>
            <bk-timeline-item time="01-01-2020 19:50" variant="danger">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:50</p>
            </bk-timeline-item>
        </bk-timeline>
    `;Group.story={parameters:{notes:'# bk-timeline\n\nVisually display timeline.\n\n```javascript\nimport { html } from \'lit-html\'\n\nhtml`\n    <bk-timeline>\n        <bk-timeline-item time="01-01-2020 19:20" variant="success">\n            <h4>Update Github template</h4>\n            <p>Tom committed 01-01-2020 19:20</p>\n        </bk-timeline-item>\n        <bk-timeline-item time="01-01-2020 19:35" variant="success">\n            <h4>Update Github template</h4>\n            <p>Tom committed 01-01-2020 19:35</p>\n        </bk-timeline-item>\n        <bk-timeline-item time="01-01-2020 19:50" variant="danger">\n            <h4>Update Github template</h4>\n            <p>Tom committed 01-01-2020 19:50</p>\n        </bk-timeline-item>\n    </bk-timeline>\n`\n```\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n----------------------------------------------\n\n\n'}}},704:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Alert",(function(){return Alert}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4),types=__webpack_require__(21);__webpack_exports__.default={title:"Components",component:"bk-alert",decorators:[dist.withKnobs],parameters:{notes:'# bk-alert\n\nDisplays important alert messages.\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst onCloseHandler = () => {}\n\nhtml`\n    <bk-alert @bkClosed=${onCloseHandler} variant="danger" shade="light" dismissible="true">\n        This is a message\n    </bk-alert>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description            | Type                                                        | Default     |\n| ------------- | ------------- | ---------------------- | ----------------------------------------------------------- | ----------- |\n| `dismissible` | `dismissible` | Make alert dismissible | `boolean`                                                   | `true`      |\n| `shade`       | `shade`       | Light or dark          | `"dark" \\| "light"`                                         | `\'light\'`   |\n| `variant`     | `variant`     | Type of the alert      | `"danger" \\| "default" \\| "info" \\| "success" \\| "warning"` | `\'default\'` |\n\n\n## Events\n\n| Event      | Description                              | Type                |\n| ---------- | ---------------------------------------- | ------------------- |\n| `bkClosed` | Event fired when close button is clicked | `CustomEvent<null>` |\n\n\n## Slots\n\n| Slot | Description                     |\n| ---- | ------------------------------- |\n|      | Use this to render the content. |\n\n\n----------------------------------------------\n\n\n'}};const Alert=()=>{const variant=Object(dist.select)("variant",types.c,"default"),shade=Object(dist.select)("shade",types.b,"light"),dismissible=Object(dist.boolean)("dismissible",!0);return lit_html.html`
        <bk-alert @bkClosed=${Object(addon_actions_dist.action)("on close event")} variant=${variant} shade=${shade} dismissible=${dismissible}>
            This is a message
        </bk-alert>
    `}},705:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Dropdown",(function(){return Dropdown}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4);__webpack_exports__.default={title:"Components",component:"bk-dropdown",decorators:[dist.withKnobs],parameters:{notes:'# bk-dropdown\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst onOpened = () => {}\n\nconst onClosed = () => {}\n\nhtml`\n    <bk-dropdown\n        open="false"\n        click-outside-to-close="true"\n        disabled="false"\n        @bkOpened=${onOpened}\n        @bkClosed=${onClosed}\n    >\n        <button class="bk-button" slot="control">Click me</button>\n        <div slot="content">Hello world</div>\n    </bk-dropdown>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute                | Description                         | Type      | Default |\n| --------------------- | ------------------------ | ----------------------------------- | --------- | ------- |\n| `clickOutsideToClose` | `click-outside-to-close` | Close the menu when clicked outside | `boolean` | `true`  |\n| `disabled`            | `disabled`               | Enable or disable the dropdown      | `boolean` | `false` |\n| `open`                | `open`                   | Open or close the menu              | `boolean` | `false` |\n\n\n## Events\n\n| Event      | Description          | Type               |\n| ---------- | -------------------- | ------------------ |\n| `bkClosed` | Fired when destroyed | `CustomEvent<any>` |\n| `bkOpened` | Fired when opened    | `CustomEvent<any>` |\n\n\n## Dependencies\n\n### Used by\n\n - [bk-dropdown-list](../DropdownList)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-dropdown-list --\x3e bk-dropdown\n  style bk-dropdown fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const Dropdown=()=>{const disabled=Object(dist.boolean)("disabled",!1),open=Object(dist.boolean)("open",!1),clickOutsideToClose=Object(dist.boolean)("clickOutsideToClose",!0);return lit_html.html`
        <div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
            <bk-dropdown
                open=${open}
                click-outside-to-close=${clickOutsideToClose}
                disabled=${disabled}
                @bkOpened=${Object(addon_actions_dist.action)("opened")}
                @bkClosed=${Object(addon_actions_dist.action)("closed")}
            >
                <button class="bk-button bk-button-text" slot="control">Click me</button>
                <div slot="content">Dropdown content goes here</div>
            </bk-dropdown>
        </div>
    `}},706:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Advanced",(function(){return Advanced}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4),_fixtures_options=__webpack_require__(136);__webpack_exports__.default={title:"Components/DropdownList",component:"bk-dropdown-list",decorators:[dist.withKnobs],parameters:{notes:'# bk-dropdown-list\n\n### Option interface\n\n```javascript\ninterface Option {\n    label: string\n    value: string\n    disabled?: boolean\n}\n\n```\n\n### Basic usage\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst option: Option[] = [\n    {\n        label: \'Apple\',\n        value: \'1\',\n        disabled: true,\n    },\n    {\n        label: \'Orange\',\n        value: \'2\',\n    },\n]\n\nhtml`<bk-dropdown-list\n    disabled="false"\n    searchable="false"\n    options=${JSON.stringify(options)}\n    selected-option=${options[1].value}\n    @bkSelect=${(e: CustomEvent) => console.log(e.detail)}\n>\n    <button class="bk-button" slot="control">\n        Click me\n    </button>\n</bk-dropdown-list>`\n```\n\n### Advanced usage\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst onOptionSelect = (e: CustomEvent) => {\n    const button = document.getElementById(\'control\')\n    button.textContent = `Selected Option: ${e.detail.label}`\n}\n\nhtml`<bk-dropdown-list\n    disabled="false"\n    searchable="false"\n    options=${JSON.stringify(options)}\n    @bkSelect=${onOptionSelect}\n>\n    <button id="control" class="bk-button bk-button--text" slot="control">\n        Select an option\n    </button>\n</bk-dropdown-list>`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                               | Type                  | Default        |\n| ---------------- | ----------------- | --------------------------------------------------------- | --------------------- | -------------- |\n| `disabled`       | `disabled`        | Disable DropdownList                                      | `boolean`             | `false`        |\n| `noOptionText`   | `no-option-text`  | Text to show when no options available                    | `string`              | `\'No options\'` |\n| `options`        | `options`         | Pass stringified object when used with vanilla Javascript | `Option[] \\| string`  | `[]`           |\n| `searchable`     | `searchable`      | With search                                               | `boolean`             | `false`        |\n| `selectedOption` | `selected-option` | Set selected option                                       | `string \\| undefined` | `undefined`    |\n\n\n## Events\n\n| Event      | Description               | Type                  |\n| ---------- | ------------------------- | --------------------- |\n| `bkSelect` | Fired on selecting option | `CustomEvent<Option>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [bk-dropdown](../Dropdown)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-dropdown-list --\x3e bk-dropdown\n  style bk-dropdown-list fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const Basic=()=>{const disabled=Object(dist.boolean)("disabled",!1),searchable=Object(dist.boolean)("searchable",!1),options=Object(dist.object)("option",_fixtures_options),selectedOption=Object(dist.text)("selected-option",_fixtures_options[1].value),bkSelect=Object(addon_actions_dist.action)("bkSelect");return lit_html.html`<div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
        <bk-dropdown-list
            disabled=${disabled}
            searchable=${searchable}
            options=${JSON.stringify(options)}
            selected-option=${selectedOption}
            @bkSelect=${e=>bkSelect(e.detail)}
        >
            <button class="bk-button" slot="control">
                Click me
            </button>
        </bk-dropdown-list>
    </div>`},Advanced=()=>{const disabled=Object(dist.boolean)("disabled",!1),searchable=Object(dist.boolean)("searchable",!1);return lit_html.html`<div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
        <bk-dropdown-list
            disabled=${disabled}
            searchable=${searchable}
            options=${JSON.stringify(_fixtures_options)}
            @bkSelect=${e=>{document.getElementById("control").textContent="You selected "+e.detail.label}}
        >
            <button id="control" class="bk-button bk-button--text" slot="control">
                Select your fruit
            </button>
        </div>
    </div>`}},707:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Modal",(function(){return Modal}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4);__webpack_exports__.default={title:"Components",component:"bk-modal",decorators:[dist.withKnobs],parameters:{notes:'# bk-modal\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst openModal = () => {\n    const modal = document.querySelector(\'bk-modal\') as HTMLElement\n    modal.setAttribute(\'open\', \'true\')\n}\n\nhtml`\n    <button @click=${openModal} class="bk-button">Open Modal</button>\n\n     <bk-modal\n            open="false"\n            header="Hello world"\n            dismissible="true"\n            @bkOpen=${() => {}}\n            @bkOpened=${() => {}}\n            @bkClose=${() => {}}\n            @bkClosed=${() => {}}\n        >\n            <div slot="header">This is header</div>\n            <div slot="body">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum.\n            </div>\n            <div slot="footer" style="text-align: right">\n                <button class="bk-button bk-button--medium">No</button>\n                <button class="bk-button bk-button--primary bk-button--medium">Yes</button>\n            </div>\n    </bk-modal>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description            | Type                  | Default     |\n| ------------- | ------------- | ---------------------- | --------------------- | ----------- |\n| `dismissible` | `dismissible` | Is dismissible or not  | `boolean`             | `true`      |\n| `header`      | `header`      | Header to be shown     | `string \\| undefined` | `undefined` |\n| `open`        | `open`        | Show or hide the modal | `boolean`             | `false`     |\n\n\n## Events\n\n| Event      | Description                        | Type               |\n| ---------- | ---------------------------------- | ------------------ |\n| `bkClose`  | Fired when modal is about to close | `CustomEvent<any>` |\n| `bkClosed` | Fired after modal is closed        | `CustomEvent<any>` |\n| `bkOpen`   | Fired when modal is about to open  | `CustomEvent<any>` |\n| `bkOpened` | Fired after modal is opened        | `CustomEvent<any>` |\n\n\n## Slots\n\n| Slot       | Description                        |\n| ---------- | ---------------------------------- |\n| `"body"`   | Body content of the modal popup.   |\n| `"footer"` | footer content of the modal popup. |\n\n\n----------------------------------------------\n\n\n'}};const Modal=()=>{const open=Object(dist.boolean)("open",!1),header=Object(dist.text)("header","Hello world"),dismissible=Object(dist.boolean)("dismissible",!0);return lit_html.html`
        <div class="bk-row">
            <div class="bk-col-24" style="text-align:center">
                <button @click=${()=>{document.querySelector("bk-modal").setAttribute("open","true")}} class="bk-button">Open Modal</button>
            </div>
        </div>
        <bk-modal
            open=${open}
            header=${header}
            dismissible=${dismissible}
            @bkOpen=${Object(addon_actions_dist.action)("opening")}
            @bkOpened=${Object(addon_actions_dist.action)("opened")}
            @bkClose=${Object(addon_actions_dist.action)("closing")}
            @bkClosed=${Object(addon_actions_dist.action)("closed")}
        >
            <div slot="header">This is header</div>
            <div slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
            <div slot="footer" style="text-align: right">
                <button class="bk-button bk-button--medium">No</button>
                <button class="bk-button bk-button--primary bk-button--medium">Yes</button>
            </div>
        </bk-modal>
    `}},708:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PopConfirm",(function(){return PopConfirm}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4),types=__webpack_require__(21);__webpack_exports__.default={title:"Components",component:"bk-pop-confirm",decorators:[dist.withKnobs],parameters:{notes:'# bk-popconfirm\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst onConfirmed = () => {}\n\nconst onCancelled = () => {}\n\nhtml`\n    <bk-pop-confirm\n        confirm-button-text="Confirm"\n        cancel-button-text="Cancel"\n        confirm-button-variant="primary"\n        cancel-button-variant="default"\n        message="Are you sure, you want to delete this?"\n        disabled="false"\n        @bkConfirmed=${onConfirmed}\n        @bkCancelled=${onCancelled}\n    >\n        <button class="bk-button">Delete</button>\n    </bk-pop-confirm>\n`\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property               | Attribute                | Description               | Type                                                                               | Default     |\n| ---------------------- | ------------------------ | ------------------------- | ---------------------------------------------------------------------------------- | ----------- |\n| `cancelButtonText`     | `cancel-button-text`     | Cancel button text        | `string`                                                                           | `\'Cancel\'`  |\n| `cancelButtonVariant`  | `cancel-button-variant`  | Cancel button variant     | `"danger" \\| "default" \\| "info" \\| "primary" \\| "success" \\| "text" \\| "warning"` | `\'default\'` |\n| `confirmButtonText`    | `confirm-button-text`    | Confirm button text       | `string`                                                                           | `\'Confirm\'` |\n| `confirmButtonVariant` | `confirm-button-variant` | Confirm button variant    | `"danger" \\| "default" \\| "info" \\| "primary" \\| "success" \\| "text" \\| "warning"` | `\'primary\'` |\n| `disabled`             | `disabled`               | Enable or disable popover | `boolean`                                                                          | `false`     |\n| `message`              | `message`                | Message to show           | `string \\| undefined`                                                              | `undefined` |\n\n\n## Events\n\n| Event         | Description       | Type               |\n| ------------- | ----------------- | ------------------ |\n| `bkCancelled` | on cancel action  | `CustomEvent<any>` |\n| `bkConfirmed` | on confirm action | `CustomEvent<any>` |\n\n\n## Slots\n\n| Slot | Description                  |\n| ---- | ---------------------------- |\n|      | Triggering control goes here |\n\n\n## Dependencies\n\n### Depends on\n\n- [bk-popover](../Popover)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-pop-confirm --\x3e bk-popover\n  style bk-pop-confirm fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const PopConfirm=()=>{const message=Object(dist.text)("message","Are you sure, you want to delete this?"),confirmButtonText=Object(dist.text)("confirm-button-text","Confirm"),cancelButtonText=Object(dist.text)("cancel-button-text","Cancel"),confirmButtonVariant=Object(dist.select)("confirm-button-variant",types.a,"primary"),cancelButtonVariant=Object(dist.select)("cancel-button-variant",types.a,"default"),disabled=Object(dist.boolean)("disabled",!1);return lit_html.html`
        <div style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center">
            <bk-pop-confirm
                confirm-button-text=${confirmButtonText}
                cancel-button-text=${cancelButtonText}
                confirm-button-variant=${confirmButtonVariant}
                cancel-button-variant=${cancelButtonVariant}
                message=${message}
                disabled=${disabled}
                @bkConfirmed=${Object(addon_actions_dist.action)("confirmed")}
                @bkCancelled=${Object(addon_actions_dist.action)("cancelled")}
                ><button class="bk-button" slot="control">Delete</button>
            </bk-pop-confirm>
        </div>
    `}},709:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Slider",(function(){return Slider}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4),types=__webpack_require__(21);__webpack_exports__.default={title:"Components",component:"bk-slider",decorators:[dist.withKnobs],parameters:{notes:'# bk-slider\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute      | Description                    | Type                                                        | Default     |\n| ------------- | -------------- | ------------------------------ | ----------------------------------------------------------- | ----------- |\n| `disabled`    | `disabled`     | Enable or disable slider       | `boolean`                                                   | `false`     |\n| `showTooltip` | `show-tooltip` | Show or hide the tooltip       | `boolean`                                                   | `true`      |\n| `step`        | `step`         | Set the stepper for the slider | `number`                                                    | `1`         |\n| `value`       | `value`        | Set value                      | `number`                                                    | `0`         |\n| `variant`     | `variant`      | Type of the slider             | `"danger" \\| "default" \\| "info" \\| "success" \\| "warning"` | `\'default\'` |\n\n\n## Events\n\n| Event      | Description              | Type               |\n| ---------- | ------------------------ | ------------------ |\n| `bkChange` | Fired when value changed | `CustomEvent<any>` |\n\n\n## Dependencies\n\n### Depends on\n\n- [bk-popover](../Popover)\n\n### Graph\n```mermaid\ngraph TD;\n  bk-slider --\x3e bk-popover\n  style bk-slider fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}};const Slider=()=>{const variant=Object(dist.select)("variant",types.c,"default"),disabled=Object(dist.boolean)("disabled",!1),value=Object(dist.number)("value",25),step=Object(dist.number)("step",1),showTooltip=Object(dist.boolean)("show-tooltip",!0);return lit_html.html`
        <bk-slider
            value=${value}
            disabled=${disabled}
            variant=${variant}
            step=${step}
            show-tooltip=${showTooltip}
            @bkChange=${Object(addon_actions_dist.action)("state changed")}
        />
    `}},710:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Switch",(function(){return Switch}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0),addon_actions_dist=__webpack_require__(4),types=__webpack_require__(21);__webpack_exports__.default={title:"Components",component:"bk-switch",decorators:[dist.withKnobs],parameters:{notes:'# bk-switch\n\nSwitch is used for switching between two opposing states. Font size can be used to adjust the size of the switch.\n\n```javascript\nimport { html } from \'lit-html\'\n\nconst onChangeHandler = (e: CustomEvent) => {\n    console.log(e.detail)\n}\n\nhtml`<bk-switch is-on="false" disabled="false" @bkChange=${onChangeHandler} /> `\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                     | Type                                                        | Default     |\n| ---------- | ---------- | ------------------------------- | ----------------------------------------------------------- | ----------- |\n| `disabled` | `disabled` | Enable or disable switch        | `boolean`                                                   | `false`     |\n| `isOn`     | `is-on`    | Set default state of the switch | `boolean`                                                   | `false`     |\n| `variant`  | `variant`  | Type of the alert               | `"danger" \\| "default" \\| "info" \\| "success" \\| "warning"` | `\'default\'` |\n\n\n## Events\n\n| Event      | Description                 | Type                    |\n| ---------- | --------------------------- | ----------------------- |\n| `bkChange` | Fired on every state change | `CustomEvent<AVChange>` |\n\n\n----------------------------------------------\n\n\n'}};const Switch=()=>{const isOn=Object(dist.boolean)("is-on",!1),disabled=Object(dist.boolean)("disabled",!1),variant=Object(dist.select)("variant",types.c,"default");return lit_html.html`<div
        style="display:flex; width: 100%; height: 300px; justify-content: center; align-items: center; font-size: 30px"
    >
        <bk-switch variant=${variant} is-on=${isOn} disabled=${disabled} @bkChange=${Object(addon_actions_dist.action)("state changed")} />
    </div> `}},711:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Toast",(function(){return Toast}));var lit_html=__webpack_require__(2),dist=__webpack_require__(0);__webpack_exports__.default={title:"Components/Toast",component:"bk-toast",decorators:[dist.withKnobs],parameters:{notes:"# bk-toast\n\nDisplays a global notification message at a corner of the page.\nEach message can be added to the Toast component by dispatching a custom event on the Toast component.\n\n```javascript\nimport { html } from 'lit-html'\n\ntype Variants = 'danger' | 'warning' | 'success' | 'info' | 'default'\n\ninterface ToastMessage {\n    title?: string\n    message: string\n    variant?: Variants\n    dismissible?: boolean\n}\n\nconst addToast = () => {\n  const toastContainer = document.getElementById('toastContainer')\n\n  const toast: ToastMessage = {\n    title: 'Title goes here',\n    message: 'Content goes here',\n    variant: 'danger',\n    dismissible: true,\n  }\n\n  toastContainer.dispatchEvent(\n    new CustomEvent('$bkToast', {\n      detail: toast,\n    })\n  )\n}\n\nhtml`\n  <button @click=${addToast} class=\"bk-button\">Add Toast</button>\n  <bk-toast id=\"toastContainer\"/>\n'\n```\n\n&nbsp;\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                | Attribute                 | Description                                                                       | Type                                                           | Default                   |\n| ----------------------- | ------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------- |\n| `hideAfter`             | `hide-after`              | When provided, the toast will auto close after the specified time. (milliseconds) | `number`                                                       | `Constant.HIDE_AFTER`     |\n| `position`              | `position`                | Position of the toast                                                             | `\"bottom-left\" \\| \"bottom-right\" \\| \"top-left\" \\| \"top-right\"` | `Constant.POSITION`       |\n| `transitionInDuration`  | `transition-in-duration`  | Transition in duration  (milliseconds)                                            | `number`                                                       | `Constant.TRANSITION_IN`  |\n| `transitionOutDuration` | `transition-out-duration` | Transition out duration  (milliseconds)                                           | `number`                                                       | `Constant.TRANSITION_OUT` |\n\n\n----------------------------------------------\n\n\n"}};const Toast=()=>{const transitionInDuration=Object(dist.number)("transition-in-duration",500),transitionOutDuration=Object(dist.number)("transition-out-duration",300),hideAfter=Object(dist.number)("hide-after",4e3),position=Object(dist.select)("position",["top-left","top-right","bottom-left","bottom-right"],"top-right"),toast=Object(dist.object)("toast",{title:"Title goes here",message:"Content goes here",variant:"danger",dismissible:!0});return lit_html.html`
        <button @click=${()=>{document.getElementById("toastContainer").dispatchEvent(new CustomEvent("$bkToast",{detail:toast}))}} class="bk-button">Add Toast</button>
        <bk-toast
            id="toastContainer"
            transition-in-duration=${transitionInDuration}
            transition-out-duration=${transitionOutDuration}
            hide-after=${hideAfter}
            position=${position}
        />
    `}}},[[314,1,2]]]);
//# sourceMappingURL=main.de841e14cbc3fdf048e7.bundle.js.map