/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let reg = /([0-9]+)\[([a-zA-Z]+)\]/g
  let it = s.matchAll(reg)
  let st = ''
  for(let i of it){
    let num = i[1]
    let p = i[2]
    st+=p.repeat(num)
  }
  return st
};
// @lc code=end

