/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map()
    const bucket = [];
    const result = []

    for (let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    for (let [num, freq] of freqMap) {
      bucket[freq] = (bucket[freq] || new Set()).add(num)
    }

    for (let i = bucket.length - 1; i >= 0; i --) {
      if (result.length >= k) break
      if (bucket[i]) result.push(...bucket[i])
    }

    result.length = k

    return result
};
// @lc code=end

