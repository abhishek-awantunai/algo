/**

    A closure is a function bind or bundled together with its lexical environment / scope.
    When functions do return from a function then they still do remember their lexical scope.
    So when we return a function then not only the function is returned but also its lexical scope is returned.
    A function along with its lexical environment bundled together forms a closure.

*/


function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
}
x();