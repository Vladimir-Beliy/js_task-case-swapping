'use strict';

/**
 * Implement swapCase function:
 *
 * Given a string, swap the case for each of the letters.
 *
 * Examples:
 * swapCase "aBc"      should return "AbC"
 * swapCase "ABC"      should return "abc"
 * swapCase "123235"   should return "123235"
 *
 * @param {string} phrase
 *
 * @return {string}
 */
function swapCase(phrase) {
  // write code here
  let res = '';

  for (const subStr of phrase) {
    if (subStr === subStr.toLowerCase()) {
      res += subStr.toUpperCase();
    } else {
      res += subStr.toLowerCase();
    }
  }

  return res;
}

module.exports = swapCase;
