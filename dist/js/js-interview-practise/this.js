"use strict";var _this=void 0;function outer(){console.log(this),function(){console.log(this),function(){console.log(this)}.apply({a:"sdss"})}.call("new scope")}var a=outer.bind("dsds");function functionDeclaration(){console.log(this)}a(),functionDeclaration();var functionExpression=function(){console.log(this)},obj=(functionExpression(),console.log(void 0),function(){console.log(this)}(),{methodOne:function(){console.log(this)},methodTwo:function(){console.log(this)},methodThree:function(){console.log(_this)},addSum:function(o){return this.a+o}});function apple(){console.log(this)}obj.methodOne(),obj.methodTwo(),obj.methodThree(),console.log(obj.addSum.call({a:10},5)),console.log(obj.addSum.apply({a:10},[5])),console.log(void 0),apple();var objM={a:"ds",sample:function(){console.log(this)}};objM.sample();