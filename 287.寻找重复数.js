/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let res = {}
    for(let i = 0;i<nums.length;i++){
        if(res[nums[i]]) return nums[i]
        res[nums[i]] = 1
    }
};
// @lc code=end

