/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let result = []
  let path = []
  let len = nums.length
  let sortNums = nums.sort((a, b) => {
      return a - b
  })
  function backtracing(startIndex, sortNums) {
      result.push(path.slice(0))
      if(startIndex > len - 1) {
          return
      }
      for(let i = startIndex; i < len; i++) {
          if(i > startIndex && nums[i] === nums[i - 1]) {
              continue
          }
          path.push(nums[i])
          backtracing(i + 1, sortNums)
          path.pop()
      }
  }
  backtracing(0, sortNums)
  return result
};
// @lc code=end

