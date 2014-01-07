/**
 * Extract Parameter
 *
 * Adds a new parameter to a function declaration. Determines the default. Can generate JSDoc.
 *
 * Ctrl+Alt+P (Windows/Linux)
 * Command+Alt+P (Mac OS X)
 */

(function(namespace) {
    namespace.person = function (name) {
        var _name = name;

        this.greet = function () {
            // 1. Extract the 'Hello' string into a parameter called "greeting".
            //    Note that we can select which parent function it should be added to.
            //    Add it to the greet() function.
            //    Generate JSDoc comments.
            //    Make it optional, the IDE will provide 'Hello' as the default value.
            return 'Hello' + ', ' + _name;
        }
    }
})(window.jetbrains = window.jetbrains || {});