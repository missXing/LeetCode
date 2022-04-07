/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  const n = board.length;
  dfs(board, n);
}

function dfs(board, n) {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {

      if (board[row][col] !== '.') continue;

      for (let i = 1; i <= 9; i++) {
        const c = i.toString();
        if (isValid(board, row, col, n, c)) {
          board[row][col] = c;
          if (dfs(board, n)) return true;
        }
      }

      board[row][col] = '.'; 
      return false;
    }
  }
  return true;
}

function isValid(board, row, col, n, c) {
  for (let i = 0; i < n; i++) {
    if (board[row][i] === c || board[i][col] === c ||
      board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + Math.floor(i % 3)] === c) return false;
  }
  return true;
}
// @lc code=end

