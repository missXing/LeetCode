/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
      if (nums[i] != 0) nums[pos++] = nums[i]
    }

    for (let i = pos; i < len; i ++) {
      nums[i] = 0
    }
};
// @lc code=end

