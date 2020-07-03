/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let row = matrix.length
  let col = matrix[0].length
  let left = matrix[0][0]
  let right = matrix[row-1][col-1]

  let find = (mid)=>{
        let i = row - 1
        let j = 0
        let count = 0 
        while(i>=0 && j<col){
            if(matrix[i][j]>mid) i--
            else {
                count += i+1
                j++

            }
        }
        return count

  }
  while(left < right){
    let mid = left + ((right - left) >> 1);
      let count = find(mid)
      console.log(count)
      if(count<k) left = mid + 1
      else right = mid
  }
  return right
   
};
// @lc code=end