"use strict";function _createForOfIteratorHelper(r,t){var e,n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=_unsupportedIterableToArray(r))||t&&r&&"number"==typeof r.length)return n&&(r=n),e=0,{s:t=function(){},n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return a=r.done,r},e:function(r){i=!0,o=r},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(e="Object"===e&&r.constructor?r.constructor.name:e)||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var maxCharsUsed=function(r){var t,e={},n=0,o="",a=_createForOfIteratorHelper(r);try{for(a.s();!(t=a.n()).done;){var i=t.value;e[i]=(e[i]||0)+1,e[i]>n&&(n=e[o=i])}}catch(r){a.e(r)}finally{a.f()}return{character:o,temp:n}};console.log(maxCharsUsed("4444456tdetet34543543"));