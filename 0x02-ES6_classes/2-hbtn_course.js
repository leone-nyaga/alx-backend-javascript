export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this.students = students;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError("value must be a string");
    }
    this._name = value;
  }
  get length() {
    return this._length;
  }
  set length (value) {
    if (typeof value !== 'number') {
      throw new TypeError("value must be a number");
    }
    this._length = value;
  }
  get students() {
    return this._students;
  }
  set students(value) {
    if (!Array.isArray(value) || (!value.every(student => typeof student === 'string'))) {
	    throw new TypeError("students must be an array of strings");
    }
    this._students = value;
  }
}

