/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // Top down
  let maxDepth = 0;
  
  const recurse = (node, depth) => {
    if (!node) return;
    
    if (!node.left && !node.right) {
      maxDepth = Math.max(maxDepth, depth);
    }
    
    recurse(node.left, depth + 1)
    recurse(node.right, depth + 1);
  };
  
  recurse(root, 1);
  
  return maxDepth;
  
  // Bottom up
//   const recurse = node => {
//     if (!node) return 0;
    
//     let leftDepth = recurse(node.left);
//     let rightDepth = recurse(node.right);
    
//     return Math.max(leftDepth, rightDepth) + 1;
//   };

  // return recurse(root);
};
