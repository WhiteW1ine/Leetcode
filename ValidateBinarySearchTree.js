
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }



/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    let current = root

    if (current.left >= current.val || current.right <= current.val) {
        return false
    }

    while (current.left !== undefined) {
        isValidBST(current.left)
        break
    }

    while (current.right !== undefined) {
        isValidBST(current.right)
        break
    }
    return true
};

let treeNode = new TreeNode(2,1,3)
console.log(isValidBST(treeNode))