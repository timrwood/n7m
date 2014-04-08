// n7m.js
// version : 0.0.1
// author : Tim Wood
// license : MIT

(function (undefined) {

    var chunker = /[a-z]+/gi;

    function replace(string) {
        var len = string.length;
        if (len < 4) {
            return string;
        } else {
            return string[0] + (len - 2) + string[len - 1];
        }
    }

    function n7m(string) {
        return string.replace(chunker, replace);
    }

    // CommonJS module is defined
    if (typeof module !== 'undefined') {
        module.exports = n7m;
    }
    if (typeof window !== 'undefined') {
        window.n7m = n7m;
    }
    /*global define:false */
    if (typeof define === "function" && define.amd) {
        define("n7m", [], function () {
            return n7m;
        });
    }
})(Date);
