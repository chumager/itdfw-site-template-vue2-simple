(window.webpackJsonp=window.webpackJsonp||[]).push([["store-modules-auth"],{8753:function(e,t,n){"use strict";var o=n("b491"),r=n("c646"),a=Object(r.a)((function(e,t,n){Object(o.a)(e,t,n)}));t.a=a},aa5e:function(e,t,n){"use strict";function o(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)),o}function r(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,o,r,a,u){var c,i;try{i=(c=e[a](u)).value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){function a(e){u(i,o,r,a,c,"next",e)}function c(e){u(i,o,r,a,c,"throw",e)}var i=e.apply(t,n);a(void 0)}))}}var i,s,d,p,l;n.r(t),i=n("ac0d"),s=n.n(i),d=n("ddb6"),p=n("8753"),l=n("e9f3"),t.default={namespaced:!0,state:{auth:!1,userData:null,forceLink:!1,authEndpoint:!1,authShow:!0,notAllowed:!1,modelAuth:"User",modelOption:"username",componentLoaded:{}},getters:{route:function(e,t,n){return n.route}},mutations:{mergeAuth:function(e,t){Object(p.a)(e,t)},auth:function(e,t){e.auth=t.auth||!1,e.userData=t.userData,t.model&&(e.modelAuth=t.model)},notAllowed:function(e,t){e.notAllowed=t},setAuthMode:function(e,t){e.modelAuth="modelAuth"in t&&t.modelAuth,e.modelOption="modelOption"in t&&t.modelOption},setComponentLoaded:function(e,t){console.debug("definiendo componente cargado",t),e.componentLoaded[t]=!0}},actions:{showAuth:function(e,t){var n,o,r=e.state,a=e.getters;r.authShow=t,n=a.route.from,console.debug("AUTH!!!"),console.debug(JSON.stringify(a,null,2)),r.auth=!1,r.userData=null,o={path:"/auth"},n.query.redirect?o.query=n.query:o.query={redirect:a.route.from.fullPath},l.default.push(o)},logout:function(e){var t=this;return c(s.a.mark((function n(){var o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=e.state).auth=!1,o.userData=null,n.next=5,t._vm.$http.get("/APP/AAA/logout.json");case 5:location.href="/";case 6:case"end":return n.stop()}}),n)})))()},checkLogin:function(e,t){var o=this;return c(s.a.mark((function a(){var u,c,i,f,h,m,b,g,w;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=e.commit,c=e.state,i=e.getters,console.debug("checkLogin"),console.debug(c),console.debug("no esta autenticado... pidiendo datos"),a.next=6,o._vm.$http[t?"post":"get"]("/APP/AAA/checkLogin.json",t||{noAuth:!0},{noAuth:!0});case 6:f=a.sent,console.debug("resultado de la consulta de autenticación"),console.debug(f),u("auth",f.body||null),h=c.userData,m=h.functions,b=h.link,(h.getComponents||[]).forEach((function(e){var t="itdfw-app-component-".concat(e.pos).toLowerCase(),o=e.path.split("/"),r=o.shift();if(o=o.join("/"),!d.default.component(t)){switch(r){case"@":d.default.component(t,(function(){return n("8673")("./"+o)}));break;case"itdfw":d.default.component(t,(function(){return n("2e81")("./"+o)}));break;default:console.warn("componente de usuario no cargado",e.path,"no es ni relativo al proyecto ni a la base")}u("setComponentLoaded",e.pos)}})),m&&(g=function e(t,n,o){t.meta=r(r({},t.meta),{},{description:t.description||n,name:t.name||o}),delete t.name;var a=t.component;return"string"==typeof a&&(t.component=function(){return viewImport(a)}),t.children&&(t.children=t.children.map((function(n){return e(n,t.meta.description,t.meta.name)}))),t},console.groupCollapsed("generando rutas"),m.map((function(e){var t,n={path:e.path,description:e.description||e.path,name:e.name||e.path};e.route?(console.debug("la función tiene ruta"),console.debug(e.route),n=Object(p.a)({},n,e.route),e.route.path&&(n.path=e.path+"/"+n.path)):(console.debug("la función no tiene ruta"),e.component?n.component=e.component:(console.debug("la función no tiene componente"),n.component=function(){return o._vm.$http.get(n.path+".vue").then((function(e){var t=e.body;return viewImport(t)}))})),console.debug(n),t=g(n,n.description),l.default.addRoute(t)})),l.default.addRoute({path:"*",component:function(){return n.e("components-Error404").then(n.bind(null,"dcf4"))}}),console.groupEnd(),(w=i.route.query.redirect)?(console.debug("redirect",w),l.default.push(w)):(b&&"/"===window.location.pathname||c.authEndpoint&&c.auth||t&&c.auth||c.forceLink)&&(c.forceLink&&(c.forceLink=!1),l.default.push(b).catch((function(e){"NavigationDuplicated"===e.name&&(console.warn("Error de duplicación de ruta",b),l.default.push({path:b||"/",query:{rand:Math.random()}}))}))));case 13:case"end":return a.stop()}}),a)})))()}}}}}]);