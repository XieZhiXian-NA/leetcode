/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let n = nums.length
    let ball = new Array(n+2).fill(1)
    for(let i = 0;i<n;i++){
        ball[i+1] = nums[i]
    }
    let dp = Array.from(new Array(n+2),()=>new Array(n+2).fill(0))
    for(let i = n;i>=0;i--){
        for(let j = i + 1; j < n + 2; j++){
            for(let k = i+1;k<j;k++){
                dp[i][j] = Math.max(
                    dp[i][j], dp[i][k] + dp[k][j] + ball[i]*ball[j]*ball[k])
            }
        }
    }
    console.log(dp)
  return dp[0][n+1]
};
// @lc code=end

