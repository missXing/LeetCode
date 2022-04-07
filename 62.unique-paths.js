/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const dp = new Array(n + 1).fill(1);
  
  for(let row = m - 1; row > 0; row--){
      for(let col = n - 1; col > 0; col--){
          dp[col] = dp[col] + dp[col + 1];
      }
  }
  return dp[1];
};
// @lc code=end

