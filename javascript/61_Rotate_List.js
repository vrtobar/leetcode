/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) return head;
  
  // Find list size and the oldTail
  let listSize = 1;
  let node = head;
  let oldTail = null;
  
  while (node.next) {
    listSize += 1;
    node = node.next;
  }
  
  // Calculate spots to move
  let steps = k % listSize;
  if (steps === 0) return head;
  
  oldTail = node;
  oldTail.next = head;
  
  // Find the new tail and new head
  let newTail = head;
  let newHead = null;
  
  for (let i = 1; i < listSize - steps; i++) {
    newTail = newTail.next;
  }
  
  newHead = newTail.next;
  newTail.next = null;
  
  return newHead;
};
