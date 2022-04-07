/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    while (x != 0) {
      const tmp = x % 10

      if (res > 214748364 || (res == 214748364 && tmp > 7)) {
        return 0
      }

      if (res < -214748364 || (res == -214748364 && tmp < -8)) {
        return 0
      }

      res = res * 10 + tmp

      x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
    }

    return res
};
// @lc code=end

