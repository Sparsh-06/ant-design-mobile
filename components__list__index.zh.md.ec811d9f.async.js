(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("/r+8"),n=a("Vhn3"),r=a("ahKI"),c=a.n(r),m=a("vumQ"),o=a("j+4G");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,i=void 0===r||r,d=Object(o["useCopy"])(),u=Object(n["a"])(d,2),s=u[0],E=u[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(m["a"],Object(l["a"])({},m["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,r=e.getLineProps,m=e.getTokenProps;return c.a.createElement("pre",{className:a,style:l},i&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",m({token:e,key:t}))))))))})))}},CUj7:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("bIC1"),c=a.n(r);a("tkuz");function m(e,t){return s(e)||u(e,t)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(o){m=!0,n=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),o=m(r,2),i=o[0],d=o[1],u=Object(l["useState"])(!1),s=m(u,2),E=s[0],h=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":i||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var l=a("/r+8"),n=a("ahKI"),r=a.n(n);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},eTST:function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),r=a("j+4G"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),m=(a("gKi5"),a("Bjia"),a("0m3q"),a("CUj7")),o=n.a.memo((e=>{var t=e.demos,a=t["list-demo1"].component,l=t["list-demo3"].component,o=t["list-demo2"].component,i=t["list-demo4"].component,d=t["list-demo5"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"list-\u5217\u8868"},n.a.createElement(r["AnchorLink"],{to:"#list-\u5217\u8868","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"List \u5217\u8868"),n.a.createElement("p",null,"\u901a\u7528\u5217\u8868\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("p",null,"\u4ee5\u5217\u8868\u7684\u5f62\u5f0f\u5e72\u51c0\u9ad8\u6548\u7684\u627f\u8f7d\u6587\u5b57\u3001\u5217\u8868\u3001\u56fe\u7247\u3001\u6bb5\u843d\u7b49\u3002"),n.a.createElement("h2",{id:"\u793a\u4f8b"},n.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(c["default"],t["list-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(c["default"],t["list-demo3"].previewerProps,n.a.createElement(l,null)),n.a.createElement(c["default"],t["list-demo2"].previewerProps,n.a.createElement(o,null)),n.a.createElement(c["default"],t["list-demo4"].previewerProps,n.a.createElement(i,null)),n.a.createElement(c["default"],t["list-demo5"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"list"},n.a.createElement(r["AnchorLink"],{to:"#list","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"List"),n.a.createElement("h3",{id:"\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"header"),n.a.createElement("td",null,"\u6807\u9898\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"mode"),n.a.createElement("td",null,"\u652f\u6301\u9ed8\u8ba4\u548c\u5361\u7247\u4e24\u79cd\u6a21\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"'default' | 'card'")),n.a.createElement("td",null,n.a.createElement("code",null,"'default'"))))),n.a.createElement("h3",{id:"css-\u53d8\u91cf"},n.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"--active-background-color"),n.a.createElement("td",null,"\u70b9\u51fb\u65f6\u7684\u80cc\u666f\u989c\u8272"),n.a.createElement("td",null,n.a.createElement("code",null,"var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--align-items"),n.a.createElement("td",null,"\u5217\u8868\u9879\u7684 ",n.a.createElement(r["Link"],{to:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},"align-item")),n.a.createElement("td",null,n.a.createElement("code",null,"center"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--border-bottom"),n.a.createElement("td",null,"\u5217\u8868\u5bb9\u5668\u5e95\u90e8\u7684\u8fb9\u6846\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"solid 1px var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--border-inner"),n.a.createElement("td",null,"\u5217\u8868\u9879\u5e95\u90e8\u7684\u8fb9\u6846\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"solid 1px var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--border-top"),n.a.createElement("td",null,"\u5217\u8868\u5bb9\u5668\u9876\u90e8\u7684\u8fb9\u6846\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"solid 1px var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--extra-max-width"),n.a.createElement("td",null,"extra \u90e8\u5206\u7684\u6700\u5927\u5bbd\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"70%"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--font-size"),n.a.createElement("td",null,"Body \u5185\u5bb9\u7684\u5b57\u4f53\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"17px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--header-font-size"),n.a.createElement("td",null,"\u5934\u90e8\u7684\u5b57\u4f53\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"15px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--padding-left"),n.a.createElement("td",null,"\u5217\u8868\u9879\u548c\u5217\u8868\u5934\u90e8\u5de6\u4fa7\u7684 padding"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--padding-right"),n.a.createElement("td",null,"\u5217\u8868\u9879\u548c\u5217\u8868\u5934\u90e8\u53f3\u4fa7\u7684 padding"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--prefix-padding-right"),n.a.createElement("td",null,"prefix \u90e8\u5206\u7684\u53f3\u4fa7 padding"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--prefix-width"),n.a.createElement("td",null,"prefix \u90e8\u5206\u7684\u5bbd\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"auto"))))),n.a.createElement("h3",{id:"ref"},n.a.createElement(r["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"nativeElement"),n.a.createElement("td",null,"\u539f\u59cb div \u5143\u7d20"),n.a.createElement("td",null,n.a.createElement("code",null,"HTMLDivElement")," | ",n.a.createElement("code",null,"null"))))),n.a.createElement("h2",{id:"listitem"},n.a.createElement(r["AnchorLink"],{to:"#listitem","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"List.Item"),n.a.createElement("h3",{id:"\u5c5e\u6027-1"},n.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"arrow"),n.a.createElement("td",null,"\u53f3\u4fa7\u662f\u5426\u663e\u793a\u7bad\u5934\u56fe\u6807\uff0c\u4e5f\u652f\u6301\u4f20\u5165 ",n.a.createElement("code",null,"ReactNode")," \u6765\u81ea\u5b9a\u4e49\u56fe\u6807"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean | ReactNode")),n.a.createElement("td",null,"\u9ed8\u8ba4\u548c ",n.a.createElement("code",null,"clickable")," \u7684\u503c\u4fdd\u6301\u4e00\u81f4")),n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"\u5217\u8868\u9879\u4e2d\u95f4\u7684\u4e3b\u5185\u5bb9\u533a\u57df"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"clickable"),n.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u70b9\u51fb\u6548\u679c"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"\u5f53 ",n.a.createElement("code",null,"onClick")," \u5c5e\u6027\u5b58\u5728\u65f6\uff0c\u9ed8\u8ba4\u4e3a ",n.a.createElement("code",null,"true"),"\uff0c\u5426\u5219\u9ed8\u8ba4\u4e3a ",n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"description"),n.a.createElement("td",null,"\u5217\u8868\u9879\u4e2d\u95f4\u4e0b\u90e8\u7684\u63cf\u8ff0\u533a\u57df"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"extra"),n.a.createElement("td",null,"\u5217\u8868\u9879\u53f3\u4fa7\u533a\u57df"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"\u5217\u8868\u9879\u7684\u70b9\u51fb\u4e8b\u4ef6\uff0c\u5f53\u8bbe\u7f6e\u4e86 ",n.a.createElement("code",null,"onClick")," \u5c5e\u6027\u65f6\uff0c\u5217\u8868\u9879\u4f1a\u6709\u70b9\u51fb\u6548\u679c"),n.a.createElement("td",null,n.a.createElement("code",null,"(e: React.MouseEvent) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"prefix"),n.a.createElement("td",null,"\u5217\u8868\u9879\u5de6\u4fa7\u533a\u57df"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"\u5217\u8868\u9879\u4e2d\u95f4\u4e0a\u90e8\u7684\u6807\u9898\u533a\u57df"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"css-\u53d8\u91cf-1"},n.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement("p",null,"\u652f\u6301 List \u4e2d\u7684 ",n.a.createElement("code",null,"--prefix-width"),"\u3001",n.a.createElement("code",null,"--active-background-color"),"\u3001",n.a.createElement("code",null,"--align-items")),n.a.createElement("h2",{id:"faq"},n.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"FAQ"),n.a.createElement("h3",{id:"\u5217\u8868\u80fd\u5426\u652f\u6301\u865a\u62df\u6eda\u52a8"},n.a.createElement(r["AnchorLink"],{to:"#\u5217\u8868\u80fd\u5426\u652f\u6301\u865a\u62df\u6eda\u52a8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5217\u8868\u80fd\u5426\u652f\u6301\u865a\u62df\u6eda\u52a8\uff1f"),n.a.createElement("p",null,"List \u672c\u8eab\u4e0d\u4f1a\u652f\u6301\u865a\u62df\u6eda\u52a8\uff0c\u53ef\u4ee5\u7ed3\u5408 ",n.a.createElement(r["Link"],{to:"https://github.com/bvaughn/react-virtualized"},"react-virtualized")," \u5b9e\u73b0\u3002"),n.a.createElement("h3",{id:"\u5217\u8868\u80fd\u5426\u652f\u6301\u62d6\u62fd\u6392\u5e8f"},n.a.createElement(r["AnchorLink"],{to:"#\u5217\u8868\u80fd\u5426\u652f\u6301\u62d6\u62fd\u6392\u5e8f","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5217\u8868\u80fd\u5426\u652f\u6301\u62d6\u62fd\u6392\u5e8f\uff1f"),n.a.createElement("p",null,"List \u672c\u8eab\u4e0d\u4f1a\u652f\u6301\u62d6\u62fd\u6392\u5e8f\uff0c\u53ef\u4ee5\u7ed3\u5408 ",n.a.createElement(r["Link"],{to:"https://github.com/atlassian/react-beautiful-dnd"},"react-beautiful-dnd")," \u5b9e\u73b0\u3002"))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:a})}},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return b}));var l=a("ahKI"),n=a.n(l),r=a("Vhn3"),c=a("/7QA"),m=a("9kvl"),o=a("j+4G"),i=a("Bjia");a("YWOM");function d(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var u=e=>{var t=Object(l["useRef"])(null),a=Object(l["useContext"])(o["context"]),u=a.locale,s=Object(o["useLocaleProps"])(u,e),E=(null===m["a"]||void 0===m["a"]?void 0:m["a"].location.hash)==="#".concat(s.identifier),h=1===Object.keys(s.sources).length,v=Object(o["useMotions"])(s.motions||[],t.current),f=Object(r["a"])(v,2),p=f[0],b=f[1],g=Object(o["useCopy"])(),k=Object(r["a"])(g,2),w=k[0],x=k[1],N=Object(l["useState"])("_"),_=Object(r["a"])(N,2),y=_[0],j=_[1],L=Object(l["useState"])(d(y,s.sources[y])),O=Object(r["a"])(L,2),C=O[0],A=O[1],I=s.sources[y][C]||s.sources[y].content,S=Object(o["useTSPlaygroundUrl"])(u,I),M=Object(o["usePrefersColor"])(),V=Object(r["a"])(M,1);V[0];function Z(e){j(e),A(d(e,s.sources[e]))}return n.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&n.a.createElement(o["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:b,onClick:()=>p()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:()=>w(I)}),"tsx"===C&&n.a.createElement(o["Link"],{target:"_blank",to:S},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&n.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:y,onChange:Z},Object.keys(s.sources).map((e=>n.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(d(e,s.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(i["a"],{code:I,lang:C,showCopy:!1}))))},s=u,E=(a("oeoJ"),a("NEWu")),h=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),m=Object(r["a"])(a,2),i=m[0],d=m[1],u=Object(o["usePrefersColor"])(),s=Object(r["a"])(u,1),h=s[0],b=Object(l["useContext"])(o["context"]),g=b.config.mode;return Object(l["useEffect"])((()=>{d(Math.random())}),[h]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:i}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>d(Math.random())},v),n.a.createElement(c["Popover"],{content:n.a.createElement(E["a"],{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,f)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},p)))}),v=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),p=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),b="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(s,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(h,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("eqKt"),c=a.n(r),m=e=>n.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:c.a.content},n.a.createElement("div",{className:c.a.title},e.title),n.a.createElement("div",{className:c.a.description},e.description)));t["a"]=m},mVOg:function(e,t,a){"use strict";var l=a("Vhn3"),n=a("ahKI"),r=a.n(n),c=a("j+4G"),m=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(c["context"]),t=e.locale,a=Object(n["useState"])(!1),o=Object(l["a"])(a,2),i=o[0],d=o[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(m["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:i,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},tkuz:function(e,t,a){}}]);