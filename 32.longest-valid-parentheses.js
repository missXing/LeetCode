/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} 
 * @return {number}
 */
var longestValidParentheses = function(S) {
  let stack = [-1], ans = 0
  for (let i = 0; i < S.length; i++)
      if (S[i] === '(') stack.push(i)
      else if (stack.length === 1) stack[0] = i
      else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
  return ans
};
// @lc code=end

