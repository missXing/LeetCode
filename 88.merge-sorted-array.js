/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = m+n-1
    m--; n--;
    while(n>=0) {
      nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
};
// @lc code=end

