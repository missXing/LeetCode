/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER, max = 0, len = prices.length

  for (let i = 0; i < len; i++) {
    min = Math.min(prices[i], min)
    max = Math.max(max, prices[i] - min)
  }

  return max
    
};
// @lc code=end

