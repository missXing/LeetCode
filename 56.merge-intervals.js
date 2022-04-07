/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a,b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  let pre = intervals[0]
  const res = [pre]

  for (const curr of intervals) {
    if (curr[0] <= pre[1]) {
      pre[1] = Math.max(pre[1], curr[1])
    } else {
      res.push(curr)
      pre = curr
    }
  }

  return res
}
// @lc code=end

