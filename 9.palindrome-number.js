/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let res = 0

    for (let i = x; i >=1; i = Math.floor(i / 10)) res = res * 10 + i % 10

    return res === x
};
// @lc code=end

