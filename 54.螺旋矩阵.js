/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = []
  while (matrix.length) {
    const first = matrix.shift()
    res.push(...first)
    for (const m of matrix) {
      let val = m.pop()
      if (val)
        res.push(val)
      m.reverse()
    }
    matrix.reverse()
  }
  return res
};
// @lc code=end

