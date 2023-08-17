/*! For license information please see main.1e0398fa.js.LICENSE.txt */
!function(){"use strict";var e={63368:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var a;n.d(t,{aU:function(){return a},q_:function(){return l},cP:function(){return p}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));var o=function(e){return e};var i="beforeunload",u="hashchange",c="popstate";function l(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,l=n.history;function v(){var e=p(n.location.hash.substr(1)),t=e.pathname,r=void 0===t?"/":t,a=e.search,i=void 0===a?"":a,u=e.hash,c=void 0===u?"":u,s=l.state||{};return[s.idx,o({pathname:r,search:i,hash:c,state:s.usr||null,key:s.key||"default"})]}var m=null;function g(){if(m)E.call(m),m=null;else{var e=a.Pop,t=v(),n=t[0],r=t[1];if(E.length){if(null!=n){var o=x-n;o&&(m={action:e,location:r,retry:function(){A(-1*o)}},A(o))}}else k(e)}}n.addEventListener(c,g),n.addEventListener(u,(function(){d(v()[1])!==d(w)&&g()}));var y=a.Pop,b=v(),x=b[0],w=b[1],P=f(),E=f();function j(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var r=n.location.href,a=r.indexOf("#");t=-1===a?r:r.slice(0,a)}return t}()+"#"+("string"===typeof e?e:d(e))}function S(e,t){return void 0===t&&(t=null),o(r({pathname:w.pathname,hash:"",search:""},"string"===typeof e?p(e):e,{state:t,key:h()}))}function O(e,t){return[{usr:e.state,key:e.key,idx:t},j(e)]}function C(e,t,n){return!E.length||(E.call({action:e,location:t,retry:n}),!1)}function k(e){y=e;var t=v();x=t[0],w=t[1],P.call({action:y,location:w})}function A(e){l.go(e)}null==x&&(x=0,l.replaceState(r({},l.state,{idx:x}),""));var _={get action(){return y},get location(){return w},createHref:j,push:function e(t,r){var o=a.Push,i=S(t,r);if(C(o,i,(function(){e(t,r)}))){var u=O(i,x+1),c=u[0],s=u[1];try{l.pushState(c,"",s)}catch(f){n.location.assign(s)}k(o)}},replace:function e(t,n){var r=a.Replace,o=S(t,n);if(C(r,o,(function(){e(t,n)}))){var i=O(o,x),u=i[0],c=i[1];l.replaceState(u,"",c),k(r)}},go:A,back:function(){A(-1)},forward:function(){A(1)},listen:function(e){return P.push(e)},block:function(e){var t=E.push(e);return 1===E.length&&n.addEventListener(i,s),function(){t(),E.length||n.removeEventListener(i,s)}}};return _}function s(e){e.preventDefault(),e.returnValue=""}function f(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function h(){return Math.random().toString(36).substr(2,8)}function d(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,a=void 0===r?"":r,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(n+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function p(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}},1250:function(e,t,n){var r=n(61533);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},16871:function(e,t,n){n.d(t,{AW:function(){return f},F0:function(){return h},TH:function(){return v},Z5:function(){return d},s0:function(){return m}});var r=n(70885),a=n(87363),o=n(63368);function i(e,t){if(!e)throw new Error(t)}var u=(0,a.createContext)(null);var c=(0,a.createContext)(null);var l=(0,a.createContext)({outlet:null,matches:[]});function s(e){return(0,a.useContext)(l).outlet}function f(e){i(!1)}function h(e){var t=e.basename,n=void 0===t?"/":t,r=e.children,l=void 0===r?null:r,s=e.location,f=e.navigationType,h=void 0===f?o.aU.Pop:f,d=e.navigator,v=e.static,m=void 0!==v&&v;p()&&i(!1);var g=B(n),y=(0,a.useMemo)((function(){return{basename:g,navigator:d,static:m}}),[g,d,m]);"string"===typeof s&&(s=(0,o.cP)(s));var b=s,x=b.pathname,w=void 0===x?"/":x,P=b.search,E=void 0===P?"":P,j=b.hash,S=void 0===j?"":j,O=b.state,C=void 0===O?null:O,k=b.key,A=void 0===k?"default":k,_=(0,a.useMemo)((function(){var e=R(w,g);return null==e?null:{pathname:e,search:E,hash:S,state:C,key:A}}),[g,w,E,S,C,A]);return null==_?null:(0,a.createElement)(u.Provider,{value:y},(0,a.createElement)(c.Provider,{children:l,value:{location:_,navigationType:h}}))}function d(e){var t=e.children,n=e.location;return function(e,t){p()||i(!1);var n=(0,a.useContext)(l).matches,r=n[n.length-1],u=r?r.params:{},c=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;0;var s,f=v();if(t){var h,d="string"===typeof t?(0,o.cP)(t):t;"/"===c||(null==(h=d.pathname)?void 0:h.startsWith(c))||i(!1),s=d}else s=f;var m=s.pathname||"/",g="/"===c?m:m.slice(c.length)||"/",b=function(e,t,n){void 0===n&&(n="/");var r="string"===typeof t?(0,o.cP)(t):t,a=R(r.pathname||"/",n);if(null==a)return null;var i=y(e);!function(e){e.sort((function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){var n=e.length===t.length&&e.slice(0,-1).every((function(e,n){return e===t[n]}));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((function(e){return e.childrenIndex})),t.routesMeta.map((function(e){return e.childrenIndex})))}))}(i);for(var u=null,c=0;null==u&&c<i.length;++c)u=C(i[c],e,a);return u}(e,{pathname:g});0;return k(b&&b.map((function(e){return Object.assign({},e,{params:Object.assign({},u,e.params),pathname:W([c,e.pathname]),pathnameBase:"/"===e.pathnameBase?c:W([c,e.pathnameBase])})})),n)}(g(t),n)}function p(){return null!=(0,a.useContext)(c)}function v(){return p()||i(!1),(0,a.useContext)(c).location}function m(){p()||i(!1);var e=(0,a.useContext)(u),t=e.basename,n=e.navigator,r=(0,a.useContext)(l).matches,o=v().pathname,c=JSON.stringify(r.map((function(e){return e.pathnameBase}))),s=(0,a.useRef)(!1);return(0,a.useEffect)((function(){s.current=!0})),(0,a.useCallback)((function(e,r){if(void 0===r&&(r={}),s.current)if("number"!==typeof e){var a=_(e,JSON.parse(c),o);"/"!==t&&(a.pathname=W([t,a.pathname])),(r.replace?n.replace:n.push)(a,r.state)}else n.go(e)}),[t,n,c,o])}function g(e){var t=[];return a.Children.forEach(e,(function(e){if((0,a.isValidElement)(e))if(e.type!==a.Fragment){e.type!==f&&i(!1);var n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=g(e.props.children)),t.push(n)}else t.push.apply(t,g(e.props.children))})),t}function y(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach((function(e,a){var o={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:a};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||i(!1),o.relativePath=o.relativePath.slice(r.length));var u=W([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(!0===e.index&&i(!1),y(e.children,t,c,u)),(null!=e.path||e.index)&&t.push({path:u,score:O(u,e.index),routesMeta:c})})),t}var b=/^:\w+$/,x=3,w=2,P=1,E=10,j=-2,S=function(e){return"*"===e};function O(e,t){var n=e.split("/"),r=n.length;return n.some(S)&&(r+=j),t&&(r+=w),n.filter((function(e){return!S(e)})).reduce((function(e,t){return e+(b.test(t)?x:""===t?P:E)}),r)}function C(e,t,n){for(var r=t,a=e.routesMeta,o={},i="/",u=[],c=0;c<a.length;++c){var l=a[c],s=c===a.length-1,f="/"===i?n:n.slice(i.length)||"/",h=A({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},f);if(!h)return null;Object.assign(o,h.params);var d=r[l.childrenIndex];u.push({params:o,pathname:W([i,h.pathname]),pathnameBase:W([i,h.pathnameBase]),route:d}),"/"!==h.pathnameBase&&(i=W([i,h.pathnameBase])),r=d.children}return u}function k(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight((function(n,r,o){return(0,a.createElement)(l.Provider,{children:void 0!==r.route.element?r.route.element:(0,a.createElement)(s,null),value:{outlet:n,matches:t.concat(e.slice(0,o+1))}})}),null)}function A(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});var n=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);var r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(function(e,t){return r.push(t),"([^\\/]+)"}));e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:\\b|$)";var o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=(0,r.Z)(n,2),o=a[0],i=a[1],u=t.match(o);if(!u)return null;var c=u[0],l=c.replace(/(.)\/+$/,"$1"),s=u.slice(1);return{params:i.reduce((function(e,t,n){if("*"===t){var r=s[n]||"";l=c.slice(0,c.length-r.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return e}}(s[n]||""),e}),{}),pathname:c,pathnameBase:l,pattern:e}}function _(e,t,n){var r,a="string"===typeof e?(0,o.cP)(e):e,i=""===e||""===a.pathname?"/":a.pathname;if(null==i)r=n;else{var u=t.length-1;if(i.startsWith("..")){for(var c=i.split("/");".."===c[0];)c.shift(),u-=1;a.pathname=c.join("/")}r=u>=0?t[u]:"/"}var l=function(e,t){void 0===t&&(t="/");var n="string"===typeof e?(0,o.cP)(e):e,r=n.pathname,a=n.search,i=void 0===a?"":a,u=n.hash,c=void 0===u?"":u,l=r?r.startsWith("/")?r:function(e,t){var n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((function(e){".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(r,t):t;return{pathname:l,search:T(i),hash:$(c)}}(a,r);return i&&"/"!==i&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;var n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}var W=function(e){return e.join("/").replace(/\/\/+/g,"/")},B=function(e){return e.replace(/\/+$/,"").replace(/^\/*/,"/")},T=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},$=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""}},66374:function(e,t,n){var r=n(87363),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,s=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:s,props:o,_owner:u.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},80184:function(e,t,n){e.exports=n(66374)},87363:function(e){e.exports=React},61533:function(e){e.exports=ReactDOM},81821:function(e){e.exports=antd},30907:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},70885:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(40181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,u=[],c=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(s){l=!0,a=s}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(30907);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.amdD=function(){throw new Error("define cannot be used indirect")},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/js/"+e+"."+{24:"2cd8bf1c",38:"02437699",343:"84788378",422:"bdeaa15c",533:"08b8b088",541:"a01b8004",605:"ad74e7f5",819:"d2ecf800",820:"ff339713",980:"0109ebbb"}[e]+".chunk.js"},n.miniCssF=function(e){return"static/css/"+e+"."+{38:"30763aa7",343:"327142f0",422:"c6fe6637",533:"97d7ba69",541:"2b8a283b"}[e]+".chunk.css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="ddm-demo:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var h=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="./",function(){if("undefined"!==typeof document){var e=function(e){return new Promise((function(t,r){var a=n.miniCssF(e),o=n.p+a;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((a=(i=o[r]).getAttribute("data-href"))===e||a===t)return i}}(a,o))return t();!function(e,t,n,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),a(c)}},o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o)}(e,o,null,t,r)}))},t={179:0};n.f.miniCss=function(n,r){t[n]?r.push(t[n]):0!==t[n]&&{38:1,343:1,422:1,533:1,541:1}[n]&&r.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={179:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error;n.l(i,(function(r){if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}}),"chunk-"+t,t)}};var t=function(t,r){var a,o,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkddm_demo=self.webpackChunkddm_demo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),function(){var e=n(87363),t=n(1250),r=n(70885),a=n(63368),o=n(16871);function i(t){var n=t.basename,i=t.children,u=t.window,c=(0,e.useRef)();null==c.current&&(c.current=(0,a.q_)({window:u}));var l=c.current,s=(0,e.useState)({action:l.action,location:l.location}),f=(0,r.Z)(s,2),h=f[0],d=f[1];return(0,e.useLayoutEffect)((function(){return l.listen(d)}),[l]),(0,e.createElement)(o.F0,{basename:n,children:i,location:h.location,navigationType:h.action,navigator:l})}var u=n(80184),c=(0,e.lazy)((function(){return Promise.all([n.e(980),n.e(24),n.e(38)]).then(n.bind(n,21038))})),l=(0,e.lazy)((function(){return Promise.all([n.e(980),n.e(24),n.e(819),n.e(605),n.e(820),n.e(533)]).then(n.bind(n,36825))})),s=(0,e.lazy)((function(){return Promise.all([n.e(980),n.e(24),n.e(819),n.e(820),n.e(422)]).then(n.bind(n,6891))})),f=(0,e.lazy)((function(){return Promise.all([n.e(980),n.e(541)]).then(n.bind(n,47541))})),h=(0,e.lazy)((function(){return Promise.all([n.e(980),n.e(343)]).then(n.bind(n,79343))}));window.useState=e.useState,window.useEffect=e.useEffect,window.useRef=e.useRef,t.createRoot(document.getElementById("root")).render((0,u.jsx)(i,{children:(0,u.jsx)(e.Suspense,{children:(0,u.jsxs)(o.Z5,{children:[(0,u.jsx)(o.AW,{path:"/",element:(0,u.jsx)(c,{})}),(0,u.jsx)(o.AW,{path:"/home",element:(0,u.jsx)(l,{})}),(0,u.jsx)(o.AW,{path:"/metaRender",element:(0,u.jsx)(s,{})}),(0,u.jsx)(o.AW,{path:"/dataBase",element:(0,u.jsx)(f,{})}),(0,u.jsx)(o.AW,{path:"/login",element:(0,u.jsx)(h,{})})]})})}))}()}();
//# sourceMappingURL=main.1e0398fa.js.map