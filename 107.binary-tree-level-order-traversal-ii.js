/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Medium (57.63%)
 * Likes:    2907
 * Dislikes: 268
 * Total Accepted:    476.8K
 * Total Submissions: 822.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the bottom-up level order traversal
 * of its nodes' values. (i.e., from left to right, level by level from leaf to
 * root).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1]
 * Output: [[1]]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = []
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 * 
 * 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let q = [root], ans = []

  while(q[0]) {
    const len = q.length, row = []

    for (let i = 0; i < len; i ++) {
      let curr = q.shift()
      row.push(curr.val)
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }

    ans.unshift(row)
  }

  return ans
};
// @lc code=end

