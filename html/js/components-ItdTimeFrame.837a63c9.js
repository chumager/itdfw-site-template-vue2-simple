(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdTimeFrame","components-ItdTypeAhead-VueBootstrapTypeahead"],{"2a6f":function(e,t,n){"use strict";function i(e,t,n,i,a,o,r,s){var u,l,d,c="function"==typeof e?e.options:e;return t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),u&&(c.functional?(c._injectStyles=u,l=c.render,c.render=function(e,t){return u.call(t),l(e,t)}):(d=c.beforeCreate,c.beforeCreate=d?[].concat(d,u):[u])),{exports:e,options:c}}n.d(t,"a",(function(){return i}))},8017:function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a,o,r,s,u;n.r(t),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.GIClass,style:e.GIStyle},["tableView"===e.inputSwitch?[[n("span",[e._v(e._s(e.humanize))])]]:e._e(),"tableDetail"===e.inputSwitch?[[n("pre",{domProps:{innerHTML:e._s(e.localValue)}})]]:e._e(),"Input"===e.inputSwitch?[void 0,[n("div",{class:{"form-control":!0,"is-valid":e.input.state,"is-invalid":!e.input.state},staticStyle:{height:"auto"}},[n("itd-form",{attrs:{cols:"1",form:e.form,config:{}},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}})],1)],void 0]:e._e(),void 0],2)},o=[],Vue.$validator.addValidator("TimeFrame","default",(function(){return!this.value||this.value.duration&&this.value.measure?"":"La periodicidad debe tener medida de tiempo y duración"})),r={$lodash:["cloneDeep","isNil"],extends:Vue.GenericInput,data:function(){var e,t,n=null===(e=this.input)||void 0===e||null===(t=e.measures)||void 0===t?void 0:t.reduce((function(e,t){return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t.value,Array(t.duration).fill().map((function(e,t){return t+1}))))}),{});return{innerValue:"object"!==i(this.value)||isNil(this.value)?{duration:null,measure:null}:cloneDeep(this.value),options:n}},computed:{humanize:function(){var e,t,n,i;return this.value?(t=(e=this.value).measure,n=e.duration,i={days:["día","días"],weeks:["semana","semanas"],months:["mes","meses"],years:["año","años"]},"".concat(n," ").concat(1===n?i[t][0]:i[t][1])):""},form:function(){var e,t=this.localReadonly,n=this.localDisabled;return[{name:"measure",label:"Medida",description:"Medida de tiempo",type:"select",component:"ItdSelect",options:[{text:"Seleccione la medida de tiempo",value:null,disabled:!0}].concat(this.input.measures),readonly:t,disabled:n,state:!(!this.input.state&&!this.innerValue.measure)},{name:"duration",label:"Duración",description:"Duración del periodo",tag:"b-select",component:"ItdSelect",options:[{text:"Seleccione la duración",value:null,disabled:!0}].concat(null!==(e=this.innerValue)&&void 0!==e&&e.measure?this.options[this.innerValue.measure]:[]),readonly:t,disabled:n,state:!(!this.input.state&&!this.innerValue.duration)}]}},watch:{innerValue:{handler:function(){this.form[1].options.includes(this.innerValue.duration)||(this.innerValue.duration=null),this.$emit("input",this.innerValue)},deep:!0}}},s=n("2a6f"),u=Object(s.a)(r,a,o,!1,null,null,null),t.default=u.exports}}]);