import orderByProps from '../basic';

test('should sort by properties 1', () => {
  const input = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'level', 'health', 'defence', 'attack'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];

  const received = orderByProps(input, order);

  expect(received).toEqual(expected);
});

test('should sort by properties 2', () => {
  const input = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'defence', 'attack'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];

  const received = orderByProps(input, order);

  expect(received).toEqual(expected);
});

test('should sort by properties 3', () => {
  const input = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = [];

  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const received = orderByProps(input, order);

  expect(received).toEqual(expected);
});

test('should sort by properties 4', () => {
  const input = {};
  const order = ['name', 'level'];

  const expected = [];

  const received = orderByProps(input, order);

  expect(received).toEqual(expected);
});
