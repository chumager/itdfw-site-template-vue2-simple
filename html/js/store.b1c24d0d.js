(window.webpackJsonp=window.webpackJsonp||[]).push([["store","store-modules-Alert","store-modules-Banco","store-modules-Config","store-modules-ITDComponent","store-modules-SimpleName","store-modules-app","store-modules-auth","store-modules-delegatedUser","store-modules-loading"],{"2a16":function(t,e,n){"use strict";n.r(e),n.d(e,"parse",(function(){return p})),n.d(e,"stringify",(function(){return h}));
/*! (c) 2020 Andrea Giammarchi */
const{parse:o,stringify:r}=JSON,{keys:a}=Object,i=String,s={},c=(t,e)=>e,u=t=>t instanceof i?i(t):t,l=(t,e)=>"string"==typeof e?new i(e):e,f=(t,e,n,o)=>{const r=[];for(let c=a(n),{length:u}=c,l=0;l<u;l++){const a=c[l],u=n[a];if(u instanceof i){const i=t[u];"object"!=typeof i||e.has(i)?n[a]=o.call(n,a,i):(e.add(i),n[a]=s,r.push({k:a,a:[t,e,i,o]}))}else n[a]!==s&&(n[a]=o.call(n,a,u))}for(let{length:a}=r,i=0;i<a;i++){const{k:t,a:e}=r[i];n[t]=o.call(n,t,f.apply(null,e))}return n},d=(t,e,n)=>{const o=i(e.push(n)-1);return t.set(n,o),o},p=(t,e)=>{const n=o(t,l).map(u),r=n[0],a=e||c,i="object"==typeof r&&r?f(n,new Set,r,a):r;return a.call({"":i},"",i)},h=(t,e,n)=>{function o(t,e){if(f)return f=!f,e;const n=a.call(this,t,e);switch(typeof n){case"object":if(null===n)return n;case"string":return i.get(n)||d(i,s,n)}return n}const a=e&&"object"==typeof e?(t,n)=>""===t||-1<e.indexOf(t)?n:void 0:e||c,i=new Map,s=[],u=[];let l=+d(i,s,a.call({"":t},"",t)),f=!l;for(;l<s.length;)f=!0,u[l]=r(s[l++],o,n);return"["+u.join(",")+"]"}},"2efc":function(t,e,n){"use strict";function o(t,e,n,o,r,a,i){var s,c;try{c=(s=t[a](i)).value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){function i(t){o(c,r,a,i,s,"next",t)}function s(t){o(c,r,a,i,s,"throw",t)}var c=t.apply(e,n);i(void 0)}))}}var a,i;n.r(e),a=n("ac0d"),i=n.n(a),e.default={namespaced:!0,state:{ru:"",options:[]},mutations:{setRU:function(t,e){t.ru=e},setOptions:function(t,e){t.options=e}},actions:{setRU:function(t,e){var n=this;return r(i.a.mark((function o(){var r,a;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.commit,a=t.dispatch,o.next=3,n._vm.$http.post("/APP/DelegatedUser/setRU.json",{v:e});case 3:r("setRU",e),a("auth/checkLogin",{forceLink:!0},{root:!0});case 5:case"end":return o.stop()}}),o)})))()},getOptions:function(t){var e=this;return r(i.a.mark((function n(){var o,r,a,s,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,r=t.dispatch,n.next=3,e._vm.$http("/APP/DelegatedUser/getOptionName.json");case 3:return a=n.sent,s=a.data,n.next=7,r("form/getOption",{option:s,withNull:!0},{root:!0});case 7:c=n.sent,o("setOptions",c);case 9:case"end":return n.stop()}}),n)})))()}}}},3171:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:{},mutations:{setVal:function(t,e){var n=e.model,o=e.id,r=e.val;t[n]||(t[n]={}),t[n][o]=r}},actions:{getSimpleName:function(t,e){var n,o=t.commit,r=t.state,a=e.model,i=e.id,s=e.ciphed,c=e.refField,u=e.refFieldDefault;return Array.isArray(i)?i.length:a&&i?r[a]&&r[a][i]?r[a][i]:(o("setVal",{model:a,id:i,val:new Promise((function(t){n=t}))}),this._vm.$http.get("/APP/AAA/getSimpleName.json?id=".concat(i,"&model=").concat(a,"&refFieldDefault=").concat(u).concat(c?"&refField=".concat(c):"").concat(s?"&ciphed=".concat(s):""),{noBlock:!0}).then((function(t){var e=t.body;return n(e),setTimeout((function(){o("setVal",{model:a,id:i,val:void 0})}),6e4),e})).catch((function(t){console.error("error solicitando",a,i,t);var e="valor no encontrado";return n(e),setTimeout((function(){o("setVal",{model:a,id:i,val:void 0})}),5e3),e}))):""}}}},"4a5a":function(t,e,n){"use strict";function o(t,e,n){return c()(t,e,g[n])}function r(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)),o}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i,s,c,u,l,f,d,p;let h;n.r(e),i=n("f42e"),s=n("ccdd"),c=n.n(s),h=class{get length(){return Object.keys(this).length}key(t){return Object.keys(this)[t]}setItem(t,e){this[t]=e.toString()}getItem(t){return this[t]}removeItem(t){delete this[t]}clear(){for(let t of Object.keys(this))delete this[t]}};class m{constructor(){this._queue=[],this._flushing=!1}enqueue(t){return this._queue.push(t),this._flushing?Promise.resolve():this.flushQueue()}flushQueue(){this._flushing=!0;const t=()=>{const e=this._queue.shift();if(e)return e.then(t);this._flushing=!1};return Promise.resolve(t())}}const g={replaceArrays:{arrayMerge:(t,e,n)=>e},concatArrays:{arrayMerge:(t,e,n)=>t.concat(...e)}};let v=JSON;u=class{constructor(t){this._mutex=new m,this.subscriber=t=>e=>t.subscribe(e),void 0===t&&(t={}),this.key=null!=t.key?t.key:"vuex",this.subscribed=!1,this.supportCircular=t.supportCircular||!1,this.supportCircular&&(v=n("2a16")),this.mergeOption=t.mergeOption||"replaceArrays";let e=!0;try{window.localStorage.getItem("")}catch(r){e=!1}if(t.storage)this.storage=t.storage;else if(e)this.storage=window.localStorage;else{if(!h)throw new Error("Neither 'window' is defined, nor 'MockStorage' is available");this.storage=new h}this.reducer=null!=t.reducer?t.reducer:null==t.modules?t=>t:e=>t.modules.reduce((t,n)=>o(t,{[n]:e[n]},this.mergeOption),{}),this.filter=t.filter||(t=>!0),this.strictMode=t.strictMode||!1,this.RESTORE_MUTATION=function(t,e){const n=o(t,e||{},this.mergeOption);for(const o of Object.keys(n))this._vm.$set(t,o,n[o])},this.asyncStorage=t.asyncStorage||!1,this.asyncStorage?(this.restoreState=null!=t.restoreState?t.restoreState:(t,e)=>e.getItem(t).then(t=>"string"==typeof t?this.supportCircular?v.parse(t||"{}"):JSON.parse(t||"{}"):t||{}),this.saveState=null!=t.saveState?t.saveState:(t,e,n)=>n.setItem(t,this.asyncStorage?o({},e||{},this.mergeOption):this.supportCircular?v.stringify(e):JSON.stringify(e)),this.plugin=t=>{t.restored=this.restoreState(this.key,this.storage).then(e=>{this.strictMode?t.commit("RESTORE_MUTATION",e):t.replaceState(o(t.state,e||{},this.mergeOption)),this.subscriber(t)((t,e)=>{this.filter(t)&&this._mutex.enqueue(this.saveState(this.key,this.reducer(e),this.storage))}),this.subscribed=!0})}):(this.restoreState=null!=t.restoreState?t.restoreState:(t,e)=>{const n=e.getItem(t);return"string"==typeof n?this.supportCircular?v.parse(n||"{}"):JSON.parse(n||"{}"):n||{}},this.saveState=null!=t.saveState?t.saveState:(t,e,n)=>n.setItem(t,this.supportCircular?v.stringify(e):JSON.stringify(e)),this.plugin=t=>{const e=this.restoreState(this.key,this.storage);this.strictMode?t.commit("RESTORE_MUTATION",e):t.replaceState(o(t.state,e||{},this.mergeOption)),this.subscriber(t)((t,e)=>{this.filter(t)&&this.saveState(this.key,this.reducer(e),this.storage)}),this.subscribed=!0})}},l=!1,Vue.use(i.a),f={};try{d=n("59b4")}catch(y){console.warn("Local Store Modules not found")}try{p=!function(){var t=new Error("Cannot find module 'undefined'");throw t.code="MODULE_NOT_FOUND",t}()}catch(y){console.warn("App Store Modules not found")}[d,p].forEach((function(t){t&&t.keys().forEach((function(e){var n=e.split("/").reverse()[0].replace(".js","");f[n]=function(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}({nameSpaced:!0},t(e).default)}))})),e.default=new i.a.Store({modules:f,strict:l,plugins:[new u({modules:Object.keys(f).filter((function(t){return!!f[t].persist}))}).plugin]})},5920:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:{sticky:!0,load:!0,variant:"info",type:"light",logo:"/logo_web.png",logoStyle:{},logoAnchorStyle:{},showNav:!0,showFooter:!0},mutations:{sticky:function(t,e){t.sticky=e},load:function(t,e){t.load=e},setLogo:function(t,e){t.logo=e},setLogoStyle:function(t,e){t.logoStyle=e},setLogoAnchorStyle:function(t,e){t.logoAnchorStyle=e},setInitial:function(t,e){Object.assign(t,e)}},actions:{setSticky:function(t){var e=t.commit,n=t.state;e("sticky",!0),console.debug("STICKY",n.sticky)},unsetSticky:function(t){var e=t.commit,n=t.state;e("sticky",!1),console.debug("STICKY",n.sticky)},reload:function(t){var e=t.commit;return new Promise((function(t){e("load",!1),setTimeout((function(){e("load",!0),t()}),100)}))}}}},"59b4":function(t,e,n){function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}var a={"./Alert.js":"6e35","./Banco.js":"7072","./Config.js":"94f4","./ITDComponent.js":"fea1","./SimpleName.js":"3171","./app.js":"5920","./auth.js":"94d6","./delegatedUser.js":"2efc","./form.js":"e117","./loading.js":"ec37"};o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="59b4"},"6e35":function(t,e,n){"use strict";function o(t,e,n,o,r,a,i){var s,c;try{c=(s=t[a](i)).value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,r)}var r,a;n.r(e),r=n("ac0d"),a=n.n(r),e.default={namespaced:!0,state:{alerts:{},modals:{}},mutations:{remove:function(t,e){delete t.alerts[e]},add:function(t,e){e.show=!0;var n=Math.ceil(1e8*Math.random());this._vm.$set(t.alerts,n,e)}},actions:{error:function(t,e){(0,t.commit)("add",{header:"Error",content:e,variant:"danger"})},success:function(t,e){(0,t.commit)("add",{header:"Info",content:e,variant:"success"})},raw:function(t,e){(0,t.commit)("add",e)},modal:function(t,e){return(n=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"string"==typeof e&&(e={message:e});case 1:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(r,a){function i(t){o(c,r,a,i,s,"next",t)}function s(t){o(c,r,a,i,s,"throw",t)}var c=n.apply(t,e);i(void 0)}))})();var n},confirm:function(t,e){var n=e.message,o=e.options;return this._vm.$bvModal.msgBoxConfirm(n,o)}}}},7072:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:{},mutations:{setVal:function(t,e){var n=e.id,o=e.val;t[n]=o}},actions:{getBanco:function(t,e){var n,o=t.commit,r=t.state,a=e.id;return a||0!==a?r[a]?r[a]:(o("setVal",{id:a,val:new Promise((function(t){n=t}))}),this._vm.$http.get("/APP/AAA/getBanco.json?id=".concat(a)).then((function(t){var e=t.body;return n(e),setTimeout((function(){o("setVal",{id:a,val:void 0})}),6e4),e})).catch((function(t){console.error("error solicitando",a,t);var e="valor no encontrado";return n(e),setTimeout((function(){o("setVal",{id:a,val:void 0})}),5e3),e}))):""}}}},8753:function(t,e,n){"use strict";var o=n("b491"),r=n("c646"),a=Object(r.a)((function(t,e,n){Object(o.a)(t,e,n)}));e.a=a},"94d6":function(t,e,n){"use strict";function o(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)),o}function r(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e,n,o,r,a,i){var s,c;try{c=(s=t[a](i)).value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){function a(t){i(c,o,r,a,s,"next",t)}function s(t){i(c,o,r,a,s,"throw",t)}var c=t.apply(e,n);a(void 0)}))}}var c,u,l,f,d;n.r(e),c=n("ac0d"),u=n.n(c),l=n("ddb6"),f=n("8753"),d=n("585e"),e.default={namespaced:!0,state:{auth:!1,userData:null,forceLink:!1,authEndpoint:!1,authShow:!0,notAllowed:!1,modelAuth:"User",modelOption:"username",componentLoaded:{}},getters:{route:function(t,e,n){return n.route}},mutations:{mergeAuth:function(t,e){Object(f.a)(t,e)},auth:function(t,e){t.auth=e.auth||!1,t.userData=e.userData,e.model&&(t.modelAuth=e.model)},notAllowed:function(t,e){t.notAllowed=e},setAuthMode:function(t,e){t.modelAuth="modelAuth"in e&&e.modelAuth,t.modelOption="modelOption"in e&&e.modelOption},setComponentLoaded:function(t,e){console.debug("definiendo componente cargado",e),t.componentLoaded[e]=!0}},actions:{showAuth:function(t,e){var n,o,r=t.state,a=t.getters;r.authShow=e,n=a.route.from,console.debug("AUTH!!!"),console.debug(JSON.stringify(a,null,2)),r.auth=!1,r.userData=null,o={path:"/auth"},n.query.redirect?o.query=n.query:o.query={redirect:a.route.from.fullPath},d.default.push(o)},logout:function(t){var e=this;return s(u.a.mark((function n(){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=t.state).auth=!1,o.userData=null,n.next=5,e._vm.$http.get("/APP/AAA/logout.json");case 5:location.href="/";case 6:case"end":return n.stop()}}),n)})))()},checkLogin:function(t,e){var o=this;return s(u.a.mark((function a(){var i,s,c,p,h,m,g,v,y;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=t.commit,s=t.state,c=t.getters,console.debug("checkLogin"),console.debug(s),console.debug("no esta autenticado... pidiendo datos"),a.next=6,o._vm.$http[e?"post":"get"]("/APP/AAA/checkLogin.json",e||{noAuth:!0},{noAuth:!0});case 6:p=a.sent,console.debug("resultado de la consulta de autenticación"),console.debug(p),i("auth",p.body||null),h=s.userData,m=h.functions,g=h.link,(h.getComponents||[]).forEach((function(t){var e="itdfw-app-component-".concat(t.pos).toLowerCase(),o=t.path.split("/"),r=o.shift();if(o=o.join("/"),!l.default.component(e)){switch(r){case"@":l.default.component(e,(function(){return n("8673")("./"+o)}));break;case"itdfw":l.default.component(e,(function(){return n("5dee")("./"+o)}));break;default:console.warn("componente de usuario no cargado",t.path,"no es ni relativo al proyecto ni a la base")}i("setComponentLoaded",t.pos)}})),m&&(v=function t(e,n,o){e.meta=r(r({},e.meta),{},{description:e.description||n,name:e.name||o}),delete e.name;var a=e.component;return"string"==typeof a&&(e.component=function(){return viewImport(a)}),e.children&&(e.children=e.children.map((function(n){return t(n,e.meta.description,e.meta.name)}))),e},console.groupCollapsed("generando rutas"),m.map((function(t){var e,n={path:t.path,description:t.description||t.path,name:t.name||t.path};t.route?(console.debug("la función tiene ruta"),console.debug(t.route),n=Object(f.a)({},n,t.route),t.route.path&&(n.path=t.path+"/"+n.path)):(console.debug("la función no tiene ruta"),t.component?n.component=t.component:(console.debug("la función no tiene componente"),n.component=function(){return o._vm.$http.get(n.path+".vue").then((function(t){var e=t.body;return viewImport(e)}))})),console.debug(n),e=v(n,n.description),d.default.addRoute(e)})),d.default.addRoute({path:"*",component:function(){return n.e("components-Error404").then(n.bind(null,"381c"))}}),console.groupEnd(),(y=c.route.query.redirect)?(console.debug("redirect",y),d.default.push(y)):(g&&"/"===window.location.pathname||s.authEndpoint&&s.auth||e&&s.auth||s.forceLink)&&(s.forceLink&&(s.forceLink=!1),d.default.push(g).catch((function(t){"NavigationDuplicated"===t.name&&(console.warn("Error de duplicación de ruta",g),d.default.push({path:g||"/",query:{rand:Math.random()}}))}))));case 13:case"end":return a.stop()}}),a)})))()}}}},"94f4":function(t,e,n){"use strict";function o(t,e,n,o,r,a,i){var s,c;try{c=(s=t[a](i)).value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,r)}var r,a,i;n.r(e),r=n("ac0d"),a=n.n(r),i=n("8753"),e.default={namespaced:!0,state:{Loading:{component:"CircleLoader",color:"#ff0000",size:50}},mutations:{setConf:function(t,e){Object(i.a)(t,e)}},actions:{setConf:function(t){var e,n=this;return(e=a.a.mark((function e(){var o,r,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.commit,r=function t(){return new Promise((function(e){return n._vm.$http?e():setTimeout((function(){return e(t())}),100)}))},e.next=4,r();case 4:return e.next=6,n._vm.$http.get("/APP/AAA/getConfig.json");case 6:return i=e.sent,s=i.body,o("setConf",s),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){function i(t){o(c,r,a,i,s,"next",t)}function s(t){o(c,r,a,i,s,"throw",t)}var c=e.apply(t,n);i(void 0)}))})()}}}},ccdd:function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===p}(t)}function r(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function a(t,e,n){return t.concat(e).map((function(t){return r(t,n)}))}function i(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function s(t,e){try{return e in t}catch(n){return!1}}function c(t,e,n){var o={};return n.isMergeableObject(t)&&i(t).forEach((function(e){o[e]=r(t[e],n)})),i(e).forEach((function(a){(function(t,e){return s(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,a)||(s(t,a)&&n.isMergeableObject(e[a])?o[a]=function(t,e){if(!e.customMerge)return u;var n=e.customMerge(t);return"function"==typeof n?n:u}(a,n)(t[a],e[a],n):o[a]=r(e[a],n))})),o}function u(t,e,n){var o;return(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||f,n.cloneUnlessOtherwiseSpecified=r,(o=Array.isArray(e))===Array.isArray(t)?o?n.arrayMerge(t,e,n):c(t,e,n):r(e,n)}var l,f=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!o(t)},d="function"==typeof Symbol&&Symbol.for,p=d?Symbol.for("react.element"):60103;u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return u(t,n,e)}),{})},l=u,t.exports=l},ec37:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:{loading:!1,loadCount:0,spinner:"fade-loader"},mutations:{start:function(t){t.loading=!0,t.loadCount++},stop:function(t){t.loadCount--,t.loadCount<=0&&(console.debug("Loading... todo cargado"),t.loadCount=0,t.loading=!1)}},actions:{start:function(t){var e=t.commit;setTimeout((function(){e("start")}),100)},stop:function(t){var e=t.commit;setTimeout((function(){e("stop")}),100)}}}},fea1:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:{components:new Map,loading:{template:"<span>Cargando...</span>"}},mutations:{setComponent:function(t,e){t.components.add(e,{component:this._vm.localImport(e),loading:t.loading})}},actions:{getComponent:function(t,e){var n=t.commit,o=t.state;return o.components.get(e)&&n.setComponent(e),o.components.get(e)}}}}}]);