(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdComponentFunctional"],{"2e28":function(e,t,n){"use strict";function o(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)),o}function r(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t),t.default={$lodash:["camelCase","upperFirst"],name:"itdComponentFunctional",functional:!0,render:function(e,t){var n,o,c,p=t.data,u=p.attrs.component;switch(delete p.attrs.component,n=camelCase(u),o=upperFirst(n),"function"==typeof u.then?"promise":i(u)){case"string":(c=[u,n,o].find((function(e){return Vue.component(e)})))||(Vue.component(o,(function(){return{component:"function"==typeof u?u:Vue.localImport(u),loading:{template:"<div>Cargando...</div>"}}})),c=o);break;case"promise":c=function(){return u};break;case"object":case"function":c=u;break;default:throw new Error("componente indefinido para itd-component-functional "+u)}return e(c,r(r({},t.data),{},{props:t.props}),t.children)}}}}]);