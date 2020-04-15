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
var inorderTraversal = function(root) {
  // Iterative
  const traversalResults = [];
  const nodeStack = [];
  let currNode = root;
  
  while (currNode || nodeStack.length) {
    while (currNode) {
      nodeStack.push(currNode);
      currNode = currNode.left;
    }
    
    currNode = nodeStack.pop();
    traversalResults.push(currNode.val);
    currNode = currNode.right;
  }
  
  return traversalResults;
  
  // Recursive
//   const traversalResults = [];
//   const traverse = (currNode) => {
//     if (!currNode) return;
    
//     traverse(currNode.left);
//     traversalResults.push(currNode.val);
//     traverse(currNode.right);
//   }
  
//   traverse(root);
  
//   return traversalResults;
};
