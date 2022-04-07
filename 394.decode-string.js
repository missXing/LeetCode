/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const stack = []

  for (const char of s ) {
    if (char !== ']') {
      stack.push(char)
      continue
    }

    let str = ''
    let curr = stack.pop()
    while(curr !== '[') {
      str = curr + str
      curr = stack.pop()
    }

    let num = ''
    curr = stack.pop()
    while(!Number.isNaN(Number(curr))) {
      num = curr + num
      curr = stack.pop()
    }

    stack.push(curr)

    stack.push(str.repeat(Number(num)))
  }
  return stack.join('')
};
// @lc code=end

