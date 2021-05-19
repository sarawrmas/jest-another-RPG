const Potion = require('../lib/Potion');
const Character = require('./Character.js');

// creates a player object
class Player extends Character {
    // name parameter defaults to empty string if no name is provided
    constructor(name = '') {
        super(name);
        // uses mocked version of potion object to generate health potion
        this.inventory = [new Potion('health'), new Potion()];
    }

    // gets player's stats as an object
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // gets inventory from player or returns false
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    // adds a potion to the inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // uses a potion from inventory
    usePotion(index) {
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
};

// export Player function to be used in test file
module.exports = Player;