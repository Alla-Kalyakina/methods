/* eslint-disable no-unused-vars */
import Character from '../classes/character';
import { Bowman } from '../classes/bowman';
import { Daemon } from '../classes/daemon';
import { Magician } from '../classes/magician';
import { Swordsman } from '../classes/swordsman';
import { Undead } from '../classes/undead';
import { Zombie } from '../classes/zombie';

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
