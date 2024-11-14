export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(str) {
    if (typeof str !== 'string') {
      throw TypeError('Code must be a sring');
    } else {
      this._code = str;
    }
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw TypeError('name must be a string');
    } else {
      this._name = str;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
