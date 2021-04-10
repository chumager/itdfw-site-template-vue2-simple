(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0aedb4"],{"0c9d":function(t,e,r){"use strict";
/*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t,e){return e.reduce((function(e,r){return t.hasOwnProperty(r)&&(e[r]=t[r]),e}),{})}var i,a,u,l,c,p,h,d,f,g,m,y,b,S,v,T;Object.defineProperty(e,"__esModule",{value:!0}),T=r("ddb6"),i=T&&"object"==typeof T&&"default"in T?T.default:T,a="undefined"!=typeof window,u={},l={},c={},p=i.extend({data:function(){return{transports:u,targets:l,sources:c,trackInstances:a}},methods:{open:function(t){var e,r,o,s,u,l,c,p,h,d;a&&(e=t.to,r=t.from,o=t.passengers,u=void 0===(s=t.order)?1/0:s,e&&r&&o&&(l={to:e,from:r,passengers:(h=o,Array.isArray(h)||"object"===n(h)?Object.freeze(h):h),order:u},-1===Object.keys(this.transports).indexOf(e)&&i.set(this.transports,e,[]),c=this.$_getTransportIndex(l),p=this.transports[e].slice(0),-1===c?p.push(l):p[c]=l,this.transports[e]=(d=function(t,e){return t.order-e.order},p.map((function(t,e){return[e,t]})).sort((function(t,e){return d(t[1],e[1])||t[0]-e[0]})).map((function(t){return t[1]})))))},close:function(t){var e,r,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t.to,s=t.from;o&&(s||!1!==n)&&this.transports[o]&&(n?this.transports[o]=[]:(e=this.$_getTransportIndex(t))>=0&&((r=this.transports[o].slice(0)).splice(e,1),this.transports[o]=r))},registerTarget:function(t,e,r){a&&(this.trackInstances&&!r&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,r){a&&(this.trackInstances&&!r&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e,r=t.to,n=t.from;for(e in this.transports[r])if(this.transports[r][e].from===n)return+e;return-1}}}),h=new p(u),d=1,f=i.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(d++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){h.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){h.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};h.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"==typeof t?t(this.slotProps):t},sendUpdate:function(){var t,e=this.normalizeSlots();e?(t={from:this.name,to:this.to,passengers:o(e),order:this.order},h.open(t)):this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],r=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(r,[this.normalizeOwnChildren(e)]):this.slim?t():t(r,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),g=i.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:h.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){h.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){h.unregisterTarget(e),h.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){h.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,r){var n=r.passengers[0],o="function"==typeof n?n(e):r.passengers;return t.concat(o)}),[])}(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),r=this.children(),n=this.transition||this.tag;return e?r[0]:this.slim&&!n?t():t(n,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},r)}}),m=0,y=["disabled","name","order","slim","slotProps","tag","to"],b=["multiple","transition"],S=i.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(m++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){var t,e,r,n,o,i;"undefined"!=typeof document&&((t=document.querySelector(this.mountTo))?(e=this.$props,h.targets[e.name]?e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=h.targets[e.name]:((r=e.append)&&(n="string"==typeof r?r:"DIV",o=document.createElement(n),t.appendChild(o),t=o),(i=s(this.$props,b)).slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new g({el:t,parent:this.$parent||this,propsData:i}))):console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document")))},beforeDestroy:function(){var t,e=this.portalTarget;this.append&&(t=e.$el).parentNode.removeChild(t),e.$destroy()},render:function(t){var e,r;return this.portalTarget?this.$scopedSlots.manual?(r=this.$scopedSlots.manual({to:this.to}),Array.isArray(r)&&(r=r[0]),r||t()):(e=s(this.$props,y),t(f,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)):(console.warn("[portal-vue] Target wasn't mounted"),t())}}),v={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",f),t.component(e.portalTargetName||"PortalTarget",g),t.component(e.MountingPortalName||"MountingPortal",S)}},e.default=v,e.Portal=f,e.PortalTarget=g,e.MountingPortal=S,e.Wormhole=h}}]);