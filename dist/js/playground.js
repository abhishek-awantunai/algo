"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Node=_createClass(function e(t){_classCallCheck(this,e),this.val=t,this.next=null}),List=function(){function e(){_classCallCheck(this,e),this.head=null,this.length=0}return _createClass(e,[{key:"push",value:function(e){for(var e=new Node(e),t=(this.length||(this.head=e),this.head);t.next;)t=t.next;return t.next=e,this.length++,this.head}}]),e}(),list=new List;list.push(10),console.log(list);