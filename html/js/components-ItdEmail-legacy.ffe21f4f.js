(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdEmail","components-ItdTypeAhead-VueBootstrapTypeahead"],{"2a6f":function(t,e,n){"use strict";function o(t,e,n,o,a,i,r,s){var c,l,p,u="function"==typeof t?t.options:t;return e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),c&&(u.functional?(u._injectStyles=c,l=u.render,u.render=function(t,e){return c.call(e),l(t,e)}):(p=u.beforeCreate,u.beforeCreate=p?[].concat(p,c):[c])),{exports:t,options:u}}n.d(e,"a",(function(){return o}))},4326:function(t,e,n){"use strict";var o,a,i;n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseInt(t,10);return isNaN(n)?e:n},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseFloat(t);return isNaN(n)?e:n},i=function(t,e){return a(t).toFixed(o(e,0))}},"82b4":function(t,e,n){"use strict";var o,a,i,r,s;n.r(e),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.GIClass,style:t.GIStyle},["tableView"===t.inputSwitch?[[n("span",{staticStyle:{display:"flex"}},[n("a",{attrs:{target:"_blank",href:t.mail},domProps:{textContent:t._s(t.value)}}),n("b-icon",{staticStyle:{cursor:"pointer"},attrs:{icon:"clipboard-data"},on:{click:t.copy}})],1)]]:t._e(),"tableDetail"===t.inputSwitch?[[n("span",{staticStyle:{display:"flex"}},[n("b-icon",{staticClass:"mr-1",staticStyle:{cursor:"pointer"},attrs:{icon:"clipboard-data"},on:{click:t.copy}}),n("a",{attrs:{target:"_blank",href:t.mail},domProps:{textContent:t._s(t.value)}})],1)]]:t._e(),"Input"===t.inputSwitch?[void 0,[n("b-input-group",{attrs:{size:t.localSize}},[t.plaintext?t._e():n("b-input-group-prepend",{ref:"prepend"},[[t.localLeft?n("b-input-group-text",{domProps:{textContent:t._s(t.localLeft)}}):t._e()],t.input.buttonLeft?[n("b-btn",{on:{click:t.input.buttonLeft.click}},[t.input.buttonLeft.icon?n("icon",{staticClass:"pt-1",attrs:{name:t.input.buttonLeft.icon}}):t.input.buttonLeft.text?n("span",{domProps:{innerHTML:t._s(t.input.buttonLeft.text)}}):n("span",[t._v("???")])],1)]:t._e()],2),n(t.localTag,t._g(t._b({ref:"input",tag:"component",staticClass:"input",attrs:{type:t.localType,plaintext:t.plaintext,"lazy-formatter":t.lazyFormatter,formatter:t.formatter,lazy:t.localLazy,size:t.localSize,disabled:t.localDisabled,readonly:t.localReadonly,autocomplete:t.$attrs.autocomplete||"off",placeholder:t.placeholder},nativeOn:{keypress:function(e){return t.keypress(e)},focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}},"component",Object.assign({},t.input,{state:"boolean"==typeof t.$attrs.state?t.$attrs.state:t.input&&t.input.state},t.attrs),!1),t.listeners)),t.plaintext?t._e():n("b-input-group-append",{ref:"append"},[t.input.buttonRight?[n("b-btn",{on:{click:t.input.buttonRight.click}},[t.input.buttonRight.icon?n("icon",{attrs:{name:t.input.buttonRight.icon}}):t.input.buttonRight.text?n("span",{domProps:{innerHTML:t._s(t.input.buttonRight.text)}}):n("span",[t._v("???")])],1)]:t._e(),[t.localRight?n("b-input-group-text",{domProps:{textContent:t._s(t.localRight)}}):t._e()]],2)],1)],void 0]:t._e(),void 0],2)},a=[],i={components:{BIconClipboardData:n("fa7e").q},extends:Vue.GenericInput,data:function(){return{type:"email",mail:"mailto://"+this.value}},methods:{copy:function(){var t=this;this.$copyText(this.value).then((function(){t.$store.dispatch("Alert/success","Correo copiado correctamente")}),(function(){t.$store.dispatch("Alert/error","Error tratando de copiar el correo, por favor hágalo manualmente")}))}}},r=n("2a6f"),s=Object(r.a)(i,o,a,!1,null,null,null),e.default=s.exports}}]);