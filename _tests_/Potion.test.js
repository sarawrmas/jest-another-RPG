const Potion = require('../lib/Potion.js')

test('creates a health potion object', () => {
    // create new health potion
    const potion = new Potion('health');
    // new potion has name property equal to 'health'
    expect(potion.name).toBe('health');
    // new potion has value property equal to some number
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    // create new potion
    const potion = new Potion();
    // checks that new potion has a name that is a string
    expect(potion.name).toEqual(expect.any(String));
    // fail test if name is empty
    expect(potion.name.length).toBeGreaterThan(0);
    // checks that new potion has a value that is a number
    expect(potion.value).toEqual(expect.any(Number));
});