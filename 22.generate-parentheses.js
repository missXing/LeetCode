/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const list = []

    function oneByOne(left, right, res) {
      if (left == n && right == n) {
        list.push(res)
        return
      }
    
      if (left < n) {
        oneByOne(left + 1, right, res + '(')
      }
    
      if (right < n && right < left) {
        oneByOne(left, right + 1, res + ')')
      }
    }

    oneByOne(0, 0, '')
    return list
};
// @lc code=end

