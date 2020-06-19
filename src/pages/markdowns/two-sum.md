--- 
title: 'two-sum'
date: '19-06-2020'
---

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]


Solution:
```js
var twoSum = function(nums, target) {
  // loop through the numbers
    for (let i = 0; i < nums.length; i++) {
      // for each number, check if it's equal to target - the next number
        for (let j = i+1; j <nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                // if yes, then return the two numbers
                return [i, j]
            }
        }
    }
};
```