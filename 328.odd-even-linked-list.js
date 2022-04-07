/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
    if (!head) return head

    let odd = head
    let even = head.next

    while (odd.next && odd.next.next) {
      const tmp = odd.next
      odd.next = odd.next.next
      odd = odd.next
      tmp.next = odd.next
    }

    odd.next = even
    return head
};
// @lc code=end

