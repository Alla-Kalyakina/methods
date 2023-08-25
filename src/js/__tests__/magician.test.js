import { Magician } from '../classes/magician';

test('classMagician', () => {
  const magician = new Magician('testName', 'Magician');
  expect(magician).toEqual({
    name: 'testName',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
