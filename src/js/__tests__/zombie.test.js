import { Zombie } from '../classes/zombie';

test('classZombie', () => {
  const zombie = new Zombie('testName', 'Zombie');
  expect(zombie).toEqual({
    name: 'testName',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
