/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if(!digits || digits.length === 0) return []

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };


  const res = []
  const len = digits.length
  function go(index, s) {
    if (index === len) {
      res.push(s)
      return
    }

    for (const cha of map[digits[index]]) {
      go( index + 1, s + cha)
    }
  }

  go(0, '')
  return res
};
// @lc code=end

