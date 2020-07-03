/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let n = A.length
    let m = B.length
    let dp = Array.from(new Array(m+1),()=>new Array(n+1).fill(0))
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 1;i<=m;i++){
        for(let j = 1;j<=n;j++){
                if(A[j-1] === B[i-1]){
                    dp[i][j] = dp[i-1][j-1] + 1
                }else{
                    dp[i][j] = 0
                }
                max = Math.max(max,dp[i][j])
        }
    }
   return max
};
// @lc code=end

