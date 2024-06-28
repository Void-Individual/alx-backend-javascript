export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number' && Number.isInteger(length)) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    this._students = [];
    if (Array.isArray(students)) {
      for (const str of students) {
        if (typeof str === 'string') {
          this._students.push(str);
        } else {
          throw new TypeError('Name must be a string');
        }
      }
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number' && Number.isInteger(length)) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = [];
    if (Array.isArray(students)) {
      for (const str of students) {
        if (typeof str === 'string') {
          this._students.push(str);
        } else {
          throw new TypeError('Name must be a string');
        }
      }
    } else {
      throw new TypeError('Students must be an array');
    }
  }
  /* eslint-enable no-underscore-dangle */
}
