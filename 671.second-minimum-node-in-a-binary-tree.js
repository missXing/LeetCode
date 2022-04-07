/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function(root) {
    let res = -1

    function dfs(root, min) {
      if (!root) return

      if (root.val != min) {
        if (res === -1) {
          res = root.val
        } else {
          res = Math.min(res, root.val)
        }
        return
      }
      dfs(root.left, min)
      dfs(root.right, min)
    }

    dfs(root, root.val)
    return res
};
// @lc code=end

