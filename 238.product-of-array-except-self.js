/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    let left = 1, right = 1
    const len = nums.length

    for (let i = len - 1; i >= 0; i --) {
      res[i] = right
      right *= nums[i]
    }

    for (let i = 0; i < len; i ++) {
      res[i] *= left
      left *= nums[i]
    }

    return res
};
// @lc code=end

