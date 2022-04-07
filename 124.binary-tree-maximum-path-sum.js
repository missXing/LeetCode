/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  var max = -Number.MAX_VALUE
  function getMaxSum(node) {
    if (!node) return 0
    const leftMax = getMaxSum(node.left)
    const rightMax = getMaxSum(node.right)
    max = Math.max(max, node.val + leftMax + rightMax)
    return Math.max(0, node.val + leftMax, node.val + rightMax)
  }
  getMaxSum(root)
  return max
};
// @lc code=end

