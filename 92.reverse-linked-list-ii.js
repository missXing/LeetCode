/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let start = head, cur = head;
  let i = 1;
  while (i < left) {
      start = cur;
      cur = cur.next;
      i++;
  }
  let prev = null, tail = cur;
  while (i <= right) {
      [cur.next, prev, cur] = [prev, cur, cur.next]
      // [cur, cur.next, start] = [cur.next.next, cur, cur.next]
      i++;
  }
  start.next = prev;
  tail.next = cur;
  return left == 1 ? prev : head; 
  // return head
};
// @lc code=end

