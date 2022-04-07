/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let ll = 0, rr = 0
  const len = s.length
   for (let i = 0; i < len; i++) {
     for (let j of [i, i+1]) {
       for (let l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
         [ll, rr] = (r - l) > (rr - ll) ? [l, r] : [ll, rr]
       }
     }
   }

   return s.substring(ll, rr+1)
}
// @lc code=end

