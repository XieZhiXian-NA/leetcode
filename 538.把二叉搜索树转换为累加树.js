/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST = function(root) {
    if(root === null) return null
    let shareSum = 0
   let dfs = (root)=>{
        if(root.right){
            dfs(root.right)
        }
        root.val = root.val + shareSum;
	    shareSum = root.val;
        if(root.left){
           
            dfs(root.left)  
            
        } 
   }
   dfs(root)
   return root
   
};
// @lc code=end

