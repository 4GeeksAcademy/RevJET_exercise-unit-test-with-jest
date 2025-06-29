// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function (valueInDollar) {
  // Convert the given valueInDollar to yen
  let valueInYen = valueInDollar * 146.26;
  // return the yen value
  return valueInYen;
};

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function (valueInYen) {
  // Convert the given valueInYen to pounds
  let valueInPound = valueInYen * .00556;
  // return the pound value
  return valueInPound;
};


module.exports = {fromDollarToYen, fromYenToPound}

