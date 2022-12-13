let garage = [];
document.body.append(garage);
class car {
    constructor(year, color, make, model, mileage){
    this.year = year;
    this.color = color;
    this.make = make;
    this.model = model;
    this.mileage = mileage;
}
information(){
    console.log(`
    Year: ${this.year}
    Color: ${this.color}
    Make: ${this.make}
    Model: ${this.model}
    Mileage: ${this.mileage}`);
  }
}

const Sienna = new car("2005", "Bumblebee", "Chevy", "Camaro", "13245");
const Rosaria = new car("2011", "Rose", "Ford", "Raptor", "76543");
const Ulta = new car("2020", "White", "Maserati", "Granturismo", "92734");
const Locario = new car("2016", "Blue", "Hyundai", "Sonata", "134532");

Sienna.information();
Rosaria.information();
Ulta.information();
Locario.information();

