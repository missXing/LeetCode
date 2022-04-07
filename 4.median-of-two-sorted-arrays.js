/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let count = 0
var findMedianSortedArrays = function(nums1, nums2) {
  let x = nums1.length, y = nums2.length
  let low = 0, high = x

  if (x > y) {
    return findMedianSortedArrays(nums2, nums1)
  }

  while (low <= high) {
    const partitionX = (low + high) >> 1
    const partitionY = ((x + y + 1) >> 1) - partitionX

    const maxX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
    const maxY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY]
    const minX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
    const minY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

    if (minX <= maxY && minY <= maxX) {
      if ((x + y) % 2 === 1) {
        return Math.max(minX, minY)
      } else {
        return (Math.max(minX, minY) + Math.min(maxX, maxY))/2
      }
    } else if (minX < maxY) {
      low = partitionX + 1
    } else {
      high = partitionX
    }
  }
};
// @lc code=end

