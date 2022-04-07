/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const obj = {}
  const len = nums.length

  for (let i = 0; i < len; i ++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1
    if (obj[nums[i]] > len / 2) return nums[i]
  }
};
// @lc code=end

