/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b) => a + b, 0)
    if (sum % 2 !== 0) return false

    const half = sum / 2

    const dp = [true]

    for (let i = 0; i < nums.length; i ++) {
      const num = nums[i]
      for (let j = half; j >= num; j --) {
        if (dp[half]) return true
        dp[j] = dp[j] || dp[j - num]
      }
    }

    return dp[half] || false
};
// @lc code=end

