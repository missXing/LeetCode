/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(letters) {
  let res = []
  const len = letters.length

  function defs(path, used) {
    if (path.length === len) {
      res.push(Array.from(path))
      return
    }

    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(letters[i])
      used[i] = true
      defs(path, used)
      path.pop()
      used[i] = false
    }
  }

  defs([], Array(len).fill(false))

  return res
}
// @lc code=end

