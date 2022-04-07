/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const charCodeBase = 'A'.charCodeAt(0) - 1
    const len = columnTitle.length
    let num = 0

    for (let i = 0; i < len; i ++) {
      num += (columnTitle.charCodeAt(i) - charCodeBase) * Math.pow(26, len - i - 1)
    }

    return num
};
// @lc code=end

