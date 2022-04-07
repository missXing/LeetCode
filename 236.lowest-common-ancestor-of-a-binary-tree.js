/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    console.log(root, 'p---', p, 'q---', q)
    if (!root || root === p || root === q) {
      return root
    }

    let rootLeft = lowestCommonAncestor(root.left, p, q)
    let rootRight = lowestCommonAncestor(root.right, p, q)

    console.log(rootLeft, 'rootRight---', rootRight)


    return (rootLeft && rootRight) ? root : (rootLeft || rootRight)
};
// @lc code=end

