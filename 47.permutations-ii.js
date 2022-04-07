/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	let data = [];
	nums = nums.sort();
	function _permute(curr, remaining) {
		if (!remaining.length) {
			data.push(curr);
			return;
		}
		for (let i = 0; i < remaining.length; i++) {
			if (i > 0 && remaining[i] === remaining[i - 1]) {
				continue;
			} else {
				curr.push(remaining[i]);
				_permute([...curr], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
				curr.pop();
			}
		}
	}
	_permute([], nums);
	return data;
}

// @lc code=end

