"use strict";var trackMyCall=function(){var o=0;return function(){return++o}}(),globalVariable=(console.log(trackMyCall()),console.log(trackMyCall()),console.log(trackMyCall()),console.log(trackMyCall()),console.dir(trackMyCall),"sdfsdfd");function outerFunction(l){function o(o){console.log("global variable ",globalVariable),console.log("variable1 ","var one"),console.log("variable2 ","var two"),console.log("param1 ",l),console.log("param2 ",o)}o("param one"),console.dir(o)}outerFunction("param two");