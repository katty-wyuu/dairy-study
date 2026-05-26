/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 滑动窗口
    const map = new Map();
    let max = 0;
    for (let l = 0, r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        }
        map.set(s[r], r)
        max = Math.max(max, r - l + 1)

    }
    return max
};