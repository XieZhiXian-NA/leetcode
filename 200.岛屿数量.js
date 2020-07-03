/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length
    if(n===0) return 0
    let m = grid[0].length
    let track = Array.from(new Array(n),()=>new Array(m).fill(false))
    let dfs = (i,j)=>{
        //  debugger
            if(!track[i][j]){ 
                   if(grid[i][j]=== '0'){
                     track[i][j] = false
                     return
                   }
                   track[i][j] = true 
                   if(j+1<m) dfs(i,j+1)
                   if(i+1<n) dfs(i+1,j)
                   if(i-1>=0) dfs(i-1,j)
                   if(j-1>=0) dfs(i,j-1) 
                  
            }   
       }
    let count = 0
    for(let i =0;i<n;i++){
        for(let j=0;j<m;j++){ 
            if(grid[i][j] === '1' && track[i][j]===false){
                count ++ 
                dfs(i,j)
            }
         }}
   return count
};
// @lc code=end

