"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let intSum = 0;
  for (let i = 0; i < num.toString().length; i++) {
    intSum += num.toString()[i] * 2 ** (num.toString().length - 1 - i);
  }
  return intSum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let intDiv = num;
  const arrBin = [];
  while (intDiv !== 0) {
    arrBin.unshift(intDiv % 2);
    intDiv = Math.floor(intDiv / 2);
  }
  return arrBin.join("") /* *1 */;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
