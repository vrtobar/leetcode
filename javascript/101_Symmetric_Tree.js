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
var isSymmetric = function(root) {
  if (!root) return true;
  
  const recurse = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    p
    return root1.val === root2.val 
      && recurse(root1.left, root2.right) 
      && recurse(root1.right, root2.left);
  };
  
  return recurse(root.left, root.right);
  
//   if (!root) return true;
  
//   let stack = [];
//   stack.push(root.left);
//   stack.push(root.right);
  
//   while (stack.length) {
//     let root1 = stack.pop();
//     let root2 = stack.pop();
//     if (!root1 && !root2) continue;
//     if (!root1 || !root2) return false;
//     if (root1.val !== root2.val) return false;
//     stack.push(root1.left);
//     stack.push(root2.right);
//     stack.push(root1.right);
//     stack.push(root2.left);
//   }
  
//   return true;
};
