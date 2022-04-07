/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const lastIndex = nums.length - 1
  for (let i = lastIndex; i >= 0; i--) {
    if (nums[i] < nums[i+1]) {
      const rightIndex = findIndx(i)
      temp(i, rightIndex)
      rev(i+1)
      return nums
    }
  }

  function findIndx(index) {
    for (let i = lastIndex; i > index; i--) {
      if (nums[i] > nums[index]) return i
    }
  }

  function temp(index, rightIndex) {
    [nums[index], nums[rightIndex]] = [nums[rightIndex], nums[index]]
  }

  function rev(index) {
    let start = index, end = lastIndex
    while(start < end) {
      temp(start, end)
      start++
      end--
    }
  }

  return nums.reverse()
};
// @lc code=end

