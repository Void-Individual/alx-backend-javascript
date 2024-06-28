import Currency from './3-currency';
/* eslint-disable no-underscore-dangle */

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number' && Number.isInteger(amount)) {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be an integer');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number' && Number.isInteger(amount)) {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be an integer');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && !(Number.isInteger(amount))) {
      throw new TypeError('Amount must be an integer');
    }
    if (typeof conversionRate !== 'number' && !(Number.isInteger(conversionRate))) {
      throw new TypeError('Conversion rate must be an integer');
    }

    return amount * conversionRate;
  }
}
/* eslint-enable no-underscore-dangle */
