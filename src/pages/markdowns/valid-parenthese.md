---
title: 'valid-parenthese'
date: '19-06-2020'
---

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true


Solution:

 let's say we have to verify "{[]}" (this is our input "s"). The way this algo goes about it is the following:

Iterate over all characters of the input;
IF we encounter an open bracket, then we push it to our temporary array
- 1. iteration: stack = "}"
- 2. iteration: stack = "}]"
ELSE (we encounter a closed bracket) we get the last element from the stack (pop()) and check if it is the counterpart of the current character at hand
- 3. iteration: stack = "}" AND "]" (pop()) matches "]" (current character)

So the idea is to build a parallel structure which then has to be a mirror of the "other half" (cause they have to come in pairs, right?)

```js

var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                console.log(c,stack)
                break;
            case '[': stack.push(']');
                console.log(stack)
                break;
            case '{': stack.push('}');
                console.log(stack)
                break;
            default:
                if (c !== stack.pop()) {
                    console.log(stack)
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};
```

