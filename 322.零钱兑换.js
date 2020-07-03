/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0
    let n = coins.length
    for(let i = 1;i<=amount;i++)
    for(let n of coins){
        let r = i - c
        if(r<0) continue
        dp[i] = Math.min(dp[i],dp[r]+1)  
    }
  return dp[amount] === amount+1?-1:dp[amount]

};
// @lc code=end

