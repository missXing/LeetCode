/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  let res = []
  if (k < 0 || n < k) return res

  function dfs(curr, index) { 
    if (curr.length === k) {
      res.push(curr)
      return
    }

    while(index <= n) {
      dfs([...curr, index], ++index)
    }
  }

  dfs([], 1)

  return res
};
// @lc code=end

