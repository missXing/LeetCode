/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let n = nums.length
  let a = 0
  let b = n - 1
  for (let i = 0; i < n; i++) {
    while(i <= b && nums[i] === 2) {
      [nums[i], nums[b]] = [nums[b], nums[i]]
      --b
    }

    if (nums[i] === 0) {
      [nums[i], nums[a]] = [nums[a], nums[i]]
      ++a
    }
  }

};
// @lc code=end

