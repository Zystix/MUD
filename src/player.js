'use strict';

class player {
  constructor(name, vocation, inventory, health, mana, stamina, gold) {
    this.name = name;
    this.class = vocation;
    this.inventory = inventory;
    this.health = health;
    this.mana = mana;
    this.stamina = stamina;
    this.gold = gold
  }
}
module.exports = player;
