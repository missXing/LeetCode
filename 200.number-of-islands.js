/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
   let count = 0
   const leni = grid.length, lenj = grid[0].length

   function search(x, y) {
     if (grid[x][y] === '1') {
       grid[x][y] = 0
     } else {
       return
     }

     if (x < grid.length - 1) {
       search(x+1, y)
     }

     if (y < grid[x].length - 1) {
      search(x, y + 1)
    }

    if (x < grid.length && x > 0) {
      search(x-1, y)
    }

    if (y < grid[x].length && y > 0) {
      search(x, y - 1)
    }
   }

   for (let i = 0; i < leni; i ++) {
     for (let j = 0; j < lenj; j ++) {
       if (grid[i][j] === '1') {
         count ++
         search(i, j)
       }
     }
   }
  
  return count;
};
// @lc code=end

