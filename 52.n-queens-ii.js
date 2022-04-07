/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let ans = 0

  function dfs(row, col, ld, rd) {
    if (row === n) {
      ans ++
      return
    }

    let bits = ~(col | ld | rd) & ((1 << n) - 1)

    while(bits > 0) {
      let pick = bits & -bits
      dfs(row + 1, col | pick, (ld | pick) << 1, (rd | pick) >> 1)
      bits &= bits - 1
    }
  }

  dfs(0,0,0,0)
  return ans
};
// @lc code=end

