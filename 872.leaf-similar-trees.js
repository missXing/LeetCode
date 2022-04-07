/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let lAry = [];
  let rAry = [];
  getLeaf(root1, lAry);
  getLeaf(root2, rAry);
  if(lAry.length != rAry.length) return false;
  for(let i=0; i < lAry.length; ++i) {
      if(lAry[i] != rAry[i]) return false;
  }
  return true;
  
};

var getLeaf = function(root, ary) {
  if(!root) return;
  if(!root.left && !root.right) {
      ary.push(root.val);
  }
  getLeaf(root.left, ary);
  getLeaf(root.right, ary);

}
// @lc code=end

