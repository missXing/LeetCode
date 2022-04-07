/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let i = triangle.length-2; i >= 0; i--)
      for (let j = 0; j < triangle[i].length; j++)
          triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
  return triangle[0][0]
}
// @lc code=end

