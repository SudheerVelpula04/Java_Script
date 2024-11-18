/*---------------------------------------------math_methods-----------------------------------------------------*/

/*In , the `Math` object provides a collection of methods and properties that allow you to perform mathematical operations. These methods cover a wide range of operations such as rounding, finding maximum and minimum values, generating random numbers, etc. Below is a summary of commonly used `Math` methods in javaScript*/

//    1. Math.abs()
/*- Returns the absolute (positive) value of a number.*/
    
console.log(Math.abs(-5));  // 5
console.log(Math.abs(3));   // 3


//2. Math.ceil()
/*- Rounds a number **up** to the nearest integer.*/


console.log(Math.ceil(4.2));  // 5
console.log(Math.ceil(-4.2)); // -4


//3. Math.floor()
/*- Rounds a number **down** to the nearest integer.*/


console.log(Math.floor(4.9));  // 4
console.log(Math.floor(-4.9)); // -5


//4. Math.round()
/*- Rounds a number to the nearest integer.*/


console.log(Math.round(4.5));  // 5
console.log(Math.round(4.4));  // 4
console.log(Math.round(-4.5)); // -4


//5. Math.max()
/*- Returns the largest number from a set of numbers.*/


console.log(Math.max(1, 3, 2, 5));  // 5
console.log(Math.max(-1, -3, -2));  // -1


//6. Math.min()
/*- Returns the smallest number from a set of numbers.*/


console.log(Math.min(1, 3, 2, 5));  // 1
console.log(Math.min(-1, -3, -2));  // -3


//7. Math.pow()
/*- Returns the base raised to the power of the exponent (`base^exponent`).*/


console.log(Math.pow(2, 3));  // 8 (2^3)
console.log(Math.pow(5, 2));  // 25 (5^2)


//8. Math.sqrt()
/*- Returns the square root of a number.*/


console.log(Math.sqrt(9));   // 3
console.log(Math.sqrt(25));  // 5
console.log(Math.sqrt(2));   // 1.4142135623730951 (approx)


//9. Math.random()
/*- Returns a pseudo-random floating-point number between `0` (inclusive) and `1` (exclusive).*/


console.log(Math.random());  // A random number between 0 and 1


//10. Math.sin(), Math.cos(), Math.tan()
/*- These methods return the **sine**, **cosine**, and **tangent** of an angle (in radians).*/


console.log(Math.sin(Math.PI / 2));  // 1 (sine of 90°)
console.log(Math.cos(Math.PI));      // -1 (cosine of 180°)
console.log(Math.tan(Math.PI / 4));  // 1 (tangent of 45°)


//11. Math.log()
/*- Returns the natural logarithm (base `e`) of a number.*/


console.log(Math.log(1));   // 0 (log(1) is always 0)
console.log(Math.log(Math.E));  // 1 (log(e) = 1)


//12. Math.exp()
/*- Returns `e` raised to the power of the given number (i.e., `Math.E^x`).*/


console.log(Math.exp(1));  // 2.718281828459045 (e^1)
console.log(Math.exp(0));  // 1 (e^0 = 1)


//13. Math.PI
/*- Returns the constant value of `π` (pi), approximately 3.14159.*/


console.log(Math.PI);  // 3.141592653589793


//14. Math.E
/*- Returns Euler's number `e` (approximately 2.718).*/


console.log(Math.E);  // 2.718281828459045


//15. Math.trunc()
/*- Removes the decimal part of a number, effectively rounding down towards zero.*/


console.log(Math.trunc(4.9));   // 4
console.log(Math.trunc(-4.9));  // -4


//16. Math.sign()
/*- Returns the sign of a number, indicating whether the number is positive, negative, or zero.*/


console.log(Math.sign(3));   // 1 (positive number)
console.log(Math.sign(-3));  // -1 (negative number)
console.log(Math.sign(0));   // 0 (zero)
console.log(Math.sign('5')); // 1 (string is converted to number)


//17. Math.log10()
/*- Returns the base-10 logarithm of a number.*/


console.log(Math.log10(100)); // 2 (log10(100) = 2)
console.log(Math.log10(1000)); // 3 (log10(1000) = 3)


//18. Math.log2()
/*- Returns the base-2 logarithm of a number.*/


console.log(Math.log2(8));    // 3 (log2(8) = 3)
console.log(Math.log2(16));   // 4 (log2(16) = 4)




/*Example: **Generating a Random Integer Between Two Values**
To generate a random integer between two numbers (inclusive):*/


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));  // Random integer between 1 and 100



/*Summary:
The `Math` object in javaScript provides powerful mathematical functions and constants, such as:
- Basic math operations: `abs()`, `ceil()`, `floor()`, `round()`, `pow()`, `sqrt()`.
- Trigonometry: `sin()`, `cos()`, `tan()`.
- Logarithms and Exponentiation**: `log()`, `exp()`, `log10()`, `log2()`.
- Constants: `Math.PI`, `Math.E`.
- Randomization: `random()`.
- Sign and truncation: `sign()`, `trunc()`.

Let me know if you need more examples or clarification!*/