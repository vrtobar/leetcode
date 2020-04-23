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
var countUnivalSubtrees = function(root) {
  // Bottom up
  // if (!root) return 0;
  
  // let count = 0;

  // const isUnivalue = (node) => {
  //   if (!node.left && !node.right) {
  //     count += 1;
  //     return true;
  //   }
    
  //   let isUni = true;
    
  //   if (node.left) {
  //     isUni = isUnivalue(node.left) && isUni && node.left.val === node.val;
  //   }
    
  //   if (node.right) {
  //     isUni = isUnivalue(node.right) && isUni && node.right.val === node.val;
  //   }
    
  //   count = isUni ? count + 1 : count;
    
  //   return isUni;
  // };
  
  // isUnivalue(root);
  
  // return count;

  // Top down
  if (!root) return 0;
  
  let count = 0;

  const isUnivalue = (node, val) => {
    if (!node) return true;
    
    const isLeftUni = isUnivalue(node.left, node.val);
    const isRightUni = isUnivalue(node.right, node.val);
    
    if (isLeftUni && isRightUni) {
      count += 1;
      return node.val === val; 
    }
    
    return false;
  };
  
  isUnivalue(root, null);
  
  return count;
};
