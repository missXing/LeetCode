/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = []
  const stack2 = []

  while(l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while(l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let l3 = new ListNode(0)

  while (stack1.length || stack2.length) {
    let sum = 0
    if (stack1.length) sum += stack1.pop()
    if (stack2.length) sum += stack2.pop()

    // 此时l3上面存的是上次相加的进位
    sum += l3.val
    l3.val = sum % 10
    // 将本次相加的进位放入前一个节点
    let head = new ListNode(Math.floor(sum / 10))
    // 这个节点再指向当前节点
    head.next = l3
    // 更新保存进位的节点名为l3
    l3 = head
  }

  return (l3.val > 0) ? l3 : l3.next
};
// @lc code=end

