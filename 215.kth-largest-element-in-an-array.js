/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  const snap = nums.sort((a,b) => a-b)
  const len = snap.length

  return snap[len-k]
    
};
// @lc code=end

