/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const nodeQueue = [];
  let currNode = null;
  
  if (root) nodeQueue.push(root);
  
  while (nodeQueue.length) {
    const levelCount = nodeQueue.length;
    
    let indexOfX = -1;
    let indexOfY = -1;
    
    for (let i = 0; i < levelCount; i++) {
      currNode = nodeQueue.shift();
      if (currNode) {
        if (currNode.val === x) {
          indexOfX = i;
        } else if (currNode.val === y) {
          indexOfY = i;
        }
        nodeQueue.push(currNode.left);
        nodeQueue.push(currNode.right);
      }
    }
    
    if (indexOfX !== -1 && indexOfY !== -1) {
      const lower = Math.min(indexOfX, indexOfY);
      const distance = Math.abs(indexOfX - indexOfY);
      return distance > 1 || lower % 2 !== 0;
    } else if (indexOfX !== -1 || indexOfY !== -1) {
      return false;
    }
  }
  
  return false;
};
