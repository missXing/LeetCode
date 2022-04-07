/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
  resArr = new Array(amount+1).fill( 0 ); 
  
  resArr[0] = 1;
  
  for(const coin of coins){
      for( let i = coin ; i <= amount ; i++ ){
          resArr[i] +=  resArr[i - coin ];
      }       
  }
  
  return resArr[ amount ];
};
// @lc code=end

