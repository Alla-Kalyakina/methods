import { Undead } from '../classes/undead';

test('classUndead', () => {
  const undead = new Undead('testName', 'Undead');
  expect(undead).toEqual({
    name: 'testName',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
