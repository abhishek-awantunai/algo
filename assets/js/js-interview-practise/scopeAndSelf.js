var kkk = "sdfs";

var mycar = {
  color: "blue",
  logColor() {
    var self = this;
    console.log(this.color); // blue
    console.log(self.color); // blue

    (function () {
      console.log("IFFE : " + this); // undefined
      console.log("IFFE : " + self.color); // blue
    })();
  },
};

// console.log(this.kkk); // Error as this is undefined here
console.log(window.kkk); // "sdfs" as kkk is a global variable

mycar.logColor();
