/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [0]

    for (let i = 1; i <= n; i ++) {
      res[i] = i % 2 == 1 ? res[i - 1] + 1 : res[i / 2]
    }

    return res
};
// @lc code=end

