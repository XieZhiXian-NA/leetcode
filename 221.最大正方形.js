/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let n = matrix.length
    if(n===0) return 0
    let m = matrix[0].length
    let max = 0
    let dp = Array.from(new Array(n),()=>new Array(m).fill(0))
    for(let i = 0;i<n;i++){
        for(let j =0;j<m;j++){
            if(i===0 || j===0){
                 dp[i][j] = matrix[i][j] === '1'?1:0
            }
            else{
                dp[i][j] = matrix[i][j] === '1'?Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1:0   
            }
            max = Math.max(max,dp[i][j]*dp[i][j])
        }
    }
    return max
    
};
// @lc code=end

