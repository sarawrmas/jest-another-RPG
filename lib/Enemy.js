const Potion = require('./Potion.js');

// creates an enemy object
function Enemy(name, weapon) {
    // assign name parameter a value of name
    this.name = name;
    // assign weapon parameter a value of weapon
    this.weapon = weapon;
    // generate new potion
    this.potion = new Potion();
    // give health a random value between 85 and 95
    this.health = Math.floor(Math.random() * 10 + 85);
    // give strength a random value between 5 and 10
    this.strength = Math.floor(Math.random() * 5 + 5);
    // give agility a random value between 5 and 10
    this.agility = Math.floor(Math.random() * 5 + 5);
};

// gets enemy's health value
Enemy.prototype.getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}`;
};

// checks if enemy is alive or not
Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// gets enemy's attack value
Enemy.prototype.getAttackValue = function() {
    // create min and max values to make function easier to maintain
    const min = this.strength -5;
    const max = this.strength +5;
    // get random positive number
    return Math.floor(Math.random() * (max-min) + min);
};

// subtracts from enemy's health
Enemy.prototype.reduceHealth = function(health) {
    // subtract from old health to get new health
    this.health -= health;
    // if health drops to negative number, default to health = 0;
    if (this.health < 0) {
        this.health = 0;
    }
};

// gets a description of the enemy
Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;