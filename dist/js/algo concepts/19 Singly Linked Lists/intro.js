"use strict";function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Node=_createClass(function e(n){_classCallCheck(this,e),this.head=n,this.next=null}),node=new Node("hey");node.next=new Node("there"),node.next.next=new Node("how"),node.next.next.next=new Node("are"),node.next.next.next.next=new Node("you"),node.next.next.next.next.next=new Node("!!!"),console.log(node);