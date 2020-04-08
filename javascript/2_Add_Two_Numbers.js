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
var addTwoNumbers = function(l1, l2) {
  let preHead = new ListNode(null);
  let sumNode = preHead;
  let remainder = 0;
  
  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let digitSum = x + y + remainder;
    
    remainder = Math.floor(digitSum / 10);
    digitSum = digitSum % 10;
    
    sumNode.next = new ListNode(digitSum);
    sumNode = sumNode.next;
    
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  
  if (remainder > 0) {
    sumNode.next = new ListNode(remainder);
  }

  return preHead.next;
};
