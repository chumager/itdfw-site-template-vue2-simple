(window.webpackJsonp=window.webpackJsonp||[]).push([["mixins-Auth"],{"15cc":function(t,e,r){"use strict";function o(t,e,r,o,n,u,c){var i,s;try{s=(i=t[u](c)).value}catch(a){return void r(a)}i.done?e(s):Promise.resolve(s).then(o,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){function c(t){o(s,n,u,c,i,"next",t)}function i(t){o(s,n,u,c,i,"throw",t)}var s=t.apply(e,r);c(void 0)}))}}function u(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)),o}function c(t){var e,r;for(e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?u(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}));return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s,a,h;r.r(e),s=r("ac0d"),a=r.n(s),h=r("f42e"),e.default={name:"auth",data:function(){return{form:null,formAuth:[],show:!1,myOption:{option:""},myAuth:{},options:[],optionsForm:{},error:"",authShow:!0,validOption:!1}},computed:c(c({},Object(h.e)("auth",["auth","userData","modelAuth","modelOption"])),{},{option:{get:function(){return this.modelOption||this.myOption.option},set:function(t){this.myOption.option=t}},canSend:function(){var t=this.myAuth,e=Object.keys(t).length,r=Object.keys(t).filter((function(e){return!!t[e]})).length;return r===e},localModel:function(){return this.modelAuth||"User"}}),watch:{option:{handler:function(t){this.validOption=!!t},immediate:!0}},beforeMount:function(){this.mergeAuth({authEndpoint:!0})},methods:c(c(c(c({},Object(h.b)("auth",["checkLogin","logout","showAuth"])),Object(h.d)("auth",["mergeAuth"])),Object(h.b)("Alert",["success"])),{},{onShow:function(t){this.auth?(t.preventDefault(),console.debug("signout user"),this.logout()):(console.debug("ejecutando modal auth"),this.show=!0)},getOptions:function(){var t=this;return n(a.a.mark((function e(){var r,o,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/APP/AAA/authForm.json",{model:t.localModel});case 2:return r=e.sent,o=r.body,t.options=o,n=[{type:"select",tag:"b-radio-group",component:"ItdSelect",name:"option",label:"Seleccione la forma de autenticar",value:null,options:o}],console.debug("getOptions"),console.debug(n),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))()},getForm:function(){var t=this;return n(a.a.mark((function e(){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("getForm"),e.next=3,t.$http.post("/APP/AAA/authForm.json",{model:t.localModel,option:t.option});case 3:return r=e.sent,o=r.body,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))()},submitAuth:function(){var t=this;return n(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.formAuth.localForm[1].error="",t.$refs.formAuth.localForm[1].state=!0,e.next=4,t.$nextTick();case 4:t.$refs.formAuth.submit();case 5:case"end":return e.stop()}}),e)})))()},sendAuth:function(){var t=this;return n(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.checkLogin(t.myAuth);case 3:e.next=11;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("ERROR DE AUTENTICACION"),console.error(e.t0),t.$refs.formAuth.localForm[1].error="Error de autenticación",t.$refs.formAuth.localForm[1].state=!1;case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))()},recovery:function(){var t,e=this,r=this.myAuth.email;if(this.$refs.formAuth.localForm[0].error="",this.$refs.formAuth.localForm[0].state=!0,r)return t=this.modelAuth,this.$http.get("/APP/AAA/recovery.json",{params:{email:r,model:t}}).then((function(t){var r=t.body;console.debug("resultado recovery",r),e.success("Se le ha enviado un correo con las instrucciones de recuperación")})).catch((function(t){console.error("recovery",t)}));this.$refs.formAuth.localForm[0].error="Debe ingresar su email",this.$refs.formAuth.localForm[0].state=!1,this.$refs.formAuth.validateForm()}})}}}]);