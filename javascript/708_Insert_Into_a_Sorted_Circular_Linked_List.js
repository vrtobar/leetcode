/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  let insertNode = new ListNode(insertVal);
  if (!head) {
    insertNode.next = insertNode;
    return insertNode;
  } else if (head === head.next) {
    insertNode.next = head;
    head.next = insertNode;
    return head;
  }
  
  let first = head;
  let second = head.next;
  let largest = null;
  
  while (first.val <= second.val && second !== head) {
    first = first.next;
    second = second.next;
  }
  
  largest = first;
  
  let curr = largest;
  
  if (insertVal < curr.val) {
    while (insertVal >= curr.next.val) {
      curr = curr.next;
    } 
  }
  
  // Insert node
  insertNode.next = curr.next;
  curr.next = insertNode;
  
  return head;
};
