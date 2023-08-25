import { Zombie } from '../classes/zombie';

test('damageTest1', () => {
  const character = new Zombie('testName', 'Zombie');
  character.damage(10);
  expect(character).toEqual({
    name: 'testName',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('damageTest2', () => {
  const character = new Zombie('testName', 'Zombie');
  character.health = -1;
  character.damage(10);
  expect(character).toEqual({
    name: 'testName',
    type: 'Zombie',
    health: -1,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
