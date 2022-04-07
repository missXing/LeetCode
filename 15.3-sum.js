/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let snapNums = nums.sort((a,b) => a-b)
  const len = snapNums.length
  const snapMap = new Set()
  const res = []
  for (let i = 0; i < len - 2; i++) {
    let first = snapNums[i]
    for (let j = i + 1; j < len; j++) {
      const thr = snapNums[j]
      const sec = -(first + thr)
      if (snapMap.has(sec)) {
        res.push([first, sec, thr])
        while(snapNums[j] === snapNums[j + 1]) j++
      } else {
        snapMap.add(thr)
      }
    }
    while(snapNums[i] === snapNums[i+1]) i++
    snapMap.clear()
  }
  return res
};
// @lc code=end

