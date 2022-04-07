/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const len = s.length
  let dp = Array(len).fill(0).map(v=>Array(len).fill(0));
  
  for (let i = len - 1; i >= 0; i -- ) {
    dp[i][i] = 1
    for (let j = i + 1; j < len; j ++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][len - 1]
};
// @lc code=end

