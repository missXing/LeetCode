/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length

    if (len < 2) return 0

    let cash = 0
    let hold = -prices[0]

    let preCash = cash
    let preHold = hold

    for (let i = 1; i < len; i ++) {
      cash = Math.max(preCash, preHold + prices[i])
      hold = Math.max(preHold, preCash - prices[i])

      preCash = cash
      preHold = hold
    }

    return cash
};
// @lc code=end

