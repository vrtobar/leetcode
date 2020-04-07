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
var isPalindrome = function(head) {
  let nodes = [];
  let node = head;
  
  while (node) {
    nodes.push(node);
    node = node.next;
  }
  
  let i = 0;
  let j = nodes.length-1;
  
  while (i < j) {
    if (nodes[i].val !== nodes[j].val) return false;
    i += 1;
    j -= 1;
  }
  
  return true;
};
