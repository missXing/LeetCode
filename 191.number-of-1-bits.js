/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0

    while(n) {
      // 去掉最后一位1
      // n = n & (n - 1) 当n = 110100, n-1 = 110011; 即将最低位1即其后取反； 与后得：110000
      n = n & (n - 1)
      count ++
    }

    return count
};
// @lc code=end

