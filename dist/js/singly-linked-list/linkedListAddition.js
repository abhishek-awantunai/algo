"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ListNode=_createClass(function e(t){_classCallCheck(this,e),this.value=void 0,this.next=void 0,this.value=t,this.next=null}),list1=new ListNode(1);list1.next=new ListNode(5),list1.next.next=new ListNode(6);var list2=new ListNode(4);list2.next=new ListNode(2),list2.next.next=new ListNode(5);var addTwoNumbers=function(e,t){for(var n=0,i=new ListNode(0),l=i;null!=e||null!=t;){var s=0,o=0;null!=e&&(s=e.value,e=e.next),null!=t&&(o=t.value,t=t.next);o=s+o+n,n=Math.floor(o/10);o%=10,l.next=new ListNode(o),l=l.next}return 0<n&&(l.next=new ListNode(n)),i.next};console.log(addTwoNumbers(list1,list2));