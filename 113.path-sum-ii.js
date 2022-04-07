/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, sum) {
  return findPaths(sum, root, []);
};

function findPaths(sum, node, path) {
  if (!node) return [];
  if (!node.right && !node.left)
    return sum - node.val === 0 ? [path.concat(node.val)] : [];
  
  return [
    ...findPaths(sum - node.val, node.left, path.concat(node.val)),
    ...findPaths(sum - node.val, node.right, path.concat(node.val))
  ];
}
// @lc code=end

