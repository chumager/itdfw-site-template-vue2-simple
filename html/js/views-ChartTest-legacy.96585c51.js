(window.webpackJsonp=window.webpackJsonp||[]).push([["views-ChartTest","components-ItdTypeAhead-VueBootstrapTypeahead"],{"2a6f":function(t,n,e){"use strict";function o(t,n,e,o,a,r,i,s){var c,d,u,l="function"==typeof t?t.options:t;return n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c&&(l.functional?(l._injectStyles=c,d=l.render,l.render=function(t,n){return c.call(n),d(t,n)}):(u=l.beforeCreate,l.beforeCreate=u?[].concat(u,c):[c])),{exports:t,options:l}}e.d(n,"a",(function(){return o}))},"3fc0":function(t,n,e){"use strict";var o,a,r,i,s;e.r(n),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"small"},[e("ITDChart"+t.chart,{tag:"component",attrs:{"chart-data":t.datacollection}}),t._v(" "),e("button",{on:{click:function(n){return t.fillData()}}},[t._v("Randomize")])],1)},a=[],r={props:{chart:{type:String,default:"Line"}},data:function(){return{datacollection:null}},beforeMount:function(){var t=this;console.debug("beforeMount"),Vue.component("ITDChart_".concat(this.chart),(function(){return e.e("chunk-2d21df6b").then(e.bind(null,"d416")).then((function(n){return(0,n.ITDChart)(t.chart)}))}))},mounted:function(){this.fillData()},methods:{fillData:function(){this.datacollection={labels:[this.getRandomInt(),this.getRandomInt()],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[this.getRandomInt(),this.getRandomInt()]},{label:"Data One",backgroundColor:"#f87979",data:[this.getRandomInt(),this.getRandomInt()]}]}},getRandomInt:function(){return Math.floor(46*Math.random())+5}}},e("ee47"),i=e("2a6f"),s=Object(i.a)(r,o,a,!1,null,null,null),n.default=s.exports},e6ac:function(t,n,e){},ee47:function(t,n,e){"use strict";e("e6ac")}}]);