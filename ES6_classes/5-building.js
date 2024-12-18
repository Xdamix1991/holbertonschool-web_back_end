export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building
       && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  // Méthode abstraite simulée
  static evacuationWarningMessage() {
    throw new Error("Method 'evacuationWarningMessage()' must be implemented.");
  }
}
