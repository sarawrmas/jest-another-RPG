// constructor function for health potion
function Potion(name) {
    // assigns type of potion
    this.types = ['strength', 'agility', 'health'];
    // if name is truthy, then name = name; if name is falsy, then assign a random type of potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    // if health potion...
    if (this.name === 'health') {
        // ...assign a random value between 30 and 40
        this.value = Math.floor(Math.random() * 10 + 30);
    // if other kind of potion...
    } else {
        // ...assign a random value between 7 and 12
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

// export Potion function to be used in test file
module.exports = Potion;