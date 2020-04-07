/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  
  let preHead = new ListNode(null);
  let curr = preHead;
  let first = l1;
  let second = l2;
  
  while (first && second) {
    if (first.val < second.val) {
      curr.next = first;
      first = first.next;
    } else {
      curr.next = second;
      second = second.next;
    }
    curr = curr.next;
  }
  
  curr.next = first ? first : second;
  
  return preHead.next;
};
