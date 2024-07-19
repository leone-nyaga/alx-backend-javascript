import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    this._floors = floors; // Initialize the floors attribute
  }

  // Getter for sqft (inherited from Building)
  get sqft() {
    return super.sqft; // Use the getter from the parent class
  }

  // Setter for sqft (inherited from Building)
  set sqft(value) {
    super.sqft = value; // Use the setter from the parent class
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = value;
  }

  // Override the abstract method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
