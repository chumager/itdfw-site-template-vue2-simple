(window.webpackJsonp=window.webpackJsonp||[]).push([["components-changeAuth","components-ItdTypeAhead-VueBootstrapTypeahead"],{"2a6f":function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,a){var u,s,p,f="function"==typeof t?t.options:t;return e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=u):o&&(u=a?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),u&&(f.functional?(f._injectStyles=u,s=f.render,f.render=function(t,e){return u.call(e),s(t,e)}):(p=f.beforeCreate,f.beforeCreate=p?[].concat(p,u):[u])),{exports:t,options:f}}n.d(e,"a",(function(){return r}))},c395:function(t,e,n){"use strict";function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function o(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,r,o,i,c){var a,u;try{u=(a=t[i](c)).value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}var a,u,s,p,f,d,l,h;n.r(e),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("auth")},u=[],s=n("ac0d"),p=n.n(s),f=n("a7d6"),d={components:{auth:function(){return Vue.localImport("Auth","views")}},props:{authMode:{type:Object,required:!0},initial:{type:Object,default:function(){return{showNav:!0}}},text:{type:String,default:"Pasando a modo admin"}},beforeMount:function(){var t,e=this;return(t=p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setInitial(e.initial),e.setAuthMode(e.authMode),e.mergeAuth({authEndpoint:!0});case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){function i(t){c(u,r,o,i,a,"next",t)}function a(t){c(u,r,o,i,a,"throw",t)}var u=t.apply(e,n);i(void 0)}))})()},methods:o(o({},Object(f.d)("auth",["setAuthMode","mergeAuth"])),Object(f.d)("app",["setInitial"]))},l=n("2a6f"),h=Object(l.a)(d,a,u,!1,null,null,null),e.default=h.exports}}]);