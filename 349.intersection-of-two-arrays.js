/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (nums1.length > nums2.length) return intersection(nums2, nums1)
  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)
  const res = []
  nums1Set.forEach(i => {
    if (nums2Set.has(i)) res.push(i)
  })
  return res
};
// @lc code=end

