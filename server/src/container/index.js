export default class Container {
  constructor() {
    this.services = {};
  }

  service(name, cb) {
    Object.defineProperty(this, name, {
      get: () => {
        if (!Object.prototype.hasOwnProperty.call(this.services, name)) {
          this.services[name] = cb(this);
        }

        return this.services[name];
      },
      configurable: true,
      enumerable: true,
    });

    return this;
  }
}
