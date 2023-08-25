/* eslint-disable no-unused-vars */
import Character from '../classes/character';

test('classCharacter', () => {
  const character = new Character('testName', 'Bowman');
  expect(character).toEqual({
    name: 'testName',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});

test('nameError', () => {
  expect(() => {
    const character = new Character('A', 'Bowman');
  }).toThrow('Name error');
});

test('typeError', () => {
  expect(() => {
    const character = new Character('testName', 'testType');
  }).toThrow('Type error');
});
