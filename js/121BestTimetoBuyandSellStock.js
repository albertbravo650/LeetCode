/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxP = 0;
  let minimum = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
    } else if (prices[i] - minimum > maxP) {
      maxP = prices[i] - minimum;
    }
  }
  // console.log(maxP)
  return maxP;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));