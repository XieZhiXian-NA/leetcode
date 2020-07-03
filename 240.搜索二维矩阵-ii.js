/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    if(n===0) return false
    if (target < matrix[0][0]) {
        return false;
      }
    let m = matrix[0].length;
    let i = n-1;
    let j = 0
    while(i>=0 && j<=m){
        let t = matrix[i][j]
        if(target===t) return true
        else if(target >t) j++
        else i--
    }
    return false
};
// @lc code=end

