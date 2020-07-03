/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return null
      let queue = [root]
      while(queue.length>0){
        let r = queue.pop()
        if(r === null) continue
        [r.left,r.right] = [r.right,r.left]
        queue.unshift(r.left)
        queue.unshift(r.right)
      }
      return root
};
// @lc code=end

