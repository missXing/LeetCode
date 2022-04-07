/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  if (len == 0) return 0
  // a: 当前持有一股 b：今天卖出 c：今天是冷冻期
  let a = -prices[0], b = 0, c = 0;
  for (let i = 1; i < len; i++) {
    const newA = Math.max(a, c - prices[i]);
    const newB = a + prices[i];
    const newC = Math.max(b, c);
    a = newA;
    b = newB;
    c = newC;
}

return Math.max(b, c);
};
// @lc code=end

