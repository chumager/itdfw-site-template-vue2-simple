(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdSimpleName","components-ItdTypeAhead-VueBootstrapTypeahead"],{"2a6f":function(e,t,n){"use strict";function o(e,t,n,o,i,r,a,l){var c,u,s,d="function"==typeof e?e.options:e;return t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):i&&(c=l?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c&&(d.functional?(d._injectStyles=c,u=d.render,d.render=function(e,t){return c.call(t),u(e,t)}):(s=d.beforeCreate,d.beforeCreate=s?[].concat(s,c):[c])),{exports:e,options:d}}n.d(t,"a",(function(){return o}))},4326:function(e,t,n){"use strict";var o,i,r;n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseInt(e,10);return isNaN(n)?t:n},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseFloat(e);return isNaN(n)?t:n},r=function(e,t){return i(e).toFixed(o(t,0))}},"7a98":function(e,t,n){"use strict";function o(e,t,n,o,i,r,a){var l,c;try{c=(l=e[r](a)).value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(o,i)}function i(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)),o}function r(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l,c,u,s,d,f,p,v,m,h;n.r(t),n.d(t,"mixin",(function(){return p})),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-switch",{attrs:{value:e.inputSwitch},scopedSlots:e._u([{key:"tableView",fn:function(){return[n("div",[e.field.refFieldComponent&&"Cargando..."!==e.val?n("itd-component-functional",{attrs:{component:e.field.refFieldComponent,"table-view":"",variant:"primary"},on:e._d({},[e.clickable,e.click]),model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}):n(e.component,{tag:"component",attrs:{"table-view":"",variant:"primary"},domProps:{textContent:e._s(e.val)},on:e._d({},[e.clickable,e.click]),model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}),"b-link"===e.component?[e._v(" - "),n("b-link",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:"Abrir en otra pestaña",expression:"'Abrir en otra pestaña'",modifiers:{hover:!0}}],attrs:{target:"_blank",href:"/APP/AAA/"+e.localModel+"?"+e.getFilterId}},[n("b-icon",{attrs:{icon:"box-arrow-up-right"}})],1)]:e._e()],2)]},proxy:!0},{key:"tableDetail",fn:function(){return[n(e.alone?"stacked-view":"itd-view",{tag:"component",attrs:{"no-crud":"","no-filter":"","no-qsf":"",all:e.alone,stacked:e.alone,"no-pagination":e.alone,"no-caption":e.alone,model:e.localModel,_id:e._id,"no-detail-field":e.alone,"no-reload":""}})]},proxy:!0}])})},c=[],u=n("ac0d"),s=n.n(u),d=n("fa7e"),f=n("f42e"),p={$BVP:"LinkPlugin",props:{_id:{default:function(){var e,t;return null===(e=this.row)||void 0===e?void 0:e.item[null===(t=this.field)||void 0===t?void 0:t.key]}},row:{type:Object,default:function(){return{}}},field:{type:Object,default:function(){return{}}},tableView:{type:Boolean,default:!1},tableDetail:{type:Boolean,default:!1},simple:{type:Boolean,default:!1}},data:function(){var e=this,t=function(){var t=e.tableView,n=e.tableDetail;return t?"tableView":n?"tableDetail":void 0};return{localModel:this.model||(this.field.refPath?this.row.item[this.field.refPath]:this.field.ref||this.field.myRef),inputSwitch:t(),val:"Cargando..."}},computed:{getFilterId:function(){return Array.isArray(this._id)?this._id.reduce((function(e,t){return"".concat("filter[_id]","[]=").concat(t,"&").concat(e)}),""):"".concat("filter[_id]","=").concat(this._id)},component:function(){return this.simple||this.field.noExtraInfo||0===this.val?"span":"b-link"},clickable:function(){return"span"!==this.component?"click":null},alone:function(){return!Array.isArray(this._id)}},methods:r(r({},Object(f.b)("SimpleName",["getSimpleName"])),{},{click:function(){this.$emit("click")}}),mounted:function(){var e,t=this;return(e=s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSimpleName({model:t.localModel,id:t._id,refField:t.field.refField,refFieldDefault:t.field.refFieldDefault});case 2:t.val=e.sent;case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,r){function a(e){o(c,i,r,a,l,"next",e)}function l(e){o(c,i,r,a,l,"throw",e)}var c=e.apply(t,n);a(void 0)}))})()}},v={name:"SimpleName",components:r(r({},ci("StackedView")),{},{BIconBoxArrowUpRight:d.f}),mixins:[p]},m=n("2a6f"),h=Object(m.a)(v,l,c,!1,null,null,null),t.default=h.exports}}]);