/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 var diameterOfBinaryTree = function(root) {
   let res = 0

   function search(node) {
     if (!node) return 0

     const left = search(node.left)
     const right = search(node.right)

     res = Math.max(res, left + right)

     return 1 + Math.max(left, right)
   }

   search(root)

   return res
};
// @lc code=end

