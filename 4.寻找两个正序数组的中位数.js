/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const x = nums1.length, y = nums2.length
    if(x > y) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let low = 0, high = x

    while(low <= high) {
        const partitionX = (low + high) >> 1
        const partitionY = ((x + y + 1) >> 1) - partitionX

        const minX = partitionX === 0 ? -Infinity : nums1[partitionX - 1]
        const minY = partitionY === 0 ? -Infinity : nums2[partitionY - 1]
        const maxX = partitionX === x ? Infinity : nums1[partitionX]
        const maxY = partitionY === y ? Infinity : nums2[partitionY]

        if(minX <= maxY && minY <= maxX) {
            if((x + y) % 2) {
                return Math.max(minX, minY)
            } else {
                return (Math.max(minX, minY) + Math.min(maxX, maxY)) / 2
            }
        } else if(minX <= maxY) {
            low = partitionX + 1
        } else {
            high = partitionX - 1
        }
    }
};
// @lc code=end
