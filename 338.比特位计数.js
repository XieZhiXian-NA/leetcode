/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const dp = [0];
    for (let i = 0; i <= num; i++) {
      // even
      if (i % 2 === 0) {
        dp[i] = dp[i / 2];
      } else {
        dp[i] = dp[i - 1] + 1;
      }
    }
    return dp;
};
// @lc code=end

