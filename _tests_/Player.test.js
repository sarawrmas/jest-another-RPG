const Player = require('../lib/Player.js');
// imports Potion() constructor into the test, establishing it as a usable variable
const Potion = require('../lib/Potion.js');
// mocks/replaces the constructor's implementation with our faked data
jest.mock('../lib/Potion.js');

test('creates a player object', () => {
    // hard code player name to be Dave
    const player = new Player('Dave');
    // tests if player name is in fact Dave
    expect(player.name).toBe('Dave');
    // checks for existence of health, strength, and agility with a value of any number
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    // check for the creation of an inventory
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test("gets player's stats as an object", () => {
    const player = new Player('Dave');
    // uses getStats() function to check for certain properties
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
})

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
    // uses genInventory() function to check if array exists
    expect(player.getInventory()).toEqual(expect.any(Array));
    // simulate an empty array before next expect runs
    player.inventory = [];
    // if inventory is empty, return false
    expect(player.getInventory()).toEqual(false);
})

test("gets player's health value", () => {
    const player = new Player('Dave');
    // get information about player's health and check that string contains player's health
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
})

test('checks if player is alive or not', () => {
    const player = new Player('Dave');
    // check if player is alive (player alive = true)
    expect(player.isAlive()).toBeTruthy();
    // if player is dead, set player health equal to 0 before running next expect
    player.health = 0;
    // if player health is 0, check to see if player is dead (player alive = false)
    expect(player.isAlive()).toBeFalsy();
})

test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
    // call reduceHealth() function to subtract 5 points from health
    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth - 5);
    // call reduceHealth() function to subtract a high number to ensure that health cannot go negative
    player.reduceHealth(99999);
    expect(player.health).toBe(0);
})