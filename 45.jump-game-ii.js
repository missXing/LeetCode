/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(N) {
  let len = N.length - 1, curr = -1, next = 0, ans = 0
  for (let i = 0; next < len; i++) {
      if (i > curr) ans++, curr = next
      next = Math.max(next, N[i] + i)
  }
  return ans
};

// @lc code=end

