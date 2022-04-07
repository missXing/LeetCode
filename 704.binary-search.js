/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let max = nums.length
    let min = 0
    if (!max) return -1

    let mid = (min + max + 1) >> 1



    while (nums[mid] !== target && min <= max) {
      if (nums[mid] < target) {
        min = mid + 1
      } else {
        max = mid - 1
      }
      mid = (min + max + 1) >> 1
    }

    return min <= max ? mid : -1

};
// @lc code=end

