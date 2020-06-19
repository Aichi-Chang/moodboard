---
title: 'search-position',
date: '19-06-2020'
---

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0


Solution:

```js
var searchInsert = function(nums, target) {
    return nums.includes(target) ? nums.indexOf(target) : nums.filter(n => {
        return n < target
    }).length
};
```

With Binary Search:

```js
Input: [1,3,5,6], 4
Output: 2

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // right = 3
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); 
        // mid = 1, nums[mid] = 3
        // the sedond run mid will be (2 + 3) / 2 = 2
        if (nums[mid] < target) {
            left = mid + 1;
            // left = 1 + 1 = 2
         } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
          // the second run mid will be (2 + 3) / 2 = 2
          // and nums[2] === targer, so return mid
            return mid;
        }
    }
    
    return left;
};
```