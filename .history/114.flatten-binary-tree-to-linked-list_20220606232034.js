/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let head = null, curr = root
  while (head != root) {
      if (curr.right === head) curr.right = null
      if (curr.left === head) curr.left = null
      if (curr.right) curr = curr.right
      else if (curr.left) curr = curr.left
      else curr.right = head, head = curr, curr = root
  }
};
// @lc code=end

