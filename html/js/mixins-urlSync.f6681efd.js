(window.webpackJsonp=window.webpackJsonp||[]).push([["mixins-urlSync"],{a106:function(t,o,n){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i,r,a;n.r(o),i=n("7d99"),r=n.n(i),window.qs=r.a,a=function(){return r.a.parse(location.search,{ignoreQueryPrefix:!0,arrayLimit:0})},o.default={props:{noQsf:{type:Boolean,default:!1}},methods:{toURL:function(t){var o,n=a(),e=location,i=e.hash;n[t]=this[t],o=r.a.stringify(n,{arrayFormat:"brackets"}),window.history.replaceState(null,"","?"+o+i)}},created:function(){var t,o,n,i=this,r=this.$data.$toSync;if(r&&!this.noQsf){if(n=a(),Array.isArray(r))t=r;else{if("object"!==e(r))return;t=Object.keys(r),o=!0}t.forEach((function(t){i.$watch(t,(function(o,n){o!==n&&this.toURL(t)}),{deep:!0});var e=n[t];void 0===e&&o&&r[t].default&&(e=r[t].default),o&&r[t].cast&&(e=r[t].cast(e)),i.$set(i,t,e)}))}},mounted:function(){var t,o=location,n=o.hash;n&&((t=document.createElement("a")).href=n,this.$nextTick().then((function(){setTimeout((function(){t.click()}),500)})))}}}}]);