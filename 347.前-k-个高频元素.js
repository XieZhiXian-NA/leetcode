/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = {}
    for(let value of nums){
        if(res[value]) res[value]++
        else {
            res[value] = 1
        }
    }
    let sortRes = Object.keys(res).sort((a,b)=>res[b]-res[a])
    let p =sortRes.slice(0,k)
    
    return p
};
// @lc code=end

