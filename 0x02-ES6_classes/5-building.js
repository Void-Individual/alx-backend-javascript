/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number' && Number.isInteger(sqft)) {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be an integer');
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

  // Abstract method
  evacuationWarningMessage() {
    throw new Error(`Class extending ${this.constructor.name} must override evacuationWarningMessage`);
  }

  // Ensure subclass implements specific methods
  ensureEvacuation() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error(`Class extending ${this.constructor.name} must override evacuationWarningMessage`);
    }
  }
}
/* eslint-enable no-underscore-dangle */
