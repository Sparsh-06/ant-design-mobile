(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("/r+8"),n=a("Vhn3"),c=a("ahKI"),r=a.n(c),o=a("vumQ"),i=a("j+4G");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,m=void 0===c||c,u=Object(i["useCopy"])(),d=Object(n["a"])(u,2),s=d[0],E=d[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],Object(l["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:l},m&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",o({token:e,key:t}))))))))})))}},CUj7:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("bIC1"),r=a.n(c);a("tkuz");function o(e,t){return s(e)||d(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,c=[],r=!0,o=!1;try{for(a=a.call(e);!(r=(l=a.next()).done);r=!0)if(c.push(l.value),t&&c.length===t)break}catch(i){o=!0,n=i}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw n}}return c}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),c=Object(l["useState"])(!1),i=o(c,2),m=i[0],u=i[1],d=Object(l["useState"])(!1),s=o(d,2),E=s[0],v=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=r()((function(){u(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var l=a("/r+8"),n=a("ahKI"),c=a.n(n);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return p}));var l=a("ahKI"),n=a.n(l),c=a("Vhn3"),r=a("/7QA"),o=a("9kvl"),i=a("j+4G"),m=a("Bjia");a("YWOM");function u(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var d=e=>{var t=Object(l["useRef"])(null),a=Object(l["useContext"])(i["context"]),d=a.locale,s=Object(i["useLocaleProps"])(d,e),E=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(s.identifier),v=1===Object.keys(s.sources).length,h=Object(i["useMotions"])(s.motions||[],t.current),f=Object(c["a"])(h,2),b=f[0],p=f[1],g=Object(i["useCopy"])(),w=Object(c["a"])(g,2),y=w[0],k=w[1],_=Object(l["useState"])("_"),j=Object(c["a"])(_,2),N=j[0],O=j[1],C=Object(l["useState"])(u(N,s.sources[N])),x=Object(c["a"])(C,2),L=x[0],A=x[1],M=s.sources[N][L]||s.sources[N].content,I=Object(i["useTSPlaygroundUrl"])(d,M),V=Object(i["usePrefersColor"])(),Z=Object(c["a"])(V,1);Z[0];function K(e){O(e),A(u(e,s.sources[e]))}return n.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&n.a.createElement(i["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:p,onClick:()=>b()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>y(M)}),"tsx"===L&&n.a.createElement(i["Link"],{target:"_blank",to:I},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!v&&n.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:N,onChange:K},Object.keys(s.sources).map((e=>n.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(u(e,s.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(m["a"],{code:M,lang:L,showCopy:!1}))))},s=d,E=(a("oeoJ"),a("NEWu")),v=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),o=Object(c["a"])(a,2),m=o[0],u=o[1],d=Object(i["usePrefersColor"])(),s=Object(c["a"])(d,1),v=s[0],p=Object(l["useContext"])(i["context"]),g=p.config.mode;return Object(l["useEffect"])((()=>{u(Math.random())}),[v]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:m}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>u(Math.random())},h),n.a.createElement(r["Popover"],{content:n.a.createElement(E["a"],{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,f)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},b)))}),h=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),b=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),p="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(s,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(v,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("eqKt"),r=a.n(c),o=e=>n.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:r.a.content},n.a.createElement("div",{className:r.a.title},e.title),n.a.createElement("div",{className:r.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var l=a("Vhn3"),n=a("ahKI"),c=a.n(n),r=a("j+4G"),o=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(r["context"]),t=e.locale,a=Object(n["useState"])(!1),i=Object(l["a"])(a,2),m=i[0],u=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:m,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},tkuz:function(e,t,a){},vfvj:function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),c=a("j+4G"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia"),a("0m3q"),a("CUj7")),i=n.a.memo((e=>{var t=e.demos,a=t["collapse-demo1"].component,l=t["collapse-demo2"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"collapse-\u6298\u53e0\u9762\u677f"},n.a.createElement(c["AnchorLink"],{to:"#collapse-\u6298\u53e0\u9762\u677f","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Collapse \u6298\u53e0\u9762\u677f"),n.a.createElement("p",null,"\u53ef\u4ee5\u6298\u53e0/\u5c55\u5f00\u7684\u5185\u5bb9\u533a\u57df\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(c["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5bf9\u590d\u6742\u533a\u57df\u8fdb\u884c\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u4fdd\u6301\u9875\u9762\u7684\u6574\u6d01\u3002"),n.a.createElement("li",null,"\u624b\u98ce\u7434\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6298\u53e0\u9762\u677f\uff0c\u53ea\u5141\u8bb8\u5355\u4e2a\u5185\u5bb9\u533a\u57df\u5c55\u5f00\u3002")),n.a.createElement("h2",{id:"\u793a\u4f8b"},n.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(r["default"],t["collapse-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(r["default"],t["collapse-demo2"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"collapse"},n.a.createElement(c["AnchorLink"],{to:"#collapse","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Collapse"),n.a.createElement("h3",{id:"\u5c5e\u6027"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"accordion"),n.a.createElement("td",null,"\u662f\u5426\u5f00\u542f\u624b\u98ce\u7434\u6a21\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"activeKey"),n.a.createElement("td",null,"\u5f53\u524d\u5c55\u5f00\u9762\u677f\u7684 ",n.a.createElement("code",null,"key")),n.a.createElement("td",null,"\u624b\u98ce\u7434\u6a21\u5f0f\uff1a",n.a.createElement("code",null,"string | null")," ",n.a.createElement("br",null),"\u975e\u624b\u98ce\u7434\u6a21\u5f0f\uff1a",n.a.createElement("code",null,"string[]")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"arrow"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u7bad\u5934\uff0c\u5982\u679c\u662f ReactNode\uff0c\u90a3\u4e48 antd-mobile \u4f1a\u81ea\u52a8\u4e3a\u4f60\u589e\u52a0\u65cb\u8f6c\u52a8\u753b\u6548\u679c"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode | ((active: boolean) => React.ReactNode)")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultActiveKey"),n.a.createElement("td",null,"\u9ed8\u8ba4\u5c55\u5f00\u9762\u677f\u7684 ",n.a.createElement("code",null,"key")),n.a.createElement("td",null,"\u624b\u98ce\u7434\u6a21\u5f0f\uff1a",n.a.createElement("code",null,"string | null")," ",n.a.createElement("br",null),"\u975e\u624b\u98ce\u7434\u6a21\u5f0f\uff1a",n.a.createElement("code",null,"string[]")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"\u5207\u6362\u9762\u677f\u65f6\u89e6\u53d1"),n.a.createElement("td",null,"\u624b\u98ce\u7434\u6a21\u5f0f\uff1a",n.a.createElement("code",null,"(activeKey: string | null) => void")," ",n.a.createElement("br",null)," \u975e\u624b\u98ce\u7434\u6a21\u5f0f\uff1a",n.a.createElement("code",null,"(activeKey: string[]) => void")),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"collapsepanel"},n.a.createElement(c["AnchorLink"],{to:"#collapsepanel","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Collapse.Panel"),n.a.createElement("h3",{id:"\u5c5e\u6027-1"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"arrow"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u7bad\u5934"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode | ((active: boolean) => React.ReactNode)")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"destroyOnClose"),n.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u662f\u5426\u4e3a\u7981\u7528\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"forceRender"),n.a.createElement("td",null,"\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 ",n.a.createElement("code",null,"DOM")," \u7ed3\u6784"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"key"),n.a.createElement("td",null,"\u552f\u4e00\u6807\u8bc6\u7b26"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"\u6807\u9898\u680f\u7684\u70b9\u51fb\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"(event: React.MouseEvent<Element, MouseEvent>) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"\u6807\u9898\u680f\u5de6\u4fa7\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(i,{demos:a})}}}]);