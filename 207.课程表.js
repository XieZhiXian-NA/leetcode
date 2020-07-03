/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
          let dp = new Array(numCourses).fill(0)
          let adj = new Map()
          for(let p of prerequisites){
              dp[p[0]]++
              if(!adj.has(p[1])) {
                 adj.set(p[1],[])
              }
              let vdj = adj.get(p[1])
              vdj.push(p[0])
          }
          let queue = []
          for(let i=0;i<numCourses;i++){
              if(dp[i]===0) queue.push(i)
          }
          while(queue.length){
             let v = queue.shift()
             numCourses--
             if(!adj.has(v)) continue
             for(let w of adj.get(v)){
                 dp[w]--
                 if(dp[w]===0) queue.push(w)
             }
          }

          return numCourses === 0
};
// @lc code=end