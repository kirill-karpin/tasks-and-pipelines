import Container from '../../src/container';

class MockObj {
}

class MockService {
  constructor(obj1, obj2) {
    this.obj1 = obj1;
    this.obj2 = obj2;
  }
}

test('init container', () => {
  const container = new Container();
  expect(container).toBeInstanceOf(Object);
});

test('type check', () => {
  const container = new Container();
  expect(() => {
    container.add('test', 'test');
  }).toThrow();
});

test('add objects', () => {
  const container = new Container();
  const ojb1 = new MockObj();
  const obj2 = new MockObj();

  container.addServices({
    test1: ojb1,
    test2: obj2,
  });

  const obj = container.find('test1');
  expect(obj).toBeInstanceOf(Object);
  expect(obj).toBeInstanceOf(MockObj);
});

test('add object like function', () => {
  const container = new Container();
  container.add('service', () => new MockObj());
  const srv = container.find('service');
  expect(srv).toBeInstanceOf(MockObj);
});

test('add service like function', () => {

  const container = new Container();
  const ojb1 = new MockObj();
  const obj2 = new MockObj();

  container.addServices({
    test1: ojb1,
    test2: obj2,
  });

  container.add('service', s => new MockService(s.find('test1'), s.find('test2')));
  const srv = container.find('service');
  expect(srv).toBeInstanceOf(MockService);
  expect(srv.obj1).toBeInstanceOf(MockObj);
  expect(srv.obj2).toBeInstanceOf(MockObj);
});
