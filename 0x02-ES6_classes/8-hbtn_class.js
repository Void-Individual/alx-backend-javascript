/* eslint-disable no-underscore-dangle */

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number' && Number.isInteger(size)) {
      this._size = size;
    } else {
      throw new TypeError('Size must be an integer');
    }

    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  toString() {
    return this._location;
  }

  Valueof() {
    return this._size;
  }
}

/* eslint-enable no-underscore-dangle */
