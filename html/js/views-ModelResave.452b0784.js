(window.webpackJsonp=window.webpackJsonp||[]).push([["views-ModelResave","components-ItdTypeAhead-VueBootstrapTypeahead"],{1482:function(e,t,n){"use strict";function o(e,t,n,o,r,s,a){var i,c;try{c=(i=e[s](a)).value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){function a(e){o(c,r,s,a,i,"next",e)}function i(e){o(c,r,s,a,i,"throw",e)}var c=e.apply(t,n);a(void 0)}))}}var s,a,i,c,l,u,d;n.r(t),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("itd-component-functional",{attrs:{component:"ItdForm",form:e.form,config:{}},model:{value:e.models,callback:function(t){e.models=t},expression:"models"}}),n("b-btn",{staticClass:"mt-3",attrs:{variant:"primary",disabled:e.disabled},on:{click:e.updateModel}},[e._v(" Volver a Guardar "+e._s(e.models.model)+" ")]),n("hr"),n("h5",[e._v("Tiempo Transcurrido: "+e._s(e._f("time")(e.elapsed)))]),n("h5",[e._v("Tiempo por Operación: "+e._s(e._f("timems")(e.tbo)))]),n("h5",[e._v("ETA: "+e._s(e._f("time")(e.eta)))]),n("b-progress",{attrs:{max:e.total,value:e.count}},[n("b-progress-bar",{attrs:{value:e.count,label:e.count+"/"+e.total}})],1),e.result?n("itd-view",{ref:"table",attrs:{"no-filter":"","no-detail-field":"","get-fields":e.resultFields,items:e.result,"no-crud":"","no-form":"","no-specs":""}}):e._e()],1)},a=[],i=n("ac0d"),c=n.n(i),l={$BVP:["ButtonPlugin","ProgressPlugin"],filters:{time:function(e){return moment.utc(e).format("HH:mm:ss")},timems:function(e){return moment.utc(e).format("HH:mm:ss.SSS")}},data:function(){return{disabled:!1,elapsed:0,startTime:0,eta:0,tbo:0,models:{},result:[],resultFields:[{key:"status",label:"resultado",component:"string"},{key:"id",label:"identificador",component:"string"},{key:"message",label:"Mensaje",component:"string"}],total:0,count:0}},asyncComputed:{form:{get:function(){var e=this;return r(c.a.mark((function t(){var n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http("/APP/Models/models.json");case 2:return n=t.sent,o=n.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))()},default:[]}},watch:{elapsed:function(e){if(e){this.tbo=this.elapsed/this.count;var t=this.total-this.count;this.eta=this.tbo*t}}},methods:{updateModel:function(){var e=this;return r(c.a.mark((function t(){var n,o,r,s,a,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=e.models,r=o.model,s=o.presave,a=o.all,e.result=[],e.total=0,e.count=0,e.$refs.table.refreshTable(),i=onDev?"http://dobleimpacto.itdmovil.cl":"",l=e.$sse.create({url:"".concat(i,"/APP/Models/models.sse?model=").concat(r,"&presave=").concat(s)}),t.next=10,l.connect();case 10:console.log(l),l.on("error",(function(e){console.error("SSE",e),clearInterval(n),l.disconnect()})),l.once("done",(function(){e.$store.dispatch("Alert/success","Guardado Terminado"),clearInterval(n),l.disconnect()})),l.on("data",(function(t){e.count++,(a||"ERROR"===t.status)&&(e.result.push(t),e.$refs.table.refreshTableDebounce())})),l.once("count",(function(t){e.total=t.count,e.startTime=Date.now(),n=setInterval((function(){return e.elapsed=Date.now()-e.startTime}),1e3)})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},u=n("2a6f"),d=Object(u.a)(l,s,a,!1,null,null,null),t.default=d.exports},"2a6f":function(e,t,n){"use strict";function o(e,t,n,o,r,s,a,i){var c,l,u,d="function"==typeof e?e.options:e;return t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):r&&(c=i?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),c&&(d.functional?(d._injectStyles=c,l=d.render,d.render=function(e,t){return c.call(t),l(e,t)}):(u=d.beforeCreate,d.beforeCreate=u?[].concat(u,c):[c])),{exports:e,options:d}}n.d(t,"a",(function(){return o}))}}]);