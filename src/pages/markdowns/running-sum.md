--- 
title: 'running-sum'
date: '20-06-2020'
---


Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]


Solution:

```js

const nums = [1, 2, 3, 4]

var runningSum = function(nums) {
  for (i=1; i<nums.length; i++) {
    // as the first one starts from num[1], so the num[0] gets to print first
    // the second run, num[2](2) += num[1](1) => num[2] = 3, and it gets print 3
    // the third run, num[3](3) += num[2](3) => it prints 6
    // and etc...
    nums[i] += nums[i-1]
  }

  return nums
} 

Output: [1,3,6,10]

```
