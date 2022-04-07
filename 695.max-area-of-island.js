/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let res = 0, n = grid.length, m = grid[0].length

  function travel(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
    grid[i][j] = 0
    return 1 + travel(i - 1, j) + travel(i + 1, j) + travel(i, j - 1) + travel(i, j + 1)
  }

  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < m; j ++) {
      if (grid[i][j]) res = Math.max(res, travel(i, j))
    }
  }

  return res
};

// @lc code=end

