/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  
  let isSumFound = false;
  
  const recurse = (node, totalSum) => {
    if (!node) return;
    if (isSumFound) return;
    
    if (!node.left && !node.right) {
      isSumFound = node.val + totalSum === sum ? true : isSumFound;
      return;
    }
    
    recurse(node.left, node.val + totalSum);
    recurse(node.right, node.val + totalSum);
  };
  
  recurse(root, 0);
  
  return isSumFound;
};
