/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let sizeA = 0;
  let sizeB = 0;
  let nodeA = headA;
  let nodeB = headB;
  
  // Find the size of each list
  while (nodeA) {
    sizeA += 1;
    nodeA = nodeA.next;
  }
  
  while (nodeB) {
    sizeB += 1;
    nodeB = nodeB.next;
  }
  
  // Skip nodes so lists start at the same position
  let nodesToSkip = Math.abs(sizeA - sizeB);
  nodeA = headA;
  nodeB = headB;
  
  if (sizeA > sizeB) {
    for (let i = 0; i < nodesToSkip; i++) {
      nodeA = nodeA.next;
    }  
  } else {
    for (let i = 0; i < nodesToSkip; i++) {
      nodeB = nodeB.next;
    }  
  }
  
  // Find intersection
  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
    
    if (nodeA === nodeB) return nodeA;
  }
  
  return nodeA === nodeB ? nodeA : null;
};
