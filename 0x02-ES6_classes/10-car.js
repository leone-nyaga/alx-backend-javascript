const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Setter for brand
  set brand(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = value;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Setter for motor
  set motor(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = value;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Setter for color
  set color(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = value;
  }

  // Method to clone the car
  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Public method to clone the car using the symbol
  cloneCar() {
    return this[cloneSymbol]();
  }
}
