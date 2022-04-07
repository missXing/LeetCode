/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const res = [];
  const len = nums.length
  if (len < 4) return res
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      let left = j + 1;
      let right = len - 1;
      
      while(left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (nums[left] === nums[left + 1]) {
            left++
          }
          while (nums[right] === nums[right - 1]) {
            right--
          }
          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right --
        }
      }
      while(nums[j] === nums[j + 1]) j++;
    }
    while(nums[i] === nums[i + 1]) i++;
  }
  return res
};

// @lc code=end

