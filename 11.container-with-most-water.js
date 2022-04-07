/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0, left = 0, right = height.length - 1

    while (left < right) {
      res = Math.max(Math.min(height[left], height[right]) * (right - left), res)
      if (height[left] < height[right]) left ++
      else right --
    }
    return res
};
// @lc code=end

