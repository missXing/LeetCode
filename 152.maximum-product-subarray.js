/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let preMax = preMin = res = nums[0]
  let len = nums.length
  for (let i = 1; i < len; i ++) {
    const currMax = Math.max(nums[i], nums[i] * preMax, nums[i] * preMin)
    const currMin = Math.min(nums[i], nums[i] * preMax, nums[i] * preMin)

    preMax = currMax
    preMin = currMin

    res = Math.max(preMax, res)
  }

  return res
}
// @lc code=end

