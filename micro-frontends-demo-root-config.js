System.register(["single-spa","@micro-frontends-demo/auth"],(function(e,t){var r={},n={};return{setters:[function(e){r.registerApplication=e.registerApplication,r.start=e.start},function(e){n.getUser=e.getUser}],execute:function(){e((()=>{var e={907:(e,t,r)=>{const n=r(541).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},541:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var a=n.slice(0,i+1);return r.protocol+"//"+r.host+a};Number.isInteger},229:e=>{"use strict";e.exports=n},645:e=>{"use strict";e.exports=r}},o={};function i(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,i),n.exports}i.y=t,i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var a={};return(0,i(907).s)(1),(()=>{"use strict";i.r(a);var e=i(645),t=i(229);(0,e.registerApplication)("main",window.angular_main.default,(function(e){return!e.pathname.includes("react")}),(function(){return{user:(0,t.getUser)()}})),(0,e.registerApplication)("react",(function(){return System.import("@micro-frontends-demo/react")}),(function(e){return e.pathname.includes("react")})),(0,e.start)()})(),a})())}}}));
//# sourceMappingURL=micro-frontends-demo-root-config.js.map