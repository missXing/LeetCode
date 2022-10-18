/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null

    function mergeTwoLists(l1, l2) {
        if(!l1) return l2
        if(!l2) return l1

        if(l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next)
            return l2
        }
    }

    while(lists.length > 1) {
        const snap = mergeTwoLists(lists.shift(), lists.shift())
        lists.push(snap)
    }

    return lists[0]

};
// @lc code=end

