const Player = require('../lib/Player.js');
// imports Potion() constructor into the test, establishing it as a usable variable
const Potion = require('../lib/Potion.js');
// mocks/replaces the constructor's implementation with our faked data
jest.mock('../lib/Potion.js');

console.log(new Potion());

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