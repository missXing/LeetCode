/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
var rob = function(root) {
    function helper (node) {
      if (!node) return [0, 0]
      const [lr, ln] = helper(node.left)
      const [rr, rn] = helper(node.right)

      return [node.val + ln + rn, Math.max(lr + rr, lr + rn, ln + rr, ln + rn)]
    }

    return Math.max(...helper(root))
};
// @lc code=end

