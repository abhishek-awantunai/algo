"use strict";var addUptoUsingForLoop=function(o){for(var e=0,n=0;n<o;n++)e+=n;return e},addUptoUsingFormula=function(o){return o*(o+1)/2},setValue=function(o){document.getElementById("result").innerText=o},t1=performance.now(),t2=(setValue(addUptoUsingForLoop(1e3)),performance.now()),t3=(console.log(t2-t1+" seconds elapsed"),performance.now()),t4=(console.log(addUptoUsingFormula(1e3)),performance.now());console.log(t4-t3+" seconds elapsed");