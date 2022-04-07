/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0
    let j = 0

    while(j < t.length) {
      if (s[i] === t[j]) {
        i ++
      }
      j ++
    }

    return i === s.length
};
// @lc code=end

