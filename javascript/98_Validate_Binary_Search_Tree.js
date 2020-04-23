/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return recurse(root, null, null);
};

var recurse = function(node, lower, upper) {
  if (!node) return true;
  
  let val = node.val;
  if (lower !== null && val <= lower) return false;
  if (upper !== null && val >= upper) return false;
  
  if (!recurse(node.right, val, upper)) return false;
  if (!recurse(node.left, lower, val)) return false;
  
  return true;
};
