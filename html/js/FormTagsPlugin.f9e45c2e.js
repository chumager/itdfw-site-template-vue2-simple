(window.webpackJsonp=window.webpackJsonp||[]).push([["FormTagsPlugin"],{3432:function(t,e,n){"use strict";function a(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function i(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c,s,o,u,d,l,b,f,p,g,h,O,j,v,m,y,T,w,x,_,k,I,S,P;n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return P})),c=n("ddb6"),s=n("41de"),o=n("423d"),u=n("4db9"),d=n("9ae8"),l=n("e839"),b=n("915d"),f=n("1a5d"),p=n("8b4a"),g=n("450f"),h=n("54db"),O=n("e1ba"),j=n("b8f4"),delete(v=Object(g.j)(j.b,["event","routerTag"])).href.default,delete v.to.default,m=Object(h.d)(Object(g.m)(i(i({},v),{},{block:Object(h.c)(d.g,!1),disabled:Object(h.c)(d.g,!1),pill:Object(h.c)(d.g,!1),pressed:Object(h.c)(d.g,null),size:Object(h.c)(d.u),squared:Object(h.c)(d.g,!1),tag:Object(h.c)(d.u,"button"),type:Object(h.c)(d.u,"button"),variant:Object(h.c)(d.u,"secondary")})),o.i),y=function(t){"focusin"===t.type?Object(b.b)(t.target,"focus"):"focusout"===t.type&&Object(b.A)(t.target,"focus")},T=function(t){return Object(O.d)(t)||Object(b.t)(t.tag,"a")},w=function(t){return Object(p.b)(t.pressed)},x=function(t){return!(T(t)||t.tag&&!Object(b.t)(t.tag,"button"))},_=function(t){return!T(t)&&!x(t)},k=function(t){var e;return["btn-".concat(t.variant||"secondary"),(e={},r(e,"btn-".concat(t.size),t.size),r(e,"btn-block",t.block),r(e,"rounded-pill",t.pill),r(e,"rounded-0",t.squared&&!t.pill),r(e,"disabled",t.disabled),r(e,"active",t.pressed),e)]},I=function(t){return T(t)?Object(h.e)(v,t):{}},S=function(t,e){var n=x(t),a=T(t),i=w(t),r=_(t),c=a&&"#"===t.href,s=e.attrs&&e.attrs.role?e.attrs.role:null,o=e.attrs?e.attrs.tabindex:null;return(r||c)&&(o="0"),{type:n&&!a?t.type:null,disabled:n?t.disabled:null,role:r||c?"button":s,"aria-disabled":r?String(t.disabled):null,"aria-pressed":i?String(t.pressed):null,autocomplete:i?"off":null,tabindex:t.disabled&&!n?"-1":o}},P=c.default.extend({name:o.i,functional:!0,props:m,render:function(t,e){var n,a=e.props,i=e.data,r=e.listeners,c=e.children,o=w(a),d=T(a),b=_(a),g=d&&"#"===a.href,h={keydown:function(t){var e,n;a.disabled||!b&&!g||((e=t.keyCode)===u.l||e===u.e&&b)&&(n=t.currentTarget||t.target,Object(f.f)(t,{propagation:!1}),n.click())},click:function(t){a.disabled&&Object(p.d)(t)?Object(f.f)(t):o&&r&&r["update:pressed"]&&Object(l.b)(r["update:pressed"]).forEach((function(t){Object(p.f)(t)&&t(!a.pressed)}))}};return o&&(h.focusin=y,h.focusout=y),n={staticClass:"btn",class:k(a),props:I(a),attrs:S(a,i),on:h},t(d?j.a:a.tag,Object(s.a)(i,n),c)}})},"37c0":function(t,e,n){"use strict";var a;n.d(e,"a",(function(){return a})),n("41de"),a="_uid"},"41de":function(t,e,n){"use strict";function a(t,e){return e?e.toUpperCase():""}function i(t){var e,n,i,r,c,d,l;for(n={},i=0,r=t.split(u);i<r.length;i++)d=(c=r[i].split(o))[0],l=c[1],(d=d.trim())&&("string"==typeof l&&(l=l.trim()),n[(e=d,e.replace(s,a))]=l);return n}function r(){var t,e,n,a,r,s,o,u,d,l,b;for(n={},a=arguments.length;a--;)for(r=0,s=Object.keys(arguments[a]);r<s.length;r++)switch(t=s[r]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){for(o=void 0,o=Array.isArray(arguments[a].style)?arguments[a].style:[arguments[a].style],u=0;u<o.length;u++)"string"==typeof(d=o[u])&&(o[u]=i(d));arguments[a].style=o}n[t]=n[t].concat(arguments[a][t]);break;case"staticClass":if(!arguments[a][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[a][t].trim();break;case"on":case"nativeOn":for(n[t]||(n[t]={}),l=0,b=Object.keys(arguments[a][t]||{});l<b.length;l++)e=b[l],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[a][t][e]):n[t][e]=arguments[a][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=c({},arguments[a][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[a][t])}return n}n.d(e,"a",(function(){return r}));var c=function(){return(c=Object.assign||function(t){var e,n,a,i;for(n=1,a=arguments.length;n<a;n++)for(i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=/-(\w)/g,o=/:(.*)/,u=/;(?![^(]*\))/g},"4db9":function(t,e,n){"use strict";var a,i,r,c,s,o,u,d,l,b,f,p,g;n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return g})),a=8,i=46,r=40,c=35,s=13,o=27,u=36,d=37,l=34,b=33,f=39,p=32,g=38},"512f":function(t,e,n){"use strict";var a,i,r,c,s,o;n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o})),a=n("ddb6"),i=n("37c0"),r=n("9ae8"),c=n("54db"),s={id:Object(c.c)(r.u)},o=a.default.extend({props:s,data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_,e=function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null};return e}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t[i.a])}))}})},"71cd":function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i,r,c,s,o;n.d(e,"a",(function(){return o})),i=n("ddb6"),r=n("c3ab"),c=n("9ae8"),s=n("54db"),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,o=void 0===n?c.a:n,u=e.defaultValue,d=void 0===u?void 0:u,l=e.validator,b=void 0===l?void 0:l,f=e.event,p=void 0===f?r.y:f,g=a({},t,Object(s.c)(o,d,b)),h=i.default.extend({model:{prop:t,event:p},props:g});return{mixin:h,props:g,prop:t,event:p}}},"76a2":function(t,e,n){"use strict";var a,i,r,c,s,o,u;n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u})),a=n("ddb6"),i=n("9ae8"),r=n("915d"),c=n("54db"),s="input, textarea, select",o=Object(c.d)({autofocus:Object(c.c)(i.g,!1),disabled:Object(c.c)(i.g,!1),form:Object(c.c)(i.u),id:Object(c.c)(i.u),name:Object(c.c)(i.u),required:Object(c.c)(i.g,!1)},"formControls"),u=a.default.extend({props:o,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(r.D)((function(){var e=t.$el;t.autofocus&&Object(r.u)(e)&&(Object(r.v)(e,s)||(e=Object(r.E)(s,e)),Object(r.d)(e))}))}))}}})},"78a7":function(t,e,n){"use strict";var a,i,r,c,s,o,u;n.d(e,"a",(function(){return u})),a=n("ddb6"),i=n("41de"),r=n("423d"),c=n("9ae8"),s=n("54db"),o=Object(s.d)({ariaLive:Object(s.c)(c.u),forceShow:Object(s.c)(c.g,!1),id:Object(s.c)(c.u),role:Object(s.c)(c.u),state:Object(s.c)(c.g,null),tag:Object(s.c)(c.u,"div"),tooltip:Object(s.c)(c.g,!1)},r.V),u=a.default.extend({name:r.V,functional:!0,props:o,render:function(t,e){var n=e.props,a=e.data,r=e.children,c=n.tooltip,s=n.ariaLive,o=!0===n.forceShow||!1===n.state;return t(n.tag,Object(i.a)(a,{class:{"d-block":o,"invalid-feedback":!c,"invalid-tooltip":c},attrs:{id:n.id||null,role:n.role||null,"aria-live":s||null,"aria-atomic":s?"true":null}}),r)}})},"84cc":function(t,e,n){"use strict";var a,i,r,c,s,o,u;n.d(e,"a",(function(){return u})),a=n("ddb6"),i=n("41de"),r=n("423d"),c=n("9ae8"),s=n("54db"),o=Object(s.d)({id:Object(s.c)(c.u),inline:Object(s.c)(c.g,!1),tag:Object(s.c)(c.u,"small"),textVariant:Object(s.c)(c.u,"muted")},r.hb),u=a.default.extend({name:r.hb,functional:!0,props:o,render:function(t,e){var n,a,r,c=e.props,s=e.data,o=e.children;return t(c.tag,Object(i.a)(s,{class:(n={"form-text":!c.inline},a="text-".concat(c.textVariant),r=c.textVariant,a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n),attrs:{id:c.id}}),o)}})},"9b5f":function(t,e,n){"use strict";function a(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function i(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function o(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function u(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?o(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l,b,f,p,g,h,O,j,v,m,y,T,w,x,_,k,I,S,P,C,A,D,R,E,L,V,F,$,B,z,q,J,H,K,M,U,W,Y,G,N,Q,X,Z,tt,et,nt;n.r(e),l=n("ddb6"),b=n("423d"),f=n("c3ab"),p=n("4db9"),g=n("9ae8"),h=n("26fb"),O=n("753c"),j=n("e839"),v=n("d2b3"),m=n("915d"),y=n("1a5d"),T=n("1299"),w=n("8b4a"),x=n("4709"),_=n("71cd"),k=n("450f"),I=n("54db"),S=n("71d6"),P=n("76a2"),C=n("ef6b"),A=n("d7b6"),D=n("512f"),R=n("4170"),E=n("3432"),L=n("78a7"),V=n("84cc"),F=n("aaf9"),$=n("dbaa"),B=Object(I.d)(Object(k.m)(i(i({},D.b),{},{disabled:Object(I.c)(g.g,!1),noRemove:Object(I.c)(g.g,!1),pill:Object(I.c)(g.g,!1),removeLabel:Object(I.c)(g.u,"Remove tag"),tag:Object(I.c)(g.u,"span"),title:Object(I.c)(g.u),variant:Object(I.c)(g.u,"secondary")})),b.fb),z=l.default.extend({name:b.fb,mixins:[D.a,R.a],props:B,methods:{onRemove:function(t){var e=t.type,n=t.keyCode;this.disabled||"click"!==e&&("keydown"!==e||n!==p.b)||this.$emit(f.K)}},render:function(t){var e,n=this.title,a=this.tag,i=this.variant,r=this.pill,c=this.disabled,s=this.safeId(),o=this.safeId("_taglabel_"),u=t();return this.noRemove||c||(u=t($.a,{staticClass:"b-form-tag-remove",props:{ariaLabel:this.removeLabel},attrs:{"aria-controls":s,"aria-describedby":o,"aria-keyshortcuts":"Delete"},on:{click:this.onRemove,keydown:this.onRemove}})),e=t("span",{staticClass:"b-form-tag-content flex-grow-1 text-truncate",attrs:{id:o}},this.normalizeSlot()||n),t(F.a,{staticClass:"b-form-tag d-inline-flex align-items-baseline mw-100",class:{disabled:c},props:{tag:a,variant:i,pill:r},attrs:{id:s,title:n||null,"aria-labelledby":o}},[e,u])}}),H=(J=Object(_.a)("value",{type:g.b,defaultValue:[]})).mixin,K=J.props,M=J.prop,U=J.event,W=["text","email","tel","url","number"],Y=[".b-form-tag","button","input","select"].join(" "),G=function(t){return Object(S.a)(t).replace(h.w,"\\s")},N=function(t){return Object(j.b)(t).map((function(t){return Object(S.h)(Object(S.g)(t))})).filter((function(t,e,n){return t.length>0&&n.indexOf(t)===e}))},Q=function(t){return Object(w.n)(t)?t:Object(w.d)(t)&&t.target.value||""},X=function(){return{all:[],valid:[],invalid:[],duplicate:[]}},Z=Object(I.d)(Object(k.m)(u(u(u(u(u(u({},D.b),K),P.b),C.b),A.b),{},{addButtonText:Object(I.c)(g.u,"Add"),addButtonVariant:Object(I.c)(g.u,"outline-secondary"),addOnChange:Object(I.c)(g.g,!1),duplicateTagText:Object(I.c)(g.u,"Duplicate tag(s)"),ignoreInputFocusSelector:Object(I.c)(g.f,Y),inputAttrs:Object(I.c)(g.q,{}),inputClass:Object(I.c)(g.e),inputId:Object(I.c)(g.u),inputType:Object(I.c)(g.u,"text",(function(t){return Object(j.a)(W,t)})),invalidTagText:Object(I.c)(g.u,"Invalid tag(s)"),limit:Object(I.c)(g.n),limitTagsText:Object(I.c)(g.u,"Tag limit reached"),noAddOnEnter:Object(I.c)(g.g,!1),noOuterFocus:Object(I.c)(g.g,!1),noTagRemove:Object(I.c)(g.g,!1),placeholder:Object(I.c)(g.u,"Add tag..."),removeOnDelete:Object(I.c)(g.g,!1),separator:Object(I.c)(g.f),tagClass:Object(I.c)(g.e),tagPills:Object(I.c)(g.g,!1),tagRemoveLabel:Object(I.c)(g.u,"Remove tag"),tagRemovedLabel:Object(I.c)(g.u,"Tag removed"),tagValidator:Object(I.c)(g.l),tagVariant:Object(I.c)(g.u,"secondary")})),b.gb),tt=l.default.extend({name:b.gb,mixins:[D.a,H,P.a,C.a,A.a,R.a],props:Z,data:function(){return{hasFocus:!1,newTag:"",tags:[],removedTags:[],tagsState:X()}},computed:{computedInputId:function(){return this.inputId||this.safeId("__input__")},computedInputType:function(){return Object(j.a)(W,this.inputType)?this.inputType:"text"},computedInputAttrs:function(){var t=this.disabled,e=this.form;return u(u({},this.inputAttrs),{},{id:this.computedInputId,value:this.newTag,disabled:t,form:e})},computedInputHandlers:function(){return{input:this.onInputInput,change:this.onInputChange,keydown:this.onInputKeydown,reset:this.reset}},computedSeparator:function(){return Object(j.b)(this.separator).filter(w.n).filter(T.a).join("")},computedSeparatorRegExp:function(){var t=this.computedSeparator;return t?new RegExp("[".concat(G(t),"]+")):null},computedJoiner:function(){var t=this.computedSeparator.charAt(0);return" "!==t?"".concat(t," "):t},computeIgnoreInputFocusSelector:function(){return Object(j.b)(this.ignoreInputFocusSelector).filter(T.a).join(",").trim()},disableAddButton:function(){var t=this,e=Object(S.h)(this.newTag);return""===e||!this.splitTags(e).some((function(e){return!Object(j.a)(t.tags,e)&&t.validateTag(e)}))},duplicateTags:function(){return this.tagsState.duplicate},hasDuplicateTags:function(){return this.duplicateTags.length>0},invalidTags:function(){return this.tagsState.invalid},hasInvalidTags:function(){return this.invalidTags.length>0},isLimitReached:function(){var t=this.limit;return Object(w.h)(t)&&t>=0&&this.tags.length>=t}},watch:(q={},d(q,M,(function(t){this.tags=N(t)})),d(q,"tags",(function(t,e){Object(x.a)(t,this[M])||this.$emit(U,t),Object(x.a)(t,e)||(t=Object(j.b)(t).filter(T.a),e=Object(j.b)(e).filter(T.a),this.removedTags=e.filter((function(e){return!Object(j.a)(t,e)})))})),d(q,"tagsState",(function(t,e){Object(x.a)(t,e)||this.$emit(f.Y,t.valid,t.invalid,t.duplicate)})),q),created:function(){this.tags=N(this[M])},mounted:function(){var t=this,e=Object(m.e)("form",this.$el);e&&(Object(y.b)(e,"reset",this.reset,f.db),this.$on(f.eb,(function(){Object(y.a)(e,"reset",t.reset,f.db)})))},methods:{addTag:function(t){var e,n;t=Object(w.n)(t)?t:this.newTag,this.disabled||""===Object(S.h)(t)||this.isLimitReached||(((e=this.parseTags(t)).valid.length>0||0===e.all.length)&&(Object(m.v)(this.getInput(),"select")?this.newTag="":(n=[].concat(c(e.invalid),c(e.duplicate)),this.newTag=e.all.filter((function(t){return Object(j.a)(n,t)})).join(this.computedJoiner).concat(n.length>0?this.computedJoiner.charAt(0):""))),e.valid.length>0&&(this.tags=Object(j.b)(this.tags,e.valid)),this.tagsState=e,this.focus())},removeTag:function(t){var e=this;this.disabled||(this.tags=this.tags.filter((function(e){return e!==t})),this.$nextTick((function(){e.focus()})))},reset:function(){var t=this;this.newTag="",this.tags=[],this.$nextTick((function(){t.removedTags=[],t.tagsState=X()}))},onInputInput:function(t){var e,n;this.disabled||Object(w.d)(t)&&t.target.composing||(e=Q(t),n=this.computedSeparatorRegExp,this.newTag!==e&&(this.newTag=e),e=Object(S.i)(e),n&&n.test(e.slice(-1))?this.addTag():this.tagsState=""===e?X():this.parseTags(e))},onInputChange:function(t){if(!this.disabled&&this.addOnChange){var e=Q(t);this.newTag!==e&&(this.newTag=e),this.addTag()}},onInputKeydown:function(t){var e,n;!this.disabled&&Object(w.d)(t)&&(e=t.keyCode,n=t.target.value||"",this.noAddOnEnter||e!==p.e?!this.removeOnDelete||e!==p.a&&e!==p.b||""!==n||(Object(y.f)(t,{propagation:!1}),this.tags=this.tags.slice(0,-1)):(Object(y.f)(t,{propagation:!1}),this.addTag()))},onClick:function(t){var e=this,n=this.computeIgnoreInputFocusSelector,a=t.target;this.disabled||Object(m.q)(a)||n&&Object(m.e)(n,a,!0)||this.$nextTick((function(){e.focus()}))},onFocusin:function(){this.hasFocus=!0},onFocusout:function(){this.hasFocus=!1},handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(m.D)((function(){t.autofocus&&!t.disabled&&t.focus()}))}))},focus:function(){this.disabled||Object(m.d)(this.getInput())},blur:function(){this.disabled||Object(m.c)(this.getInput())},splitTags:function(t){t=Object(S.g)(t);var e=this.computedSeparatorRegExp;return(e?t.split(e):[t]).map(S.h).filter(T.a)},parseTags:function(t){var e=this,n=this.splitTags(t),a={all:n,valid:[],invalid:[],duplicate:[]};return n.forEach((function(t){Object(j.a)(e.tags,t)||Object(j.a)(a.valid,t)?Object(j.a)(a.duplicate,t)||a.duplicate.push(t):e.validateTag(t)?a.valid.push(t):Object(j.a)(a.invalid,t)||a.invalid.push(t)})),a},validateTag:function(t){var e=this.tagValidator;return!Object(I.b)(e)||e(t)},getInput:function(){return Object(m.E)("#".concat(Object(v.a)(this.computedInputId)),this.$el)},defaultRender:function(t){var e,n,a,i,r=t.addButtonText,c=t.addButtonVariant,s=t.addTag,o=t.disableAddButton,d=t.disabled,l=t.duplicateTagText,b=t.inputAttrs,f=t.inputClass,p=t.inputHandlers,g=t.inputType,h=t.invalidTagText,j=t.isDuplicate,v=t.isInvalid,m=t.isLimitReached,y=t.limitTagsText,w=t.noTagRemove,x=t.placeholder,_=t.removeTag,k=t.tagClass,I=t.tagPills,P=t.tagRemoveLabel,C=t.tagVariant,A=t.tags,D=this.$createElement,R=A.map((function(t){return t=Object(S.g)(t),D(z,{class:k,props:{disabled:d,noRemove:w,pill:I,removeLabel:P,tag:"li",title:t,variant:C},on:{remove:function(){return _(t)}},key:"tags_".concat(t)},t)})),F=h&&v?this.safeId("__invalid_feedback__"):null,$=l&&j?this.safeId("__duplicate_feedback__"):null,B=y&&m?this.safeId("__limit_feedback__"):null,q=[b["aria-describedby"],F,$,B].filter(T.a).join(" "),J=D("input",{staticClass:"b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",class:f,style:{outline:0,minWidth:"5rem"},attrs:u(u({},b),{},{"aria-describedby":q||null,type:g,placeholder:x||null}),domProps:{value:b.value},on:p,directives:[{name:"model",value:b.value}],ref:"input"}),H=D(E.a,{staticClass:"b-form-tags-button py-0",class:{invisible:o},style:{fontSize:"90%"},props:{disabled:o||m,variant:c},on:{click:function(){return s()}},ref:"button"},[this.normalizeSlot(O.a)||r]),K=this.safeId("__tag_list__"),M=D("li",{staticClass:"b-from-tags-field flex-grow-1",attrs:{role:"none","aria-live":"off","aria-controls":K},key:"tags_field"},[D("div",{staticClass:"d-flex",attrs:{role:"group"}},[J,H])]),U=D("ul",{staticClass:"b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",attrs:{id:K},key:"tags_list"},[R,M]),W=D();return(h||l||y)&&(e=this.computedJoiner,n=D(),F&&(n=D(L.a,{props:{id:F,forceShow:!0},key:"tags_invalid_feedback"},[this.invalidTagText,": ",this.invalidTags.join(e)])),a=D(),$&&(a=D(V.a,{props:{id:$},key:"tags_duplicate_feedback"},[this.duplicateTagText,": ",this.duplicateTags.join(e)])),i=D(),B&&(i=D(V.a,{props:{id:B},key:"tags_limit_feedback"},[y])),W=D("div",{attrs:{"aria-live":"polite","aria-atomic":"true"},key:"tags_feedback"},[n,a,i])),[U,W]}},render:function(t){var e,n=this.name,a=this.disabled,i=this.required,r=this.form,c=this.tags,s=this.computedInputId,o=this.hasFocus,d=this.noOuterFocus,l=u({tags:c.slice(),inputAttrs:this.computedInputAttrs,inputType:this.computedInputType,inputHandlers:this.computedInputHandlers,removeTag:this.removeTag,addTag:this.addTag,reset:this.reset,inputId:s,isInvalid:this.hasInvalidTags,invalidTags:this.invalidTags.slice(),isDuplicate:this.hasDuplicateTags,duplicateTags:this.duplicateTags.slice(),isLimitReached:this.isLimitReached,disableAddButton:this.disableAddButton},Object(k.k)(this.$props,["addButtonText","addButtonVariant","disabled","duplicateTagText","form","inputClass","invalidTagText","limit","limitTagsText","noTagRemove","placeholder","required","separator","size","state","tagClass","tagPills","tagRemoveLabel","tagVariant"])),b=this.normalizeSlot(O.i,l)||this.defaultRender(l),f=t("output",{staticClass:"sr-only",attrs:{id:this.safeId("__selected_tags__"),role:"status",for:s,"aria-live":o?"polite":"off","aria-atomic":"true","aria-relevant":"additions text"}},this.tags.join(", ")),p=t("div",{staticClass:"sr-only",attrs:{id:this.safeId("__removed_tags__"),role:"status","aria-live":o?"assertive":"off","aria-atomic":"true"}},this.removedTags.length>0?"(".concat(this.tagRemovedLabel,") ").concat(this.removedTags.join(", ")):""),g=t();return n&&!a&&(g=((e=c.length>0)?c:[""]).map((function(a){return t("input",{class:{"sr-only":!e},attrs:{type:e?"hidden":"text",value:a,required:i,name:n,form:r},key:"tag_input_".concat(a)})}))),t("div",{staticClass:"b-form-tags form-control h-auto",class:[{focus:o&&!d&&!a,disabled:a},this.sizeFormClass,this.stateClass],attrs:{id:this.safeId(),role:"group",tabindex:a||d?null:"-1","aria-describedby":this.safeId("__selected_tags__")},on:{click:this.onClick,focusin:this.onFocusin,focusout:this.onFocusout}},[f,p,b,g])}}),et=n("fd9b"),nt=Object(et.a)({components:{BFormTags:tt,BTags:tt,BFormTag:z,BTag:z}}),Vue.use(nt)},aaf9:function(t,e,n){"use strict";function a(t,e){var n,a=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)),a}function i(t){var e,n;for(e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c,s,o,u,d,l,b,f,p,g,h;n.d(e,"a",(function(){return h})),c=n("ddb6"),s=n("41de"),o=n("423d"),u=n("9ae8"),d=n("450f"),l=n("54db"),b=n("e1ba"),f=n("b8f4"),delete(p=Object(d.j)(f.b,["event","routerTag"])).href.default,delete p.to.default,g=Object(l.d)(Object(d.m)(i(i({},p),{},{pill:Object(l.c)(u.g,!1),tag:Object(l.c)(u.u,"span"),variant:Object(l.c)(u.u,"secondary")})),o.e),h=c.default.extend({name:o.e,functional:!0,props:g,render:function(t,e){var n=e.props,a=e.data,i=e.children,r=n.active,c=n.disabled,o=Object(b.d)(n),u=o?f.a:n.tag,d=n.variant||"secondary";return t(u,Object(s.a)(a,{staticClass:"badge",class:["badge-".concat(d),{"badge-pill":n.pill,active:r,disabled:c}],props:o?Object(l.e)(p,n):{}}),i)}})},d2b3:function(t,e,n){"use strict";var a,i,r;n.d(e,"a",(function(){return r})),a=n("71d6"),i=function(t){return"\\"+t},r=function(t){var e,n;return t=Object(a.g)(t),e=t.length,n=t.charCodeAt(0),t.split("").reduce((function(a,r,c){var s=t.charCodeAt(c);return 0===s?a+"�":127===s||s>=1&&s<=31||0===c&&s>=48&&s<=57||1===c&&s>=48&&s<=57&&45===n?a+i("".concat(s.toString(16)," ")):0===c&&45===s&&1===e?a+i(r):s>=128||45===s||95===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?a+r:a+i(r)}),"")}},d7b6:function(t,e,n){"use strict";var a,i,r,c,s,o;n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o})),a=n("ddb6"),i=n("9ae8"),r=n("8b4a"),c=n("54db"),s=Object(c.d)({state:Object(c.c)(i.g,null)},"formState"),o=a.default.extend({props:s,computed:{computedState:function(){return Object(r.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},dbaa:function(t,e,n){"use strict";var a,i,r,c,s,o,u,d,l,b,f;n.d(e,"a",(function(){return f})),a=n("ddb6"),i=n("41de"),r=n("423d"),c=n("9ae8"),s=n("753c"),o=n("1a5d"),u=n("8b4a"),d=n("54db"),l=n("72df"),b=Object(d.d)({ariaLabel:Object(d.c)(c.u,"Close"),content:Object(d.c)(c.u,"&times;"),disabled:Object(d.c)(c.g,!1),textVariant:Object(d.c)(c.u)},r.j),f=a.default.extend({name:r.j,functional:!0,props:b,render:function(t,e){var n,a,r,c=e.props,d=e.data,b=e.slots,f=e.scopedSlots,p=b(),g=f||{},h={staticClass:"close",class:(n={},a="text-".concat(c.textVariant),r=c.textVariant,a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n),attrs:{type:"button",disabled:c.disabled,"aria-label":c.ariaLabel?String(c.ariaLabel):null},on:{click:function(t){c.disabled&&Object(u.d)(t)&&Object(o.f)(t)}}};return Object(l.a)(s.i,g,p)||(h.domProps={innerHTML:c.content}),t("button",Object(i.a)(d,h),Object(l.b)(s.i,{},g,p))}})},ef6b:function(t,e,n){"use strict";var a,i,r,c,s;n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s})),a=n("ddb6"),i=n("9ae8"),r=n("54db"),c=Object(r.d)({size:Object(r.c)(i.u)},"formControls"),s=a.default.extend({props:c,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})}}]);