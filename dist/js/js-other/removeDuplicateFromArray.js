"use strict";function getTotal(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return Array.from(new Set(t))}console.log(getTotal(20,10,20,10));