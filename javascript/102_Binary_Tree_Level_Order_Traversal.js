/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // Iterative
  const traversalResults = [];
  const nodeQueue = [];
  let currNode = null;
  
  if (root) nodeQueue.push(root);
  
  while (nodeQueue.length) {
    const levelResult = [];
    const levelCount = nodeQueue.length;
    for (let i = 0; i < levelCount; i++) {
      currNode = nodeQueue.shift();
      levelResult.push(currNode.val);
      if (currNode.left) nodeQueue.push(currNode.left);
      if (currNode.right) nodeQueue.push(currNode.right); 
    }
    traversalResults.push(levelResult);
  }
  
  return traversalResults;
  
  // Recursive
//   if (!root) return [];
//   const levels = [];
  
//   const traverse = (node, level) => {
//     if (levels.length === level) {
//       levels.push([]);
//     }
    
//     levels[level].push(node.val);
    
//     if (node.left) traverse(node.left, level + 1);
//     if (node.right) traverse(node.right, level + 1);
//   };
  
//   traverse(root, 0);
  
//   return levels;
};
