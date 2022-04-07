/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(1)
    for (let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
  }

  return len > 0 ? Math.max(...arr) : 0
};
// @lc code=end

