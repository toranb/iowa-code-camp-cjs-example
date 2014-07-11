var Foo = (function() {
    var foo = function() {
    };
    foo.prototype.talk = function() {
        console.log("talking...");
    };
    return foo;
})();

module.exports = Foo;
