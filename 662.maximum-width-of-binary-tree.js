/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
var widthOfBinaryTree = function(root) {
     const leftPos = [0]
     let maxWidth = 0

     function dfs(node, level, pos) {
       if (!node) return
       if (leftPos[level] === undefined) leftPos.push(pos)

       const diff = pos - leftPos[level]

       maxWidth = Math.max(maxWidth, diff + 1)

       dfs(node.left, level + 1, diff * 2)
       dfs(node.right, level + 1, diff * 2 + 1)
     }

     dfs(root, 0, 0)

     return maxWidth
};
// @lc code=end

