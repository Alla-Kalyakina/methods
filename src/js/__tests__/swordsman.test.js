import { Swordsman } from '../classes/swordsman';

test('classSwordsman', () => {
  const swordsman = new Swordsman('testName', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'testName',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
