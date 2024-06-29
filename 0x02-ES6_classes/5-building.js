/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number' && Number.isInteger(sqft)) {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be an integer');
    }
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number' && Number.isInteger(sqft)) {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be an integer');
    }
  }
}
/* eslint-enable no-underscore-dangle */
