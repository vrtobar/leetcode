/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  
  // Iterative
  const traversalResults = [];
  const nodeStack = [];
  let currNode = null;
  
  nodeStack.push(root);
  
  while (nodeStack.length) {
    currNode = nodeStack.pop();
    traversalResults.push(currNode.val);
    
    if (currNode.left) nodeStack.push(currNode.left);
    if (currNode.right) nodeStack.push(currNode.right);
  }
  
  return traversalResults.reverse();
  
  // Recursive
//   const traversalResults = [];
//   const traverse = node => {
//     if (!node) return;
    
//     if (node.left) {
//       traverse(node.left);
//     }
    
//     if (node.right) {
//       traverse(node.right);
//     }
    
//     traversalResults.push(node.val);
//   };
  
//   traverse(root);
  
//   return traversalResults;
};
