"use strict";function logNumber(){console.log(1),setTimeout(function(){return console.log(2)},1e3),setTimeout(function(){return console.log(3)},0),console.log(4)}logNumber();var num=50;function logVarNumber(){console.log(void 0)}logVarNumber();