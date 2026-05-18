/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = r = 0;
    for (let l = r = 0; r < nums.length; r++){
        if(nums[r] !== 0){
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
        }
        // 遇到0的时候r动l不动
    }
    return nums
};