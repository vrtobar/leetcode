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
var detectCycle = function(head) {
  const visitedNodes = new Set();
  let node = head;
  
  while (node) {
    if (visitedNodes.has(node)) {
      return node;
    }
    
    visitedNodes.add(node);
    node = node.next; 
  }
  
  return null;
};
