!function(a){function e(e){for(var t,n,r=e[0],o=e[1],u=0,i=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&i.push(c[n][0]),c[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(f&&f(e);i.length;)i.shift()()}var n={},c={1:0};function l(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(o){var e=[],n=c[o];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=c[o]=[e,t]});e.push(n[2]=t);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=function(e){return l.p+""+({}[e]||e)+".js"}(o);var i=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(a);var t=c[o];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;i.message="Loading chunk "+o+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,t[1](i)}c[o]=void 0}};var a=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},l.m=a,l.c=n,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var f=r;l(l.s=6)}([function(e,t){e.exports=React},function(e,t,n){"use strict"},function(e,t){e.exports=ReactDom},function(e,t,n){e.exports=n.p+"beauty_c32b4715jpeg"},function(e,t,n){},,function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(2),i=r.n(u),a=(r(4),r(3)),c=r.n(a);r(1);function l(){return"This is a func a"}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}(this,p(n).call(this,e))).loadComponent=t.loadComponent.bind(y(t)),t.state={Text:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,o.a.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(n,[{key:"loadComponent",value:function(){var t=this;r.e(2).then(r.bind(null,7)).then(function(e){t.setState({Text:e.default})})}},{key:"render",value:function(){var e=l,t=this.state.Text;return o.a.createElement("div",{className:"search-text"},t?o.a.createElement(t,null):null,o.a.createElement("h1",{className:"search-text-title  huan-text-title"},e(),"  毛主席 邓小平字体 非常漂亮"),o.a.createElement("img",{onClick:this.loadComponent,src:c.a,style:{cursor:"pointer",width:"50px",height:"50px"}}))}}]),n}();i.a.render(o.a.createElement(b,null),document.getElementById("root"))}]);