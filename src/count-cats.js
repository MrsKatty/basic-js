const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counter = 0;
  let array = backyard.flat();
  for (const obj of array) {
    if (obj === '^^')
      counter++;
  }
  return counter;
}