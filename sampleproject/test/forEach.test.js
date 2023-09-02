const assert = require('assert');
const { forEach } = require('../index');

let numbers = 0
beforeEach(() => {
  numbers = [1, 2, 3]  
})

it('should sum an array', () => {
  let total = 0;
  forEach(numbers, value => {
    total += value;
  });

  assert.strictEqual(total, 6);
  numbers.push(3)
  numbers.push(3)
  numbers.push(3)
});

it('beforeEach running each time', () => {
  assert.strictEqual(numbers.length, 4)
})