(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdMenu","components-ItdTypeAhead-VueBootstrapTypeahead"],{"2a6f":function(n,t,e){"use strict";function r(n,t,e,r,o,i,a,u){var s,c,l,d="function"==typeof n?n.options:n;return t&&(d.render=t,d.staticRenderFns=e,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},d._ssrRegister=s):o&&(s=u?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),s&&(d.functional?(d._injectStyles=s,c=d.render,d.render=function(n,t){return s.call(t),c(n,t)}):(l=d.beforeCreate,d.beforeCreate=l?[].concat(l,s):[s])),{exports:n,options:d}}e.d(t,"a",(function(){return r}))},c7f0:function(n,t,e){"use strict";function r(n,t){var e,r=Object.keys(n);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(n),t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)),r}function o(n){var t,e;for(t=1;t<arguments.length;t++)e=null!=arguments[t]?arguments[t]:{},t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}));return n}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var a,u,s,c,l,d;e.r(t),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.ready?e("b-navbar-nav",{attrs:{align:"center"}},[e("b-dropdown",{attrs:{text:"Menu",lazy:"",variant:"lynk",size:"sm",boundary:n.boundary}},n._l(n.functionsMenu,(function(t){var r=t.path,o=t.name,i=t.icon,a=t.description;return e("b-dropdown-item",{key:r,attrs:{to:r}},[i?e("icon",{attrs:{name:i}}):n._e(),n._v(" "+n._s(o||a||r)+" ")],1)})),1),n._l(n.functionsNav,(function(t){var r=t.path,o=t.name,i=t.icon,a=t.description;return e("b-nav-item",{key:r+"Nav",attrs:{to:r}},[i?e("icon",{attrs:{name:i,scale:"0.5"}}):n._e(),n._v(" "+n._s(o||a||r)+" ")],1)}))],2):n._e()},u=[],s=e("f42e"),c={$BVP:["DropdownPlugin","NavbarPlugin"],name:"ItdMenu",computed:o(o({},Object(s.e)("auth",["userData"])),{},{boundary:function(){var n=this.$root.$el;return n},functionsMenu:function(){var n,t;return(null==this||null===(n=this.userData)||void 0===n||null===(t=n.functions)||void 0===t?void 0:t.filter((function(n){return!n.hidden})))||[]},functionsNav:function(){var n,t;return(null==this||null===(n=this.userData)||void 0===n||null===(t=n.functions)||void 0===t?void 0:t.filter((function(n){return n.inNav})))||[]},ready:function(){var n,t;return null==this||null===(n=this.userData)||void 0===n||null===(t=n.functions)||void 0===t?void 0:t.some((function(n){return!n.hidden}))}})},l=e("2a6f"),d=Object(l.a)(c,a,u,!1,null,null,null),t.default=d.exports}}]);