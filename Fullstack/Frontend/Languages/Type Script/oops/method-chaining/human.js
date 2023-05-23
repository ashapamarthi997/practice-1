var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.witheyes = function () {
        console.log("wecan watch");
        return this;
    };
    Human.prototype.withnose = function () {
        console.log("wecan breath");
    };
    return Human;
}());
var lokes = new Human();
lokes.witheyes().withnose();
