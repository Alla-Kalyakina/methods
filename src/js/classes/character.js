/* eslint-disable no-undef */
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name error');
    }
    if (!(Bowman, Swordsman, Magician, Daemon, Undead, Zombie).includes(type)) {
      throw new Error('Type error');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
