(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdString"],{c4a5e:function(t,e,n){"use strict";n.r(e),e.default={extends:Vue.GenericInput,methods:{keypress:function(t){this.input.onlyAlpha&&!this.isAlpha(t.key)&&t.preventDefault()},formatter:function(t){var e,n=this.input,r=function(t){return t};return n.uppercase&&(r=function(t){return"".concat(t).toUpperCase()}),n.lowercase&&(r=function(t){return"".concat(t).toLowerCase()}),e=n.trim?function(t){return"".concat(r(t)).replace(/\s+/g," ")}:r,this.$attrs.formatter?this.$attrs.formatter(e(t)):e(t)}}}}}]);