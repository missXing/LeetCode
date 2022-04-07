/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let len = temperatures.length
  let stack = []
  let res = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }

  return res
};
// @lc code=end

