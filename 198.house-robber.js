/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const res = nums.reduce((snap, curr) => {
    return [snap[1], Math.max(snap[0] + curr, snap[1])]
  }, [0,0])

  return res[1]
};
// @lc code=end

