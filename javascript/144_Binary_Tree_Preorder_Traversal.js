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
var preorderTraversal = function(root) {
  // Iterative
  const traversalResults = [];
  const nodeStack = [];
  let currNode = null;
  
  nodeStack.push(root);
  
  while (nodeStack.length !== 0) {
    currNode = nodeStack.pop();
    
    if (currNode) {
      traversalResults.push(currNode.val);
      nodeStack.push(currNode.right);
      nodeStack.push(currNode.left);
    }
  }
  
  return traversalResults;
    
  // Recursive
//   const nodes = [];
  
//   const traverse = (node, nodes) => {
//     if (!node) return nodes;
//     // Root
//     nodes.push(node.val);
    
//     // Left
//     if (node.left) {
//       traverse(node.left, nodes);
//     }
    
//     if (node.right) {
//       traverse(node.right, nodes);
//     }
    
//     return nodes;
//   };
  
//   return traverse(root, nodes);
};
