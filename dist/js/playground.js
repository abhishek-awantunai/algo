"use strict";var arr=[1,2,34,534,235,345,43,3],sortArray=function(r){for(var o=0;o<r.length;o++)for(var a,t=1;t<o;t++)r[o]<r[t]&&(a=r[o],r[o]=r[t],r[t]=a);return r};console.log(sortArray(arr));