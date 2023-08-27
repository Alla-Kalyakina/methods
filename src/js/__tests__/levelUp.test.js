import { Magician } from '../classes/magician';

test('levelUpTest1', () => {
  const character = new Magician('testName', 'Magician');
  character.levelUp();
  expect(character).toEqual({
    name: 'testName',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('levelUpTest2', () => {
  expect(() => {
    const character = new Magician('testName', 'Magician');
    character.level = 0;
    character.levelUp();
  }).toThrow('levelUp error');
});
