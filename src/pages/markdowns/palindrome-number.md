--- 
title: 'palindrome-number'
date: '19-06-2020'
---

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Solution:

```js
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    } else {
      const arr = x.toString()
    return arr === arr.split('').reverse().join('') ? true : false  
    }
    
};
```

```py
def isPalindrome(self, num):
	#negatives can't be palindromes cause of their minus sign
    if num < 0: return False

    """
    get the reversed number (the number but its digits reversed)
    we do this by 'popping' the number's last digit
    and then 'appending' that last digit to rev_num
    we keep doing this until all num's digits have been popped, which happens when num becomes 0
	"""
    original_num = num
    rev_num = 0
	
	#each line inside the while loop below does a neat math trick, try them w/ pencil & paper to understand them
    while num > 0:
      #first line gets last digit from num, second line actually removes the last digit
	  #e.g. 142 becomes 14 after we 'pop' the 2, then we store that 2 into last_digit
	  #effectively we've just popped the last digit from num and saved it
      last_digit = num % 10
      num = num // 10

      #append last digit we just popped to right of rev_num, e.g. 12 becomes 125 after appending 5
      rev_num = rev_num*10 + last_digit
    
	#once the while loop is done, rev_num represents the actual reversed number we wanted
	#in below code, if they match, its a palindrome, since palindromes are symmetrical!
    return original_num == rev_num
    ```