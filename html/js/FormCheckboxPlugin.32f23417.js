(window.webpackJsonp=window.webpackJsonp||[]).push([["FormCheckboxPlugin"],{cb47:function(e,t,r){"use strict";function c(e,t){var r,c=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)),c}function o(e){var t,r;for(t=1;t<arguments.length;t++)r=null!=arguments[t]?arguments[t]:{},t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b,u,i,p,s,O,a,f,d,j,h,l;r.r(t),b=r("1fbd"),u=r("ddb6"),i=r("423d"),p=r("9ae8"),s=r("450f"),O=r("54db"),a=r("574b"),d=Object(O.d)(Object(s.m)(o(o({},a.c),{},(n(f={},a.a,Object(O.c)(p.b,[])),n(f,"switches",Object(O.c)(p.g,!1)),f))),i.P),j=u.default.extend({name:i.P,mixins:[a.b],provide:function(){return{bvCheckGroup:this}},props:d,computed:{isRadioGroup:function(){return!1}}}),h=r("fd9b"),l=Object(h.a)({components:{BFormCheckbox:b.a,BCheckbox:b.a,BCheck:b.a,BFormCheckboxGroup:j,BCheckboxGroup:j,BCheckGroup:j}}),Vue.use(l)}}]);