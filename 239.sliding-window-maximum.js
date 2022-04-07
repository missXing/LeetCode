/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const window = [] 
  const res = [] 
  const len = nums.length

  for (let i = 0; i < len; i ++) {
    while(nums[window[window.length - 1]] <= nums[i]) {
      window.pop()
    }

    window.push(i)

    if (window[0] === i - k) {
      window.shift()
    }

    if ( i >= k - 1) {
      res.push(nums[window[0]])
    }
  }

  return res
};
// @lc code=end

