class Vehicle {
  constructor(public model: number) {}
  protected drive(): void {
    console.log("drive from vehicle class");
  }
}
const bus = new Vehicle(400);
console.log(bus.model);
class Car extends Vehicle {
  constructor(public model: number, public color: string) {
    super(model);
  }
  display(): void {
    this.drive();
    console.log("extended disply");
  }
}
const ford = new Car(12, "white");

ford.display();
console.log(ford.model);
console.log(ford.color);
