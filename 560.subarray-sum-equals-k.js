/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = {'0': 1}
    let prefixsum = 0
    let count = 0

    for (let i = 0; i < nums.length; i ++) {
      prefixsum += nums[i]
      if (map[prefixsum - k]) {
        count += map[prefixsum - k]
      }

      map[prefixsum] ? map[prefixsum] ++ : map[prefixsum] = 1
    }

    return count
};
// @lc code=end

