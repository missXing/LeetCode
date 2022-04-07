/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    if (len < 2) return 0

    const dp = new Array(2)
    for (let i = 0; i < 2; i ++) {
      dp[i] = new Array(3).fill(0)
    }


    // dp[0][0] = 0
    dp[0][1] = Number.NEGATIVE_INFINITY
    dp[0][2] = Number.NEGATIVE_INFINITY
    dp[1][0] = -prices[0]
    dp[1][1] = Number.NEGATIVE_INFINITY
    // dp[1][2] = Number.NEGATIVE_INFINITY

    for (let i = 1; i < len; i ++) {
      // dp[0][0] = 0
      dp[0][1] = Math.max(dp[1][0] + prices[i], dp[0][1])
      dp[0][2] = Math.max(dp[1][1] + prices[i], dp[0][2])
      dp[1][0] = Math.max(dp[0][0] - prices[i], dp[1][0])
      dp[1][1] = Math.max(dp[0][1] - prices[i], dp[1][1])
      // dp[1][2] = Number.NEGATIVE_INFINITY
    }

    return Math.max(dp[0][1], dp[0][2], 0)

};
// @lc code=end

