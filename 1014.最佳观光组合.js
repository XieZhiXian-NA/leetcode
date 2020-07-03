/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let max  = Number.MIN_SAFE_INTEGER;
  let n = A.length;
  let preMax = A[0]
  for(let i = 1;i<n;i++){  
    let m = A[i] - i + preMax
    max = Math.max(max,m)
    preMax = Math.max(preMax,A[i]+i)
        
  }
return max

};
// @lc code=end

