"use strict";var multiply=function(u,l){return u*l},multiplyByTwo=multiply.bind(void 0,2),result=multiplyByTwo(5,2),add=(console.log(result),function(l){return function(u){return l+u}}),addTwo=add(2),sum=add(5)(2);console.log(sum);