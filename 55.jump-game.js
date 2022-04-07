/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    let rightMost = 0

    for (let i = 0; i < n; i++) {
      if (i <= rightMost) {
        rightMost = Math.max(rightMost, i + nums[i])
        if (rightMost >= n - 1) return true
      }
    }

    return false
};
// @lc code=end

