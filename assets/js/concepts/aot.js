/**
An angular application consists of components and templates which a browser cannot understand. Therefore, every Angular application needs to be compiled before running inside the browser. The Angular compiler takes in the JS code, compiles it, and then produces some JS code. It is known as AOT compilation and happens only once per occasion per user.

There are two kinds of compilation that Angular provides:

JIT(Just-in-Time) compilation: the application compiles inside the browser during runtime

AOT(Ahead-of-Time) compilation: the application compiles during the build time.

Advantages of AOT compilation:

Fast Rendering: The browser loads the executable code and renders it immediately as the application is compiled before running inside the browser.
Fewer Ajax Requests: The compiler sends the external HTML and CSS files along with the application, eliminating AJAX requests for those source files.
Minimizing Errors: Easy to detect and handle errors during the building phase.
Better Security: Before an application runs inside the browser, the AOT compiler adds HTML and templates into the JS files, so there are no extra HTML files to be read, thus providing better security for the application.


*/