/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(OG) {
  if (OG[0][0]) return 0
  let m = OG.length, n = OG[0].length
  let dp = Array.from({length: m}, el => new Uint32Array(n))
  console.log(dp)
  dp[0][0] = 1
  for (let i = 0; i < m; i++)
      for (let j = 0; j < n; j++)
          if (OG[i][j] || (!i && !j)) continue
          else dp[i][j] = (i ? dp[i-1][j] : 0) + (j ? dp[i][j-1] : 0)
  return dp[m-1][n-1]
};

// @lc code=end

