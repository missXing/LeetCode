/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const len = matrix.length
  if (!len) return 0

  let dp = new Array(len + 1).fill(0).map(() => new Array(matrix[0].length + 1).fill(0))

  let max = 0

  for (let i = 1; i < dp.length; i ++) {
    for (let j = 1; j < dp[0].length; j ++) {
      if (matrix[i - 1][j - 1] != 0) {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
        max = Math.max(dp[i][j], max)
      }
    }
  }

  return Math.pow(max, 2)
};
// @lc code=end

