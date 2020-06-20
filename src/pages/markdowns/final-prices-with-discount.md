---
title: 'final-prices-with-discount',
date: '20-06-2020'
---

Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

Example 1:

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation: 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
For items 3 and 4 you will not receive any discount at all.
Example 2:

Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
Example 3:

Input: prices = [10,1,1,6]
Output: [9,0,1,6]

Solution:
```js
prices = [8,4,6,2,3]

var finalPrices = function(prices) {
  const arr = []
  for (i=0; i<prices.length; i++) {
    const cur = prices[i]
    // first run, there is nothting in arr, so arr.length != true, we then go directly push the first i to our arr, CURRENT NUM IS 8

    // the second run, after arr.push(i), arr.length === true, we then check the next number in the prices is larget then our current number, CURRENT NUM IS 4, prices[0] === 8, so 8 >= 4

    // the third run, CURRENT NUM IS 6, arr[0] now is 1, prices[1] === 4 is not larger than 6, so we leave it, arr = [1] 
    // THIS REMAINING NUMBER IN THE ARRAY WILL TRIGER OUR WHILE LOOP TO RUN AGAIN AND IT WILL FIND THE NEXT INTERGER THAT IS SMALLER THEN 4

    // as the last one does not pass, CURRENT NUM IS 2, arr[2-1] === 1, prices[2] === 6, 6 is larger then 2

    // but our arr still have [1] inside, so this function will run again, CURRENT NUM IS STILL 2, arr[0] = 1, prices[1] = 4, 4 >= 2
    while(arr.length && prices[arr[arr.length - 1]] >= cur) {
      // prices[0](8) -= 4 => 4, so the first position in our prices will be changed from 8 to 4
      // prices[2](6) -= 2 => 4, so the second position will now be 4
      // prices[1](4) -= 2 => 2, and this will change our prices[1]'s number to 2!
      prices[arr.pop()] -= cur
    }
    // first push the price with out any discount
    // and push again, the i now is 1 (arr = [1])
    // and push again, i is 2 (arr = [1, 2])
    arr.push(i)
  }
  return prices

}
```