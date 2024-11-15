export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toSting() {
    return '[${type of} ${this._code}]';
  }
}
