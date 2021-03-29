const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(s, d, e, n) {
  if (n <= 0) {
    return
  }

  calculateHanoi(s, e, d, n - 1)
  console.log(`Переместите-${n} из ${s} в ${d}`);
  calculateHanoi(e, d, s, n - 1);
}

calculateHanoi('s', 'd', 'e', 3)