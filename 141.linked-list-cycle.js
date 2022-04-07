/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  const hasCycle = head => {
//   let p1 = p2 = head
//    while (p2 && p2.next && p2.next.next) {
//      p1 = p1.next
//      p2 = p2.next.next

//      if (p1 === p2) return true
//    }

//    return false
// }

const hasCycle = head => {
  const snapSet = new Set()
  let p = head

  while (p) {
    if (snapSet.has(p)) return true
    snapSet.add(p)
    p = p.next
  }

  return false
}
// @lc code=end

