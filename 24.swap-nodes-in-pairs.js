/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var swapPairs = function(head) {
  if (!head || !head.next) return head

  const v1 = head, v2 = head.next, v3 = v2.next
  v2.next = v1
  v1.next = swapPairs(v3)
  return v2
};
// @lc code=end

