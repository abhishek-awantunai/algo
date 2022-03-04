/**

  What is the process called by which TypeScript code is converted into JavaScript code?

  Answer: It is called Transpiling. Even though TypeScript is used for writing code in Angular applications, it gets internally transpiled into equivalent JavaScript.

  What is ViewEncapsulation and how many ways are there do to do it in Angular?

  ViewEncapsulation determines whether the styles defined in a particular component will affect the entire application or not. Angular supports 3 types of ViewEncapsulation:

  Emulated – Styles used in other HTML spread to the component ( default )
  Native – Styles used in other HTML doesn’t spread to the component ( in this it uses shadow DOM )
  None – Styles defined in a component are visible to all components of the application

*/