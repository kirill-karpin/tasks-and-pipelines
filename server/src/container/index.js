export default class Container {
  constructor() {
    this.services = new Map();
  }

  add(name, service) {
    if ((typeof service !== 'function') && (typeof service !== 'object')) {
      throw new Error(`Incorrect service type ${service} : ${typeof service}`);
    }

    this.services.set(name, service);
    return this;
  }

  find(name) {
    let service = this.services.get(name);

    if (typeof service === 'function') {
      service = service(this);
    }

    return service;
  }

  addServices(services) {
    const entries = Object.entries(services);
    entries.forEach((item) => {
      this.add(item[0], item[1]);
    });
  }
}
