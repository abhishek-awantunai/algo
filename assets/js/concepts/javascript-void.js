/*
The javascript: void (0) evaluates an expression even if its addition to a web page brings unwanted output.

Use the void (0) to get the undefined primitive value.Here, we are preventing the page from loading on clicking the hyperlink:

<html>
  <head>
    <script>
      <!--
         //-->
      </script>
  </head>
  <body>
    <p>On clicking the below link, nothing will happen...</p>
    <a href="javascript:void(0)">Try to click me!</a>
  </body>
</html>

The output is displayed below.Nothing happens when the link is clicked:

*/