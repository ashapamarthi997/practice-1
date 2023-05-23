var Breakfast = /** @class */ (function () {
    function Breakfast() {
        this.water = "this is drinking water";
        this.dosa = "we ate it";
        this.idly = "made up of rice ";
        this.chatni = "its made up of peenut";
    }
    Breakfast.prototype.withWater = function () {
        console.log("we need water");
    };
    return Breakfast;
}());
var lokesh = new Breakfast();
console.log(lokesh);
