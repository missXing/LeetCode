/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
    //     // binary search
    //    var start = 1, end = n;
    //    while(start < end){
    //        var mid = Math.floor(start + (end-start) / 2);
    //        if(isBadVersion(mid)){
    //             end = mid; // look on left side of mid
    //        }else{
    //            start = mid+1; // look on the right side of mid
    //        }
    //    }
    //    return start;
        let left = 1
        let right = n
        while(left <= right) {
            let mid = left + right >>> 1
            if (!isBadVersion(mid)) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    };
};
// @lc code=end

