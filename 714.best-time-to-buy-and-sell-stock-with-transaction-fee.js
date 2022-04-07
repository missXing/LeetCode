/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let len = prices.length
    let idle = 0
    let hold = -prices[0]

    for (let i = 1; i < len; i ++) {
      idle = Math.max(idle, hold + prices[i] - fee)
      hold = Math.max(hold, idle - prices[i])
    }

    return idle

};
// @lc code=end

