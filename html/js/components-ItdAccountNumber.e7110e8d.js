(window.webpackJsonp=window.webpackJsonp||[]).push([["components-ItdAccountNumber"],{c767:function(e,n,t){"use strict";t.r(n),n.default={name:"AccountNumber",extends:Vue.GenericInput,methods:{keypress:function(e){!this.isNumber(e.key)&&e.preventDefault()},emitter:function(e){return""===e?null:e.replace(/[^\d]/g,"")},initVal:function(e){return isNaN(parseFloat(e))?null:e}}}}}]);