(window.webpackJsonp=window.webpackJsonp||[]).push([["mixins-App"],{"09d1":function(t,e,n){"use strict";function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function o(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n,r,o,a,i,c;if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;n=[],r=!0,o=!1,a=void 0;try{for(i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e,n,r,o,a,i){var c,u;try{u=(c=t[a](i)).value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}var s,l,f;n.r(e),s=n("ac0d"),l=n.n(s),f=n("a7d6"),e.default={created:function(){var t,e=this;return(t=l.a.mark((function t(){var n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.$http("/APP/AAA/setVersion.json"),e.checkLogin()]);case 2:n=t.sent,r=i(n,1),o=r[0].data,console.log("Version status",o.status),console.log("checkLogin",e.auth);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){function a(t){u(c,r,o,a,i,"next",t)}function i(t){u(c,r,o,a,i,"throw",t)}var c=t.apply(e,n);a(void 0)}))})()},beforeMount:function(){},mounted:function(){onDev&&(window.App=this)},data:function(){return{menu:{},color:"#e60064",size:"200px",opacity:0,authenticate:!1,production:!0}},computed:o(o(o(o(o({},Object(f.e)("request",["loading","loadCount"])),Object(f.e)("auth",["auth","userData","modelAuth","modelOption","componentLoaded"])),Object(f.e)("app",["sticky","variant","type","logo","logoAnchorStyle","logoStyle","showNav","showFooter"])),Object(f.e)("Config",["Loading"])),{},{localLink:function(){var t=this.userData;return console.debug("localLink"),console.debug(t),t&&t.link||"/"},mode:function(){return this.$route.params.mode||"Plain"}}),methods:o(o(o(o({},Object(f.b)("auth",["checkLogin","logout"])),Object(f.d)("auth",["setAuthMode","setComponentLoaded"])),Object(f.b)("app",["reload"])),{},{Modal:function(){var t;return(t=this.$bvModal).msgBoxOk.apply(t,arguments)},Confirm:function(){var t;return(t=this.$bvModal).msgBoxConfirm.apply(t,arguments)}})}}}]);