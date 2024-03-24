# Two arrays of numbers

Trevor challenged us with three arrays and function request.

Array 1: [ 1, 3, 3, 6, 6, 7, 9 ]

Array 2: [ 2, 3, 5, 7 ]

Write a function that returns this List:

[1, 2, 5, 6, 6, 9 ]

We can see in this third array that although we input 1, 2, 3, 3, 3, 5, 6, 6, 7, 7, 9 we do not return all of these values. We do not return the values 3 or 7.

What we want to write is a function that checks two arrays of numbers, and will combine them together. This combination of numbers will not include any number that is present in both input arrays. If a number is found in an input array multiple times, it will be included multiple times in the output.
