const assert = require('assert');
const { somma } = require('./index.js');

assert.strictEqual(somma(2, 3), 5);
assert.strictEqual(somma(-1, 1), 0);
console.log('Test OK');
