/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;
  let newHead = null;
  let newTail = head;
  
  while (newTail.next) {
    newHead = newTail.next;
    newTail.next = newTail.next.next;
    newHead.next = head;
    head = newHead;
  }
  
  return head;
};
