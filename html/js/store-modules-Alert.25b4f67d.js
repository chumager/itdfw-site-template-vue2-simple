(window.webpackJsonp=window.webpackJsonp||[]).push([["store-modules-Alert"],{"6e35":function(n,t,e){"use strict";function o(n,t,e,o,r,a,s){var c,i;try{i=(c=n[a](s)).value}catch(u){return void e(u)}c.done?t(i):Promise.resolve(i).then(o,r)}var r,a;e.r(t),r=e("ac0d"),a=e.n(r),t.default={namespaced:!0,state:{alerts:{},modals:{}},mutations:{remove:function(n,t){delete n.alerts[t]},add:function(n,t){t.show=!0;var e=Math.ceil(1e8*Math.random());this._vm.$set(n.alerts,e,t)}},actions:{error:function(n,t){(0,n.commit)("add",{header:"Error",content:t,variant:"danger"})},success:function(n,t){(0,n.commit)("add",{header:"Info",content:t,variant:"success"})},raw:function(n,t){(0,n.commit)("add",t)},modal:function(n,t){return(e=a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"string"==typeof t&&(t={message:t});case 1:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,a){function s(n){o(i,r,a,s,c,"next",n)}function c(n){o(i,r,a,s,c,"throw",n)}var i=e.apply(n,t);s(void 0)}))})();var e},confirm:function(n,t){var e=t.message,o=t.options;return this._vm.$bvModal.msgBoxConfirm(e,o)}}}}}]);