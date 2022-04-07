/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
	const powerset = [];
  let len = nums.length
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path.slice());
		for (let i = index; i < len; i ++) {
      path.push(nums[i])
      generatePowerset(path, ++index)
      path.pop()
    }
	}

	return powerset;
}
// @lc code=end

