/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  let prev = 0;
  let cur = 1;
  
  for (let i = 0; i < n; i++) {
      [prev, cur] = [cur, prev + cur]
  }
  return cur;
};

// @lc code=end

