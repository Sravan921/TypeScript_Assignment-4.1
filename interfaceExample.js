var Car = (function () {
    function Car() {
        this.hasStarted = false;
        this.distance = 0;
    }
    Car.prototype.start = function () {
        this.hasStarted = true;
    };
    Car.prototype.drive = function (distanceToDrive) {
        if (this.hasStarted) {
            this.distance += distanceToDrive;
            return true;
        }
        return false;
    };
    Car.prototype.getPosition = function () {
        return this.distance;
    };
    return Car;
}());
var Helicopter = (function () {
    function Helicopter() {
        this.distance = 0;
    }
    Helicopter.prototype.fly = function (distanceToDrive) {
        this.distance += distanceToDrive;
        return true;
    };
    return Helicopter;
}());
var FlyingCar = (function () {
    function FlyingCar() {
        this.hasStarted = false;
        this.distance = 0;
    }
    FlyingCar.prototype.start = function () {
        this.hasStarted = true;
    };
    FlyingCar.prototype.drive = function (distanceToDrive) {
        if (this.hasStarted) {
            this.distance += distanceToDrive;
            return true;
        }
        return false;
    };
    FlyingCar.prototype.getPosition = function () {
        return this.distance;
    };
    FlyingCar.prototype.fly = function (distanceToDrive) {
        this.distance += distanceToDrive;
        return true;
    };
    return FlyingCar;
}());
