(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("/r+8"),n=a("Vhn3"),r=a("ahKI"),c=a.n(r),m=a("vumQ"),i=a("j+4G");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,o=void 0===r||r,u=Object(i["useCopy"])(),d=Object(n["a"])(u,2),s=d[0],E=d[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(m["a"],Object(l["a"])({},m["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,r=e.getLineProps,m=e.getTokenProps;return c.a.createElement("pre",{className:a,style:l},o&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",m({token:e,key:t}))))))))})))}},CUj7:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("bIC1"),c=a.n(r);a("tkuz");function m(e,t){return s(e)||d(e,t)||o(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(i){m=!0,n=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),i=m(r,2),o=i[0],u=i[1],d=Object(l["useState"])(!1),s=m(d,2),E=s[0],h=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":o||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},"MO/f":function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),r=a("j+4G"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),m=(a("gKi5"),a("Bjia")),i=(a("0m3q"),a("CUj7")),o=n.a.memo((e=>{var t=e.demos,a=t["image-viewer-demo1"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"imageviewer-\u56fe\u7247\u67e5\u770b\u5668"},n.a.createElement(r["AnchorLink"],{to:"#imageviewer-\u56fe\u7247\u67e5\u770b\u5668","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ImageViewer \u56fe\u7247\u67e5\u770b\u5668"),n.a.createElement("p",null,"\u901a\u8fc7\u653e\u5927\u67e5\u770b\u56fe\u7247\u5168\u8c8c\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("p",null,"\u9700\u8981\u70b9\u5f00\u56fe\u7247\u67e5\u770b\u7ec6\u8282\uff0c\u914d\u5408\u7f29\u7565\u56fe\u4f7f\u7528\u3002"),n.a.createElement("h2",{id:"\u793a\u4f8b"},n.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(c["default"],t["image-viewer-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"imageviewer"},n.a.createElement(r["AnchorLink"],{to:"#imageviewer","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ImageViewer"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"afterClose"),n.a.createElement("td",null,"\u5b8c\u5168\u5173\u95ed\u540e\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"getContainer"),n.a.createElement("td",null,"\u6307\u5b9a\u6302\u8f7d\u7684 HTML \u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a ",n.a.createElement("code",null,"body"),"\uff0c\u5982\u679c\u4e3a ",n.a.createElement("code",null,"null")," \u7684\u8bdd\uff0c\u4f1a\u6e32\u67d3\u5230\u5f53\u524d\u8282\u70b9"),n.a.createElement("td",null,n.a.createElement("code",null,"HTMLElement | () => HTMLElement | null")),n.a.createElement("td",null,n.a.createElement("code",null,"document.body"))),n.a.createElement("tr",null,n.a.createElement("td",null,"image"),n.a.createElement("td",null,"\u56fe\u7247\u8d44\u6e90\u7684 ",n.a.createElement("code",null,"url")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"maxZoom"),n.a.createElement("td",null,"\u6700\u5927\u7f29\u653e\u6bd4\u4f8b"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"3"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onClose"),n.a.createElement("td",null,"\u5173\u95ed\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"renderFooter"),n.a.createElement("td",null,"\u6e32\u67d3\u5e95\u90e8\u989d\u5916\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"(image: string) => ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"visible"),n.a.createElement("td",null,"\u662f\u5426\u663e\u793a"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h2",{id:"imageviewermulti"},n.a.createElement(r["AnchorLink"],{to:"#imageviewermulti","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ImageViewer.Multi"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"defaultIndex"),n.a.createElement("td",null,"\u9ed8\u8ba4\u663e\u793a\u7b2c\u51e0\u5f20\u56fe\u7247"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"images"),n.a.createElement("td",null,"\u56fe\u7247\u8d44\u6e90\u7684 url \u5217\u8868"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onIndexChange"),n.a.createElement("td",null,"\u5207\u6362\u56fe\u7247\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(index: number) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"renderFooter"),n.a.createElement("td",null,"\u6e32\u67d3\u5e95\u90e8\u989d\u5916\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"(image: string, index: number) => ReactNode")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,"\u5176\u4ed6\u5c5e\u6027\u540c ",n.a.createElement("code",null,"ImageViewer"),"\uff0c\u4f46\u662f\u53bb\u6389\u4e86 ",n.a.createElement("code",null,"image")," \u5c5e\u6027\u3002"),n.a.createElement("h3",{id:"ref"},n.a.createElement(r["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"swipeTo"),n.a.createElement("td",null,"\u5207\u6362\u5230\u6307\u5b9a\u7d22\u5f15"),n.a.createElement("td",null,n.a.createElement("code",null,"(index: number, immediate: boolean) => void"))))),n.a.createElement("h2",{id:"\u6307\u4ee4\u5f0f"},n.a.createElement(r["AnchorLink"],{to:"#\u6307\u4ee4\u5f0f","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4\u5f0f"),n.a.createElement("p",null,"\u76f8\u6bd4\u4e8e\u4e0a\u6587\u4e2d\u7ec4\u4ef6\u5f0f\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u6307\u4ee4\u5f0f\u66f4\u52a0\u65b9\u4fbf\u4e5f\u66f4\u52a0\u5e38\u7528\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u90fd\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff1a"),n.a.createElement(m["a"],{code:"const handler = ImageViewer.show(props)\nconst handlerMulti = ImageViewer.Multi.show(props)",lang:"ts"}),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",n.a.createElement("code",null,"ImageViewer")," \u4e0a\u7684 ",n.a.createElement("code",null,"show")," \u65b9\u6cd5\u76f4\u63a5\u8fdb\u5165\u56fe\u7247\u67e5\u770b\u3002\u5176\u4e2d ",n.a.createElement("code",null,"props")," \u53c2\u6570\u7684\u7c7b\u578b\u540c\u4e0a\u8868\uff0c\u4f46\u4e0d\u652f\u6301\u4f20\u5165 ",n.a.createElement("code",null,"visible")," \u5c5e\u6027\u3002\u5f53\u67e5\u770b\u5668\u88ab\u5173\u95ed\u540e\uff0c\u7ec4\u4ef6\u5b9e\u4f8b\u4f1a\u81ea\u52a8\u9500\u6bc1\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"show")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a\u7ec4\u4ef6\u63a7\u5236\u5668\uff0c\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"close"),n.a.createElement("td",null,"\u5173\u95ed\u56fe\u7247\u67e5\u770b\u5668"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))))),n.a.createElement("p",null,"\u5982\u679c\u4f60\u60f3\u5173\u95ed\u5168\u90e8\u901a\u8fc7\u6307\u4ee4\u5f0f\u521b\u5efa\u51fa\u6765\u7684 ImageViewer\uff0c\u53ef\u4ee5\u8c03\u7528 ",n.a.createElement("code",null,"ImageViewer.clear()"),"\u3002"),n.a.createElement("h2",{id:"faq"},n.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"FAQ"),n.a.createElement("h3",{id:"\u4e3a\u4ec0\u4e48\u6211\u66f4\u65b0\u4e86-defaultindex-\u7684\u503c\u4f46\u662f-imageviewermulti-\u663e\u793a\u7684\u56fe\u7247\u5e76\u6ca1\u6709\u5207\u6362"},n.a.createElement(r["AnchorLink"],{to:"#\u4e3a\u4ec0\u4e48\u6211\u66f4\u65b0\u4e86-defaultindex-\u7684\u503c\u4f46\u662f-imageviewermulti-\u663e\u793a\u7684\u56fe\u7247\u5e76\u6ca1\u6709\u5207\u6362","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4ec0\u4e48\u6211\u66f4\u65b0\u4e86 ",n.a.createElement("code",null,"defaultIndex")," \u7684\u503c\uff0c\u4f46\u662f ImageViewer.Multi \u663e\u793a\u7684\u56fe\u7247\u5e76\u6ca1\u6709\u5207\u6362\uff1f"),n.a.createElement("p",null,"ImageViewer.Multi \u662f\u4e00\u4e2a",n.a.createElement(r["Link"],{to:"https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components"},"\u975e\u53d7\u63a7"),"\u7684\u7ec4\u4ef6\uff0c",n.a.createElement("code",null,"defaultIndex")," \u53ea\u4f1a\u5728\u7ec4\u4ef6\u52a0\u8f7d\u7684\u65f6\u5019\u8bfb\u53d6\u4e00\u6b21\uff0c\u5728\u6b64\u4e4b\u540e\uff0c\u5982\u679c\u4f60\u4fee\u6539\u4e86 ",n.a.createElement("code",null,"defaultIndex")," \u7684\u503c\uff0c\u5e76\u4e0d\u4f1a\u5bf9\u7ec4\u4ef6\u6709\u4efb\u4f55\u7684\u5f71\u54cd\u3002\u56e0\u6b64\uff0c\u4e0b\u9762\u8fd9\u79cd\u5199\u6cd5\u5e76\u4e0d\u80fd\u8d77\u5230\u5207\u6362\u56fe\u7247\u7684\u6548\u679c\uff1a"),n.a.createElement(m["a"],{code:"<Button\n  onClick={() => {\n    setIndex(i => i + 1)\n  }}\n>\n  Next\n</Button>\n\n<ImageViewer.Multi\n  images={images}\n  defaultIndex={index}\n/>",lang:"jsx"}),n.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ref \u6765\u5bf9 ImageViewer.Multi \u8fdb\u884c\u624b\u52a8\u7684\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",n.a.createElement("code",null,"ImageViewer.show()"),"\u3002"))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:a})}},N0lm:function(e,t,a){"use strict";var l=a("/r+8"),n=a("ahKI"),r=a.n(n);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return g}));var l=a("ahKI"),n=a.n(l),r=a("Vhn3"),c=a("/7QA"),m=a("9kvl"),i=a("j+4G"),o=a("Bjia");a("YWOM");function u(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var d=e=>{var t=Object(l["useRef"])(null),a=Object(l["useContext"])(i["context"]),d=a.locale,s=Object(i["useLocaleProps"])(d,e),E=(null===m["a"]||void 0===m["a"]?void 0:m["a"].location.hash)==="#".concat(s.identifier),h=1===Object.keys(s.sources).length,v=Object(i["useMotions"])(s.motions||[],t.current),f=Object(r["a"])(v,2),b=f[0],g=f[1],p=Object(i["useCopy"])(),w=Object(r["a"])(p,2),k=w[0],_=w[1],y=Object(l["useState"])("_"),j=Object(r["a"])(y,2),x=j[0],I=j[1],N=Object(l["useState"])(u(x,s.sources[x])),O=Object(r["a"])(N,2),V=O[0],C=O[1],L=s.sources[x][V]||s.sources[x].content,M=Object(i["useTSPlaygroundUrl"])(d,L),A=Object(i["usePrefersColor"])(),Z=Object(r["a"])(A,1);Z[0];function S(e){I(e),C(u(e,s.sources[e]))}return n.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&n.a.createElement(i["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:g,onClick:()=>b()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":_,onClick:()=>k(L)}),"tsx"===V&&n.a.createElement(i["Link"],{target:"_blank",to:M},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&n.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:x,onChange:S},Object.keys(s.sources).map((e=>n.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(u(e,s.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(o["a"],{code:L,lang:V,showCopy:!1}))))},s=d,E=(a("oeoJ"),a("NEWu")),h=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),m=Object(r["a"])(a,2),o=m[0],u=m[1],d=Object(i["usePrefersColor"])(),s=Object(r["a"])(d,1),h=s[0],g=Object(l["useContext"])(i["context"]),p=g.config.mode;return Object(l["useEffect"])((()=>{u(Math.random())}),[h]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":p},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:o}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>u(Math.random())},v),n.a.createElement(c["Popover"],{content:n.a.createElement(E["a"],{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,f)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},b)))}),v=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),b=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),g="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(s,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(h,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("eqKt"),c=a.n(r),m=e=>n.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:c.a.content},n.a.createElement("div",{className:c.a.title},e.title),n.a.createElement("div",{className:c.a.description},e.description)));t["a"]=m},mVOg:function(e,t,a){"use strict";var l=a("Vhn3"),n=a("ahKI"),r=a.n(n),c=a("j+4G"),m=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(c["context"]),t=e.locale,a=Object(n["useState"])(!1),i=Object(l["a"])(a,2),o=i[0],u=i[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(m["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:o,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},tkuz:function(e,t,a){}}]);