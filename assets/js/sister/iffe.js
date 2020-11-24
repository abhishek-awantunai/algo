/**
  if any varibale is declared without var then it is a GLOBAL variable and it will overwrite
  any variable of same name if it exist.

  In strict mode you can't create a GLOBAL variable
 */

(function doublNumber(num) {
  a = 10;
  return num * 2;
})(4);

a = 20; // this will throw refrence error as it's restricted because we can't create a GLOBAL varibale
//  in STRICT mode and any variable declared without var is a Global Variable
console.log(a);
var a = 10;
console.log(a);
