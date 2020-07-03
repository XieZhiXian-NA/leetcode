/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
   people.sort((a,b)=>{
       if(a[0]===b[0]) return a[1]-b[1]
       return b[0]-a[0]
   })
   let stack = []
   // 先按照身高排序 对于相同身高的，肯定是k小的在前面
   // 当k值相同时，只要将身高小的元素插入到身高高的元素的前面，
   // 这种操作是对个子高的人是没有影响的

  for(let p of people){
      stack.splice(p[1],0,p)
  }
  return stack
};
// @lc code=end

