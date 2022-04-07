/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = [];
  const board = []

  function backtrack(r = 0) {
    if (r === n) {
        res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        return;
    }
    for (let c = 0; c < n; c++) {
        if (!board.some((bc, br) => bc === c || bc + br === c + r || bc - br === c - r)) {
            board.push(c);
            backtrack(r + 1);
            board.pop();
        }
    }
  }
  backtrack();
  return res;
};
// @lc code=end

