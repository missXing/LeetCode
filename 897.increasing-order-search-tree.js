/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let newRoot = null, newTree = null;
  
  const helper = (node) => {
    if(!node) return;

    helper(node.left);

    if(!newRoot) {
        newRoot = newTree = node;
    } else {
        newTree.right = node;
        newTree = newTree.right;
        node.left = null;
    }

    helper(node.right);
  }
  
  helper(root);
  return newRoot;
};
// @lc code=end

