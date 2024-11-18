/* provides several built-in methods and properties for working with numbers, which are part of the `Number` object. These methods allow you to perform a variety of mathematical operations, such as rounding, parsing, checking for finite numbers, and converting between number types.*/

/*-------------------------------------- number methods -----------------------------------------------*/



/*1. `Number.isInteger(value)`
- Returns `true` if the given value is an integer (i.e., no fractional part), and `false` otherwise.*/


console.log(Number.isInteger(4));     // true
console.log(Number.isInteger(4.5));   // false
console.log(Number.isInteger('4'));   // false


/*2. `Number.isFinite(value)`
- Returns `true` if the given value is a finite number (i.e., not `Infinity`, `-Infinity`, or `NaN`).*/


console.log(Number.isFinite(100));    // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));      // false
console.log(Number.isFinite('100'));   // false


/*3. `Number.isNaN(value)`
- Returns `true` if the given value is `NaN` (Not-a-Number).*/


console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(10));       // false
console.log(Number.isNaN('string')); // false


/*4. `Number.parseInt(value, radix)`
- Converts the given value into an integer, using the specified `radix` (base). The `radix` argument is optional but recommended, and can be between 2 and 36.*/


console.log(Number.parseInt('10'));      // 10
console.log(Number.parseInt('1010', 2)); // 10 (binary to decimal)
console.log(Number.parseInt('10.5'));    // 10
console.log(Number.parseInt('abc'));     // NaN


/*5. `Number.parseFloat(value)`
- Converts the given value into a floating-point number.*/


console.log(Number.parseFloat('10.5'));  // 10.5
console.log(Number.parseFloat('10.99abc'));  // 10.99
console.log(Number.parseFloat('abc'));   // NaN


/*6. `Number.toFixed(digits)`
- Returns a string representing the number rounded to a specified number of decimal places (`digits`). It also formats the number as a string.*/


let num1 = 3.14159;
console.log(num1.toFixed(2));   // "3.14"
console.log(num1.toFixed(4));   // "3.1416"
console.log(num1.toFixed(0));   // "3"


/*7. `Number.toPrecision(precision)`
- Returns a string representing the number to the specified precision (total number of digits). It may round or truncate the number.*/


let num2 = 123.456;
console.log(num2.toPrecision(4));  // "123.5"
console.log(num2.toPrecision(6));  // "123.456"
console.log(num2.toPrecision(2));  // "1.2e+2" (scientific notation)


/*8. `Number.toString([radix])`
- Returns a string representing the number in the specified base (radix). The `radix` can be between 2 and 36.*/


let num3 = 255;
console.log(num3.toString(16));  // "ff" (hexadecimal)
console.log(num3.toString(2));   // "11111111" (binary)
console.log(num3.toString(8));   // "377" (octal)
console.log(num3.toString(10));  // "255" (decimal)


/*9. `Number.isSafeInteger(value)`
- Returns `true` if the given value is a safe integer. Safe integers are integers that can be represented exactly in JavaScript (i.e., between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`).*/


console.log(Number.isSafeInteger(9007199254740991));  // true
console.log(Number.isSafeInteger(9007199254740992));  // false
console.log(Number.isSafeInteger('10'));              // false


/*10. `Number.MAX_VALUE`
- Represents the largest possible positive number in JavaScript.*/


console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308


/*11. `Number.MIN_VALUE`
- Represents the smallest possible positive number in JavaScript (greater than 0).*/


console.log(Number.MIN_VALUE);  // 5e-324


/*12. `Number.NaN`
- Represents the special "Not-a-Number" value in JavaScript, which indicates an invalid or unrepresentable number.*/


console.log(Number.NaN);  // NaN


/*13. `Number.POSITIVE_INFINITY`
- Represents positive infinity in JavaScript. It is returned when a number exceeds the upper limit.*/


console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(1 / 0);                      // Infinity


/*14. `Number.NEGATIVE_INFINITY`
- Represents negative infinity in JavaScript. It is returned when a number is less than the lower limit.*/


console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(-1 / 0);                    // -Infinity


/*15. `Math.abs()`
- Returns the absolute value of a number (removes the sign).*/


console.log(Math.abs(-10));  // 10
console.log(Math.abs(5));    // 5
console.log(Math.abs(0));    // 0


/*16. `Math.ceil()`
- Rounds a number up to the nearest integer.*/


console.log(Math.ceil(4.2));  // 5
console.log(Math.ceil(-4.2)); // -4


/*17. `Math.floor()`
- Rounds a number down to the nearest integer.*/


console.log(Math.floor(4.9));  // 4
console.log(Math.floor(-4.9)); // -5


/*18. `Math.round()`
- Rounds a number to the nearest integer.*/


console.log(Math.round(4.5));   // 5
console.log(Math.round(4.4));   // 4
console.log(Math.round(-4.5));  // -4


/*19. `Math.random()`
- Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).*/


console.log(Math.random());  // A random number between 0 and 1


/*20. `Math.max()`
- Returns the largest of the zero or more numbers provided.*/


console.log(Math.max(1, 3, 2, 5));  // 5


/*21. `Math.min()`
- Returns the smallest of the zero or more numbers provided.*/


console.log(Math.min(1, 3, 2, 5));  // 1


/*22. `Math.pow()`
- Returns the base raised to the power of the exponent (`base^exponent`).*/


console.log(Math.pow(2, 3));  // 8
console.log(Math.pow(5, 2));  // 25


/*23. `Math.sqrt()`
- Returns the square root of a number.*/


console.log(Math.sqrt(9));   // 3
console.log(Math.sqrt(25));  // 5


/*24. `Math.log()`
- Returns the natural logarithm (base `e`) of a number.*/


console.log(Math.log(1));    // 0
console.log(Math.log(Math.E));  // 1




/*Summary:
The `Number` object and `Math` methods in JavaScript provide a wide range of functionalities for working with numbers. These methods help with rounding, checking types, parsing numbers, finding min/max values, handling infinite values, and more. Understanding these methods is crucial for performing accurate and efficient mathematical operations in JavaScript.

Let me know if you need more details or examples!*/