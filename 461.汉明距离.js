/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
   let s = x ^ y
   let dep = 0
   while(s){
       s = s & s-1
       dep ++
   }
   return dep
};
// @lc code=end

