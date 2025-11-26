import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Value must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Value must be an instance of Currency');
    }
    this._value = value;
  }

  displayFullPrice() {
    `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') || (typeof conversionRate !== 'number')) {
      throw new TypeError('conversionRate and amount must be a number');
    }
    return amount * conversionRate;
  }
}
