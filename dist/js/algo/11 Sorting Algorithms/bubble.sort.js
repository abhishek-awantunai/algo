"use strict";var bubbleSortTheArray=function(r){for(var e=0;e<r.length;e++){for(var a,o=!0,t=0;t<r.length-(e+1);t++)r[t]>r[t+1]&&(a=r[t],r[t]=r[t+1],r[t+1]=a,o=!1);if(o)break}return r},arr1=[13,12,1,2,3,4,5,6,7,8,9,10,11];console.log(bubbleSortTheArray(arr1));