/* eslint-disable no-underscore-dangle */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number' && Number.isInteger(floors)) {
      this._floors = floors;
    } else {
      throw new TypeError('Floor must be an inteeger');
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
/* eslint-enable no-underscore-dangle */
