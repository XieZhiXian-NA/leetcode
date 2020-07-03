/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let n = s.length
  let dp = Array.from(new Array(n),()=>new Array(n).fill(false))
  for(let i =0;i<n;i++) dp[i][i] = true
  let count = n
  for(let i = n-1;i>=0;i--){
      for(let j = i+1;j<n;j++){
         if(s[i]===s[j]){
             if(j-i===1) dp[i][j] = true
             else dp[i][j] = dp[i+1][j-1]
         }else dp[i][j] = false
         if(dp[i][j]==true) count++
    }
  }
  return count
};
// @lc code=end

