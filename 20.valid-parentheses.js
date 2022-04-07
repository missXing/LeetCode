/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    const len = s.length

    for (let i = 0; i < len; i++) {
      let c = s.charAt(i)
      switch (c) {
        case '(':
          stack.push(')');
          break;
        case '[':
          stack.push(']');
          break;
        case '{':
          stack.push('}');
          break;
        default:
          if (c !== stack.pop()) return false
      }
    }

    return stack.length === 0
};
// @lc code=end

