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

// export Player function to be used in test file
module.exports = Player;