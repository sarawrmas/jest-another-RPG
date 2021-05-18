const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');
jest.mock('../lib/Potion.js')

test('creates an enemy object', () => {
    // hard code enemy name to be goblin and weapon to be sword
    const enemy = new Enemy('goblin', 'sword');
    // check if enemy name and weapon is in fact goblin and sword, respectively
    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    // check for properties with number values
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');
    // get information about enemy's health and check that string contains enemy's health
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');
    // check if enemy is alive (enemy alive = true)
    expect(enemy.isAlive()).toBeTruthy();
    // if enemy is dead, set enemy health equal to 0 before running next expect
    enemy.health = 0;
    // if enemy health is 0, check to see if enemy is dead (enemy alive = false)
    expect(enemy.isAlive()).toBeFalsy();
});

test("gets enemy's attack value", () => {
    const enemy = new Enemy('goblin', 'sword');
    // sets enemy strength equal to 10 because it is hard to test for randomness
    enemy.strength = 10;
    // checks for value between 5 and 15 because expected output is 10
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;
    // call reduceHealth() function to subtract 5 points from health
    enemy.reduceHealth(5);
    expect(enemy.health).toBe(oldHealth - 5);
    // call reduceHealth() function to subtract a high number to ensure that health cannot go negative
    enemy.reduceHealth(99999);
    expect(enemy.health).toBe(0);
});

test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');
    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});