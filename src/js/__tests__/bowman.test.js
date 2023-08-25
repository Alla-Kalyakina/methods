import { Bowman } from '../classes/bowman';

test('classBowman', () => {
  const bowman = new Bowman('testName', 'Bowman');
  expect(bowman).toEqual({
    name: 'testName',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
