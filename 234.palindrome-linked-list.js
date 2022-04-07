/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head, prev

    while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }

    [prev, slow, prev.next] = [slow, slow.next, null]

    while(slow) {
      [slow.next, prev, slow] = [prev, slow, slow.next]
    }

    fast = head
    slow = prev

    while(slow) {
      if (slow.val != fast.val) return false
      fast = fast.next
      slow = slow.next
    }

    return true
};
// @lc code=end

