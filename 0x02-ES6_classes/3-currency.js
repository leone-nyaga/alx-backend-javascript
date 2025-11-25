export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be string');
    }
    this._name = value;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
