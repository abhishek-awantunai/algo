/**
  When an event happens on an element, it first runs on which it was clicked, then on its parent, then all the way up on other ancestors. It is the default behavior of the browser.

  When an event happens on an element, it first runs on which it was clicked, then on its parent, then all the way up on other ancestors. It is the default behavior of the browser.

  Opposite of event bubbling is event capture.

  el.addEventListener("click", function () {
    console.log("i run in capture");
  }, true);

  */

