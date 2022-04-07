/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let snap = new Map()
  let len = nums.length

  for (let i = 0; i < len; i ++) {
    if (snap.has(target - nums[i])) {
      return [snap.get(target - nums[i]), i]
    } else {
      snap.set(nums[i], i)
    }
  }

  return []
}
// @lc code=end