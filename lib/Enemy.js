const Potion = require('./Potion.js');
const Character = require('./Character.js')

// creates an enemy object
class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        // assign weapon parameter a value of weapon
        this.weapon = weapon;
        // generate new potion
        this.potion = new Potion();
    }

    // gets a description of the enemy
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};

module.exports = Enemy;