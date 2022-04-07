/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const res = nums.reduce((max, curr) => {
    max = [Math.max(max[0] + curr, curr), Math.max(max[1], Math.max(max[0] + curr, curr))]
    return max
  }, [0, -Number.MAX_VALUE])

  return res[1]
};
// @lc code=end

