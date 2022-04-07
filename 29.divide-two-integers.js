/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0 || divisor === 0) return 0
    if (divisor === -1) {
      return dividend > -Math.pow(2, 31)? -dividend : Math.pow(2, 31) -1
    }

    const sign = ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) ? -1 : 1

    dividend = dividend > 0 ? dividend : -dividend
    divisor = divisor > 0 ? divisor : -divisor
    function recursion(a, b) {
      if ( a < b ) return 0
      let count = 1
      let snap = b
      while((snap + snap) <= a) {
        count += count
        snap = snap + snap
      }

      return count + recursion(a-snap, b)
    }

    let res = recursion(dividend, divisor)

    return sign > 0 ? res : -res

};
// @lc code=end

