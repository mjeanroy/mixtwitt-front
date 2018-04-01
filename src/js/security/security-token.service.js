export class SecurityToken {
  constructor() {
    this._keyStorage = 'MixTwitt';
  }

  get() {
    return sessionStorage.getItem(this._keyStorage) || null;
  }

  set(token) {
    sessionStorage.setItem(this._keyStorage, token);
  }

  remove() {
    sessionStorage.removeItem(this._keyStorage);
  }

  has() {
    return !!this.get();
  }
}

SecurityToken.$inject = [
];
