(window.webpackJsonp=window.webpackJsonp||[]).push([["InputGroupPlugin"],{"2e85":function(t,n,e){"use strict";var r,o,u,c,i,a;e.d(n,"a",(function(){return u})),e.d(n,"d",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return a})),r=e("e3ee"),o=e("45f5"),u=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(o.a)()||console.warn("[BootstrapVue warn]: ".concat(n?"".concat(n," - "):"").concat(t))},c=function(t){return!r.i&&(u("".concat(t,": Can not be called during SSR.")),!0)},i=function(t){return!r.f&&(u("".concat(t,": Requires Promise support.")),!0)},a=function(t){return!r.c&&(u("".concat(t,": Requires MutationObserver support.")),!0)}},3166:function(t,n,e){var r,o;n.nextTick=function(t){var n=Array.prototype.slice.call(arguments);n.shift(),setTimeout((function(){t.apply(null,n)}),0)},n.platform=n.arch=n.execPath=n.title="browser",n.pid=1,n.browser=!0,n.env={},n.argv=[],n.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},o="/",n.cwd=function(){return o},n.chdir=function(t){r||(r=e("c625")),o=r.resolve(t,o)},n.exit=n.kill=n.umask=n.dlopen=n.uptime=n.memoryUsage=n.uvCounters=function(){},n.features={}},"41de":function(t,n,e){"use strict";function r(t,n){return n?n.toUpperCase():""}function o(t){var n,e,o,u,c,s,l;for(e={},o=0,u=t.split(f);o<u.length;o++)s=(c=u[o].split(a))[0],l=c[1],(s=s.trim())&&("string"==typeof l&&(l=l.trim()),e[(n=s,n.replace(i,r))]=l);return e}function u(){var t,n,e,r,u,i,a,f,s,l,d;for(e={},r=arguments.length;r--;)for(u=0,i=Object.keys(arguments[r]);u<i.length;u++)switch(t=i[u]){case"class":case"style":case"directives":if(Array.isArray(e[t])||(e[t]=[]),"style"===t){for(a=void 0,a=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style],f=0;f<a.length;f++)"string"==typeof(s=a[f])&&(a[f]=o(s));arguments[r].style=a}e[t]=e[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":for(e[t]||(e[t]={}),l=0,d=Object.keys(arguments[r][t]||{});l<d.length;l++)n=d[l],e[t][n]?e[t][n]=[].concat(e[t][n],arguments[r][t][n]):e[t][n]=arguments[r][t][n];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":e[t]||(e[t]={}),e[t]=c({},arguments[r][t],e[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:e[t]||(e[t]=arguments[r][t])}return e}e.d(n,"a",(function(){return u}));var c=function(){return(c=Object.assign||function(t){var n,e,r,o;for(e=1,r=arguments.length;e<r;e++)for(o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},i=/-(\w)/g,a=/:(.*)/,f=/;(?![^(]*\))/g},4428:function(t,n,e){"use strict";var r,o,u;e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return u})),r=e("26fb"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(r.o,"")},u=function(t,n){return t?{innerHTML:t}:n?{textContent:n}:{}}},"45f5":function(t,n,e){"use strict";(function(t){var r,o;e.d(n,"a",(function(){return o})),r=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=void 0!==t&&t?Object({NODE_ENV:"production",VUE_APP_HOST:"",VUE_APP_PROTOCOL:"http",BASE_URL:"/"})||!1:{};return n?r[n]||e:r},o=function(){return r("BOOTSTRAP_VUE_NO_WARN")||"production"===r("NODE_ENV")}}).call(this,e("3166"))},"72df":function(t,n,e){"use strict";var r,o,u,c,i;e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return i})),r=e("e839"),o=e("1299"),u=e("8b4a"),c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(t=Object(r.b)(t).filter(o.a)).some((function(t){return n[t]||e[t]}))},i=function(t){var n,e,c,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};for(t=Object(r.b)(t).filter(o.a),e=0;e<t.length&&!n;e++)n=a[c=t[e]]||f[c];return Object(u.f)(n)?n(i):n}},"753c":function(t,n,e){"use strict";var r,o,u,c,i,a,f,s,l,d,p,b,g,v,O,h,j,y,m,w,P,k,A,x,E,C,S,_,D,T,V,B,N,R,$,G,H,I,U,q,z,M,L,Y,J,W,F,K,Q,X,Z,tt,nt,et,rt,ot,ut,ct,it,at,ft,st,lt,dt;e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return i})),e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return f})),e.d(n,"h",(function(){return s})),e.d(n,"i",(function(){return l})),e.d(n,"j",(function(){return d})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return b})),e.d(n,"m",(function(){return g})),e.d(n,"n",(function(){return v})),e.d(n,"o",(function(){return O})),e.d(n,"p",(function(){return h})),e.d(n,"q",(function(){return j})),e.d(n,"r",(function(){return y})),e.d(n,"s",(function(){return m})),e.d(n,"t",(function(){return w})),e.d(n,"u",(function(){return P})),e.d(n,"v",(function(){return k})),e.d(n,"w",(function(){return A})),e.d(n,"x",(function(){return x})),e.d(n,"y",(function(){return E})),e.d(n,"z",(function(){return C})),e.d(n,"A",(function(){return S})),e.d(n,"B",(function(){return _})),e.d(n,"C",(function(){return D})),e.d(n,"D",(function(){return T})),e.d(n,"E",(function(){return V})),e.d(n,"F",(function(){return B})),e.d(n,"G",(function(){return N})),e.d(n,"H",(function(){return R})),e.d(n,"I",(function(){return $})),e.d(n,"J",(function(){return G})),e.d(n,"K",(function(){return H})),e.d(n,"L",(function(){return I})),e.d(n,"M",(function(){return U})),e.d(n,"N",(function(){return q})),e.d(n,"O",(function(){return z})),e.d(n,"P",(function(){return M})),e.d(n,"Q",(function(){return L})),e.d(n,"R",(function(){return Y})),e.d(n,"S",(function(){return J})),e.d(n,"T",(function(){return W})),e.d(n,"U",(function(){return F})),e.d(n,"V",(function(){return K})),e.d(n,"W",(function(){return Q})),e.d(n,"X",(function(){return X})),e.d(n,"Y",(function(){return Z})),e.d(n,"Z",(function(){return tt})),e.d(n,"ab",(function(){return nt})),e.d(n,"bb",(function(){return et})),e.d(n,"cb",(function(){return rt})),e.d(n,"db",(function(){return ot})),e.d(n,"eb",(function(){return ut})),e.d(n,"fb",(function(){return ct})),e.d(n,"gb",(function(){return it})),e.d(n,"hb",(function(){return at})),e.d(n,"ib",(function(){return ft})),e.d(n,"jb",(function(){return st})),e.d(n,"kb",(function(){return lt})),e.d(n,"lb",(function(){return dt})),r="add-button-text",o="append",u="aside",c="badge",i="bottom-row",a="button-content",f="custom-foot",s="decrement",l="default",d="description",p="dismiss",b="drop-placeholder",g="ellipsis-text",v="empty",O="emptyfiltered",h="file-name",j="first",y="first-text",m="footer",w="header",P="header-close",k="icon-clear",A="icon-empty",x="icon-full",E="icon-half",C="img",S="increment",_="invalid-feedback",D="label",T="last-text",V="lead",B="loading",N="modal-backdrop",R="modal-cancel",$="modal-footer",G="modal-header",H="modal-header-close",I="modal-ok",U="modal-title",q="nav-next-decade",z="nav-next-month",M="nav-next-year",L="nav-prev-decade",Y="nav-prev-month",J="nav-prev-year",W="nav-this-month",F="next-text",K="overlay",Q="page",X="placeholder",Z="prepend",tt="prev-text",nt="row-details",et="table-busy",rt="table-caption",ot="table-colgroup",ut="tabs-end",ct="tabs-start",it="text",at="thead-top",ft="title",st="toast-title",lt="top-row",dt="valid-feedback"},abf0:function(t,n,e){"use strict";function r(t,n){var e,r=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)),r}function o(t){var n,e;for(n=1;n<arguments.length;n++)e=null!=arguments[n]?arguments[n]:{},n%2?r(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e,r=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)),r}function i(t){var n,e;for(n=1;n<arguments.length;n++)e=null!=arguments[n]?arguments[n]:{},n%2?c(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f,s,l,d,p,b,g,v,O,h,j,y,m,w,P,k,A,x,E,C,S;e.r(n),f=e("ddb6"),s=e("41de"),l=e("423d"),d=e("9ae8"),p=e("753c"),b=e("4428"),g=e("72df"),v=e("54db"),O=e("450f"),h=Object(v.d)({tag:Object(v.c)(d.u,"div")},l.ub),j=f.default.extend({name:l.ub,functional:!0,props:h,render:function(t,n){var e=n.props,r=n.data,o=n.children;return t(e.tag,Object(s.a)(r,{staticClass:"input-group-text"}),o)}}),y=Object(v.d)({append:Object(v.c)(d.g,!1),id:Object(v.c)(d.u),isText:Object(v.c)(d.g,!1),tag:Object(v.c)(d.u,"div")},l.rb),m=f.default.extend({name:l.rb,functional:!0,props:y,render:function(t,n){var e=n.props,r=n.data,o=n.children,u=e.append;return t(e.tag,Object(s.a)(r,{class:{"input-group-append":u,"input-group-prepend":!u},attrs:{id:e.id}}),e.isText?[t(j,o)]:o)}}),w=Object(v.d)(Object(O.j)(y,["append"]),l.sb),P=f.default.extend({name:l.sb,functional:!0,props:w,render:function(t,n){var e=n.props,r=n.data,u=n.children;return t(m,Object(s.a)(r,{props:o(o({},e),{},{append:!0})}),u)}}),k=Object(v.d)(Object(O.j)(y,["append"]),l.tb),A=f.default.extend({name:l.tb,functional:!0,props:k,render:function(t,n){var e=n.props,r=n.data,o=n.children;return t(m,Object(s.a)(r,{props:i(i({},e),{},{append:!1})}),o)}}),x=Object(v.d)({append:Object(v.c)(d.u),appendHtml:Object(v.c)(d.u),id:Object(v.c)(d.u),prepend:Object(v.c)(d.u),prependHtml:Object(v.c)(d.u),size:Object(v.c)(d.u),tag:Object(v.c)(d.u,"div")},l.qb),E=f.default.extend({name:l.qb,functional:!0,props:x,render:function(t,n){var e,r,o,u,c,i=n.props,a=n.data,f=n.slots,l=n.scopedSlots,d=i.prepend,v=i.prependHtml,O=i.append,h=i.appendHtml,y=i.size,m=l||{},w=f(),k={},x=t(),E=Object(g.a)(p.Y,m,w);return(E||d||v)&&(x=t(A,[E?Object(g.b)(p.Y,k,m,w):t(j,{domProps:Object(b.a)(v,d)})])),e=t(),((r=Object(g.a)(p.b,m,w))||O||h)&&(e=t(P,[r?Object(g.b)(p.b,k,m,w):t(j,{domProps:Object(b.a)(h,O)})])),t(i.tag,Object(s.a)(a,{staticClass:"input-group",class:(o={},u="input-group-".concat(y),c=y,u in o?Object.defineProperty(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,o),attrs:{id:i.id||null,role:"group"}}),[x,Object(g.b)(p.i,k,m,w),e])}}),C=e("fd9b"),S=Object(C.a)({components:{BInputGroup:E,BInputGroupAddon:m,BInputGroupPrepend:A,BInputGroupAppend:P,BInputGroupText:j}}),Vue.use(S)},c625:function(t,n,e){(function(t){function e(t,n){var e,r,o=0;for(e=t.length-1;e>=0;e--)"."===(r=t[e])?t.splice(e,1):".."===r?(t.splice(e,1),o++):o&&(t.splice(e,1),o--);if(n)for(;o--;o)t.unshift("..");return t}function r(t,n){var e,r;if(t.filter)return t.filter(n);for(e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}n.resolve=function(){var n,o,u="",c=!1;for(n=arguments.length-1;n>=-1&&!c;n--){if("string"!=typeof(o=n>=0?arguments[n]:t.cwd()))throw new TypeError("Arguments to path.resolve must be strings");o&&(u=o+"/"+u,c="/"===o.charAt(0))}return(c?"/":"")+(u=e(r(u.split("/"),(function(t){return!!t})),!c).join("/"))||"."},n.normalize=function(t){var u=n.isAbsolute(t),c="/"===o(t,-1);return(t=e(r(t.split("/"),(function(t){return!!t})),!u).join("/"))||u||(t="."),t&&c&&(t+="/"),(u?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(r(t,(function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},n.relative=function(t,e){function r(t){for(var n,e=0;e<t.length&&""===t[e];e++);for(n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}var o,u,c,i,a,f;for(t=n.resolve(t).substr(1),e=n.resolve(e).substr(1),o=r(t.split("/")),u=r(e.split("/")),i=c=Math.min(o.length,u.length),a=0;a<c;a++)if(o[a]!==u[a]){i=a;break}for(f=[],a=i;a<o.length;a++)f.push("..");return(f=f.concat(u.slice(i))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){var n,e,r,o;if("string"!=typeof t&&(t+=""),0===t.length)return".";for(n=47===t.charCodeAt(0),e=-1,r=!0,o=t.length-1;o>=1;--o)if(47===t.charCodeAt(o)){if(!r){e=o;break}}else r=!1;return-1===e?n?"/":".":n&&1===e?"/":t.slice(0,e)},n.basename=function(t,n){var e=function(t){var n,e,r,o;for("string"!=typeof t&&(t+=""),n=0,e=-1,r=!0,o=t.length-1;o>=0;--o)if(47===t.charCodeAt(o)){if(!r){n=o+1;break}}else-1===e&&(r=!1,e=o+1);return-1===e?"":t.slice(n,e)}(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){var n,e,r,o,u,c,i;for("string"!=typeof t&&(t+=""),n=-1,e=0,r=-1,o=!0,u=0,c=t.length-1;c>=0;--c)if(47!==(i=t.charCodeAt(c)))-1===r&&(o=!1,r=c+1),46===i?-1===n?n=c:1!==u&&(u=1):-1!==n&&(u=-1);else if(!o){e=c+1;break}return-1===n||-1===r||0===u||1===u&&n===r-1&&n===e+1?"":t.slice(n,r)};var o="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("3166"))},e697:function(t,n,e){"use strict";var r,o,u,c,i;e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return i})),r=e("26fb"),o=e("1299"),u=e("8b4a"),c=function(t,n){var e,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return(n=Object(u.a)(n)?n.join("."):n)&&Object(u.j)(t)?n in t?t[n]:0===(e=(n=String(n).replace(r.a,".$1")).split(".").filter(o.a)).length?c:e.every((function(n){return Object(u.j)(t)&&n in t&&!Object(u.p)(t=t[n])}))?t:Object(u.g)(t)?null:c:c},i=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=c(t,n);return Object(u.p)(r)?e:r}},e839:function(t,n,e){"use strict";var r,o,u,c,i,a,f;e.d(n,"f",(function(){return o})),e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return f})),r=e("8b4a"),o=function(){return Array.from.apply(Array,arguments)},u=function(t,n){return-1!==t.indexOf(n)},c=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return Array.prototype.concat.apply([],n)},i=function(t,n){var e=Object(r.f)(n)?n:function(){return n};return Array.apply(null,{length:t}).map(e)},a=function(t){return t.reduce((function(t,n){return c(t,n)}),[])},f=function t(n){return n.reduce((function(n,e){return c(n,Array.isArray(e)?t(e):e)}),[])}},fd9b:function(t,n,e){"use strict";function r(t,n){var e,r;for(e=0;e<n.length;e++)(r=n[e]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}function o(t,n){var e,r=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)),r}function u(t){var n,e;for(n=1;n<arguments.length;n++)e=null!=arguments[n]?arguments[n]:{},n%2?o(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i,a,f,s,l,d,p,b,g,v,O,h,j,y,m,w,P,k,A,x,E;e.d(n,"a",(function(){return y})),i=e("ddb6"),a=e("e3ee"),f=e("5ac6"),s=e("b727"),l=e("e697"),d=e("8b4a"),p=e("450f"),b=e("2e85"),g=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.$_config={}}var n,e,o;return n=t,(e=[{key:"setConfig",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(d.k)(n)&&Object(p.f)(n).forEach((function(e){var r=n[e];"breakpoints"===e?!Object(d.a)(r)||r.length<2||r.some((function(t){return!Object(d.n)(t)||0===t.length}))?Object(b.a)('"breakpoints" must be an array of at least 2 breakpoint names',f.b):t.$_config[e]=Object(s.a)(r):Object(d.k)(r)&&(t.$_config[e]=Object(p.f)(r).reduce((function(t,n){return Object(d.o)(r[n])||(t[n]=Object(s.a)(r[n])),t}),t.$_config[e]||{}))}))}},{key:"resetConfig",value:function(){this.$_config={}}},{key:"getConfig",value:function(){return Object(s.a)(this.$_config)}},{key:"getConfigValue",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return Object(s.a)(Object(l.b)(this.$_config,t,n))}}])&&r(n.prototype,e),o&&r(n,o),t}(),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.default;n.prototype[f.c]=i.default.prototype[f.c]=n.prototype[f.c]||i.default.prototype[f.c]||new g,n.prototype[f.c].setConfig(t)},x=!1,E=["Multiple instances of Vue detected!","You may need to set up an alias for Vue in your bundler config.","See: https://bootstrap-vue.org/docs#using-module-bundlers"].join("\n"),O=function(t){x||i.default===t||a.j||Object(b.a)(E),x=!0},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.components,e=t.directives,r=t.plugins,o=function t(o){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,O(o),v(u,o),P(o,n),A(o,e),m(o,r))};return o.installed=!1,o},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.components,e=t.directives,r=t.plugins,o=function t(o){t.installed||(t.installed=!0,O(o),P(o,n),A(o,e),m(o,r))};return o.installed=!1,o},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(u({},n),{},{install:h(t)})},m=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(n in e)n&&e[n]&&t.use(e[n])},w=function(t,n,e){t&&n&&e&&t.component(n,e)},P=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(n in e)w(t,n,e[n])},k=function(t,n,e){t&&n&&e&&t.directive(n.replace(/^VB/,"B"),e)},A=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(n in e)k(t,n,e[n])}}}]);