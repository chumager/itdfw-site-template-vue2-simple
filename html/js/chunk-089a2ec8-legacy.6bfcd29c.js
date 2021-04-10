(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-089a2ec8"],{"4a9e":function(r,e,n){"use strict";var t,o;n.r(e),t=n("948c"),o=n.n(t),e.default={install:function(r,e){e=e||"$worker",Object.defineProperty(r.prototype,e,{value:o.a})}}},"948c":function(r,e,n){"use strict";function t(){var r=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(f(e)(["arraysArray","postParamsArray","stringsArray"])){if(0===e.length)return Promise.all(this.actions.map((function(e){var n=e.message;return r.postMessage(n)})));if(e.every((function(r){return"string"==typeof r})))return Promise.all(e.map((function(e){return r.postMessage(e)})));if(e.every((function(r){return"object"===(void 0===r?"undefined":o(r))&&!Array.isArray(r)})))return Promise.all(e.map((function(e){var n=e.message,t=e.args;return r.postMessage(n,t)})));if(e.every((function(r){return Array.isArray(r)}))&&e.length===this.actions.length)return Promise.all(e.map((function(e,n){return r.postMessage(r.actions[n].message,e)})))}return console.error(l(m(e))),null}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i=function(r){return function(e){return!!e&&!Array.isArray(e)&&r.every((function(r){return e.hasOwnProperty(r)}))}},s=function(r){return i(["message","func"])(r)&&"function"==typeof r.func&&"string"==typeof r.message},a=function(r){return i(["message","args"])(r)&&Array.isArray(r.args)&&"string"==typeof r.message},u={actionsArray:function(r){return function(r){return r.every(s)}(r)},arraysArray:function(r){return r.every((function(r){return Array.isArray(r)}))},objectsArray:function(r){return function(r){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.every(i(e))}}(r)()},postParamsArray:function(r){return function(r){return r.every(a)}(r)},stringsArray:function(r){return r.every((function(r){return"string"==typeof r}))}},c=function(r){return function(e){return"null"===e?null===r:"undefined"===e?void 0===r:"action"===e?s(r):Array.isArray(r)?!("array"!==e&&!u[e])&&("array"===e||u[e](r)):!!r&&(void 0===r?"undefined":o(r))===e.toString()}},f=function(r){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Array.isArray(e)?e.some((function(e){return c(r)(e)})):!!c(r)(e)}},l=function(r){var e=r.expected,n=void 0===e?"":e,t=r.received,o=r.extraInfo,i=void 0===o?"":o;try{return new TypeError("You should provide "+n+"\n"+i+"\nReceived: "+JSON.stringify(t))}catch(r){if("Converting circular structure to JSON"===r.message)return new TypeError("You should provide "+n+"\n"+i+"\nReceived a circular structure: "+t);throw r}},y=function(r){return"\n  self.onmessage = event => {\n    const args = event.data.message.args\n    if (args) {\n      self.postMessage(("+r+").apply(null, args))\n      return close()\n    }\n    self.postMessage(("+r+")())\n    return close()\n  }\n"},g=function(r){var e=window.URL||window.webkitURL,n=new Blob([r],{type:"application/javascript"}),t=e.createObjectURL(n),o=new Worker(t);return o.post=function(r){return new Promise((function(n,i){o.onmessage=function(r){e.revokeObjectURL(t),n(r.data)},o.onerror=function(r){console.error("Error: Line "+r.lineno+" in "+r.filename+": "+r.message),i(r)},o.postMessage({message:r})}))},o},d=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments[1],n=f(r)("function"),t=f(e)(["array","undefined"]);return n&&t?g(y(r)).post({args:e}):(n||console.error(l({expected:"a function",received:r})),t||console.error(l({expected:"an array",received:e})),null)},p=function(r){return console.warn("WARN! "+r+" is not a registered action for this worker"),r+" is not a registered action for this worker"},v=function(r){return function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1],o=f(n)("string"),i=f(t)(["array","undefined"]);return o&&i?(e=r.filter((function(r){var e=r.message;return JSON.stringify(e)===JSON.stringify(n)})).map((function(r){return r.func})).pop())?t?d(e,t):d(e):d(p,[JSON.stringify(n)]):(o||console.error(l({expected:"a string",received:n})),i||console.error(l({expected:"an array",received:t})),null)}},m=function(r){return{expected:"an array of arrays, an array of objects, or an array of strings",received:r,extraInfo:"If an array of arrays, it must have the same length as the actions registered for this worker.\nIf an array of objects, every object must containing two fields:\n* message\n* args"}},h=function(r){return function(e){return function(r){return function(e){return r.some((function(r){return r.message===e.message}))}}(r)(e)?(console.warn(function(r){return'WARN! An action with message "'+r.message+'" is already registered for this worker'}(e)),r.length):r.push(e)}},w=function(r){return{expected:"an array of actions or an action",received:r,extraInfo:"Every action should be an object containing two fields:\n* message\n* func"}},A=function(r){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f(e)(["action","actionsArray"])?Array.isArray(e)?e.reduce((function(r,e){return h(r)(e),r}),r).length:h(r)(e):(console.error(l(w(e))),null)}},b=function(r){return function(e){var n=r.findIndex((function(r){return r.message===e}));return-1===n?console.warn('WARN! Impossible to unregister action with message "'+e+'".\nIt is not a registered action for this worker.'):r.splice(n,1),r}},j=function(r){return{expected:"an array of strings or a string",received:r}},k=function(r){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f(e)(["string","stringsArray"])?Array.isArray(e)?e.reduce((function(r,e){return b(r)(e),r}),r).length:b(r)(e).length:(console.error(l(j(e))),null)}},x=function(r){return{expected:"an array of objects",received:r,extraInfo:"Every action should be an object containing two fields:\n* message\n* func"}},R=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return f(r)("actionsArray")?{actions:r,postMessage:v(r),postAll:t,register:A(r),unregister:k(r)}:(console.error(l(x(r))),null)},O=window.Worker?window.URL.createObjectURL||window.webkitURL.createObjectURL?{create:R,run:d}:(console.error("This browser does not have URL.createObjectURL method."),null):(console.error("This browser does not support Workers."),null);r.exports=O}}]);