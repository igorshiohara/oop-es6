class Vehicle {

  constructor(license, model) {
    this._license = license;
    this._model = model;
  }

  start() {
    console.log('Starting vehicle.');
  }

}

class Drone extends Vehicle {

  constructor(license, model, flies) {
    super(license, model);
    this._flies = flies;
  }

  fly() {
    console.log(`Drone {id} is flying`, this.id );
  }

  static getDefaultMessage() {
    return console.log('This is a static method.');
  }

  get flies() {
    return this._flies;
  }

  set flies(flies) {
    this._flies = flies;
  }

}
Drone.type = 'Fly'; //static property

class Car extends Vehicle {

  constructor(license, model, kilometers) {
    super(license, model);
    this._kilometers = kilometers;
  }

  start() {
    super.start();
    console.log('Overriding start method.');
  }

}

let c = new Car('a', 'b', 'c');
c.start();
