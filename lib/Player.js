//import Potion() constructor
const Potion = require('../lib/Potion');

// constructor function for player object
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

// returns an object with various player properties
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if empty
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

// export Player function to be used in test file
module.exports = Player;