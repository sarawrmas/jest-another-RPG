class Character {
    // name parameter defaults to empty string if no name is provided
    constructor(name = '') {
        // assign name parameter a value of name
        this.name = name;
        // give health a random value between 95 and 105
        this.health = Math.floor(Math.random() * 10 + 95);
        // give strength a random value between 7 and 12
        this.strength = Math.floor(Math.random() * 5 + 7);
        // give agility a random value between 7 and 12
        this.agility = Math.floor(Math.random() * 5 + 7);
    }
    // checks if character is alive or not
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    // gets character's health value
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    // gets character's attack value
    getAttackValue() {
        // create min and max values to make function easier to maintain
        const min = this.strength - 5;
        const max = this.strength + 5;
        // get random positive number
        return Math.floor(Math.random() * (max - min) + min);
    }

    // subtracts from character's health
    reduceHealth(health) {
        // subtract from old health to get new health
        this.health -= health;
        // if health drops to negative number, default to health = 0;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Character;