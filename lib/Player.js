//import Potion() constructor
const Potion = require('../lib/Potion');

// creates a player object
function Player(name = '') { // name parameter defaults to empty string if no name is provided
    // assign name parameter a value of name
    this.name = name;
    // give health a random value between 95 and 105
    this.health = Math.floor(Math.random() * 10 + 95);
    // give strength a random value between 7 and 12
    this.strength = Math.floor(Math.random() * 5 + 7);
    // give agility a random value between 7 and 12
    this.agility = Math.floor(Math.random() * 5 + 7);
    // uses mocked version of potion object to generate health potion
    this.inventory = [new Potion('health'), new Potion()];
};

// gets player's stats as an object
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// gets inventory from player or returns false
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

// gets player's health value
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}`
};

// checks if player is alive or not
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// subtracts from player's health
Player.prototype.reduceHealth = function(health) {
    // subtract from old health to get new health
    this.health -= health;
    // if health drops to negative number, default to health = 0;
    if (this.health < 0) {
        this.health = 0;
    }
}

// gets player's attack value
Player.prototype.getAttackValue = function() {
    // create min and max values to make function easier to maintain
    const min = this.strength -5;
    const max = this.strength +5;
    // get random positive number
    return Math.floor(Math.random() * (max-min) + min);
};

// adds a potion to the inventory
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

// uses a potion from inventory
Player.prototype.usePotion = function(index) {
    // FIRST original inventory array has a single potion removed at the specified index value,
    // THEN removed potion gets put into a new "removed items" array,
    // THEN potion at index[0] of "removed items" array is saved in a potion variable
    const potion = this.getInventory().splice(index, 1)[0];
    // using a potion of a certain property updates player's stats for that property
    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
}

// export Player function to be used in test file
module.exports = Player;