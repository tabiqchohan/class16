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
// class Car  {
//     brand = "Toyota"
//     model = "corolla"
//     year = 2024
//     displaydetails(){
//         return `brand ${this.brand}   model ${this.model}  year  ${this.year}`
//     }
//     }
//     let myCar = new Car()
//     console.log(myCar.displaydetails());
class Car  {
     public  brand = "Toyota"
    private    model = "corolla"
     protected    year = 2024
         displaydetails(){
             return `brand ${this.brand}   model ${this.model}  year  ${this.year}`
         }
         }
         let myCar = new Car()
         console.log(myCar.displaydetails());