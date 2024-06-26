/*interface Cartype {
    brand:string;
    model:string;
    year:number;
}
class Car implements Cartype {
brand = "Toyota"
model = "corolla"
year = 2024
}
let myCar = new Car()
console.log(myCar);*/
/*const myCar = {
    brand: "Toyota",
    model: "corolla",
    year: 2024
}
    function displaydetails(){
        return `brand ${myCar.brand}model ${myCar.model}year ${myCar.year}`
    }

console.log(displaydetails());*/
var Car = /** @class */ (function () {
    function Car() {
        this.brand = "Toyota";
        this.model = "corolla";
        this.year = 2024;
    }
    Car.prototype.displaydetails = function () {
        return "brand ".concat(this.brand, "   model ").concat(this.model, "  year  ").concat(this.year);
    };
    return Car;
}());
var myCar = new Car();
console.log(myCar.displaydetails());
