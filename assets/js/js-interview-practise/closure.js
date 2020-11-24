const globalVariable = "sdfsdfd";

function outerFunction(param1) {
  const variable1 = "var one";

  function innerFunction(param2) {
    const variable2 = "var two";
    console.log("global variable ", globalVariable);
    console.log("variable1 ", variable1);
    console.log("variable2 ", variable2);
    console.log("param1 ", param1);
    console.log("param2 ", param2);
  }

  innerFunction("param one");

  console.dir(innerFunction);
}

outerFunction("param two");
