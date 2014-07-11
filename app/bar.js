var Foo = require('./foo');

var Bar = (function() {
    var bar = function() {
    };
    bar.prototype.walk = function() {
        console.log("walk son!");
        var model = new Foo();
        model.talk();
    };
    return bar;
})();

module.exports = Bar;
