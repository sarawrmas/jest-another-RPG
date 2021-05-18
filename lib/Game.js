const inquirer = require('inquirer');
const Enemy = require('./Enemy.js');
const Player = require('./Player.js');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    // creates empty enemy array
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    // pushes enemies into this.enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    // queue first enemy (at index [0]) when the game is started
    this.currentEnemy = this.enemies[0];
    // prompt the user for their name
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destructure name from the prompt object
        .then(({ name }) => {
            this.player = new Player(name);
        // call function to start a new battle anytime a new round starts
        this.startNewBattle();
        });
};

Game.prototype.startNewBattle = function() {
    // establish who will take their turn first based on their agility values
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }
    // display player object's stats
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    // display enemy object's description
    console.log(this.currentEnemy.getDescription());
    // call battle() method to handle each individual turn in the round
    this.battle();
};


Game.prototype.battle = function() {
    // if player turn...
    if (this.isPlayerTurn) {
        // prompt user to attack or use a potion
        inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['Attack', 'Use potion']
        })
        .then(({ action }) => {
            // if using a potion, display list of potion objects to user
            if (action === 'Use potion') {
                // if player has no potions, alert them and end function
                if (!this.player.getInventory()) {
                    console.log("You don't have any potions!");
                    return;
                }

                // if player has potions, ask which one they'd like to use and list all options from inventory
                inquirer
                .prompt({
                    type: 'list',
                    message: 'Which potion would you like to use?',
                    name: 'action',
                    // list choices from potion inventory and add 1 to index to make numbers more user-friendly (1st index is 1 instead of 0)
                    choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                })
                // when the user selects a potion...
                .then(({ action }) => {
                    // split string from previous prompt choices at the : to make an array with the number and potion name
                    const potionDetails = action.split(': ');
                    // subtract 1 from index to return to the original array index
                    this.player.usePotion(potionDetails[0] - 1);
                    console.log(`You used a ${potionDetails[1]} potion.`)
                })
            }
            // if attacking, subtract health from the enemy based on player attack value
            else {
                const damage = this.player.getAttackValue();
                this.currentEnemy.reduceHealth(damage);

                console.log(`You attacked the ${this.currentEnemy.name}`);
                console.log(this.currentEnemy.getHealth());
            }
        });
    }
    // if enemy turn...
    else {
         // subtract health from the player based on enemy attack value
        console.log("it is enemy's turn")
    };
};

module.exports = Game;