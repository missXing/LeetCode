/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const map = {}
  let leftIndex = 0

  return s.split('').reduce((max, v, i) => {
    leftIndex = map[v] >= leftIndex ? map[v] + 1 : leftIndex
    map[v] = i
    return Math.max(max, i - leftIndex + 1)
  }, 0)
}
// @lc code=end

