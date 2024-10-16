// 1. `charAt()`
// 2. `charCodeAt()`
// 3. `concat()`
// 4. `includes()`
// 5. `endsWith()`
// 6. `startsWith()`
// 7. `indexOf()`
// 8. `lastIndexOf()`
// 9. `replace()`
// 10. `slice()`
// 11. `substring()`
// 12. `substr()`
// 13. `split()`
// 14. `toLowerCase()`
// 15. `toUpperCase()`
// 16. `trim()`
// 17. `padStart()`
// 18. `padEnd()`
// 19. `repeat()`
// 20. `valueOf()`
// 21. `match()`





//  1. `charAt()`
// Returns the character at the specified index.


let str = "JavaScript";

//===> Example 1
console.log(str.charAt(0));  //===> Output: "J"

//===> Example 2
console.log(str.charAt(4));  //===> Output: "S"

//===> Example 3
console.log(str.charAt(str.length - 1));  //===> Output: "t"

//===> Example 4
console.log(str.charAt(10));  //===> Output: empty (out of range)

//===> Example 5
console.log("Hello".charAt(2));  //===> Output: "l"



//  2. `charCodeAt()`
// Returns the Unicode value of the character at the specified index.


let str = "JavaScript";

//===> Example 1
console.log(str.charCodeAt(0));  //===> Output: 74 (Unicode for "J")

//===> Example 2
console.log(str.charCodeAt(4));  //===> Output: 83 (Unicode for "S")

//===> Example 3
console.log(str.charCodeAt(str.length - 1));  //===> Output: 116 (Unicode for "t")

//===> Example 4
console.log("A".charCodeAt(0));  //===> Output: 65 (Unicode for "A")

//===> Example 5
console.log("a".charCodeAt(0));  //===> Output: 97 (Unicode for "a")




//  3. `concat()`
// Concatenates two or more strings and returns a new string.


let str1 = "Hello";
let str2 = "World";

//===> Example 1
console.log(str1.concat(" ", str2));  //===> Output: "Hello World"

//===> Example 2
console.log("Good".concat(" ", "morning!"));  //===> Output: "Good morning!"

//===> Example 3
console.log("Java".concat("Script"));  //===> Output: "JavaScript"

//===> Example 4
let str3 = "Everyone";
console.log("Hi ".concat(str3));  //===> Output: "Hi Everyone"

//===> Example 5
console.log("foo".concat("bar", "baz"));  //===> Output: "foobarbaz"




//  4. `includes()`
// Checks if a string contains a specified substring.


let sentence = "I love JavaScript";

//===> Example 1
console.log(sentence.includes("JavaScript"));  //===> Output: true

//===> Example 2
console.log(sentence.includes("Python"));  //===> Output: false

//===> Example 3
console.log("Hello World!".includes("World"));  //===> Output: true

//===> Example 4
console.log("coding".includes("code"));  //===> Output: false

//===> Example 5
let check = "learn, practice, repeat";
console.log(check.includes("practice"));  //===> Output: true




//  5. `endsWith()`
// Checks if a string ends with a specified substring.


let sentence = "JavaScript is amazing";

//===> Example 1
console.log(sentence.endsWith("amazing"));  //===> Output: true

//===> Example 2
console.log(sentence.endsWith("is"));  //===> Output: false

//===> Example 3
console.log("Hello World!".endsWith("!"));  //===> Output: true

//===> Example 4
let filename = "document.pdf";
console.log(filename.endsWith(".pdf"));  //===> Output: true

//===> Example 5
console.log("Java".endsWith("Script"));  //===> Output: false




//  6. `startsWith()`
// Checks if a string starts with a specified substring.


let sentence = "JavaScript is awesome";

//===> Example 1
console.log(sentence.startsWith("JavaScript"));  //===> Output: true

//===> Example 2
console.log(sentence.startsWith("awesome"));  //===> Output: false

//===> Example 3
console.log("Hello World!".startsWith("Hello"));  //===> Output: true

//===> Example 4
console.log("JavaScript".startsWith("Java"));  //===> Output: true

//===> Example 5
console.log("Coding".startsWith("code"));  //===> Output: false




//  7. `indexOf()`
// Returns the index of the first occurrence of a specified substring.


let sentence = "I love JavaScript";

//===> Example 1
console.log(sentence.indexOf("love"));  //===> Output: 2

//===> Example 2
console.log(sentence.indexOf("JavaScript"));  //===> Output: 7

//===> Example 3
console.log(sentence.indexOf("Python"));  //===> Output: -1

//===> Example 4
console.log("Hello, World!".indexOf("World"));  //===> Output: 7

//===> Example 5
let fruit = "apple";
console.log(fruit.indexOf("p"));  //===> Output: 1




//  8. `lastIndexOf()`
// Returns the index of the last occurrence of a specified substring.


let sentence = "I love JavaScript, and JavaScript loves me";

//===> Example 1
console.log(sentence.lastIndexOf("JavaScript"));  //===> Output: 21

//===> Example 2
console.log(sentence.lastIndexOf("love"));  //===> Output: 24

//===> Example 3
console.log(sentence.lastIndexOf("Python"));  //===> Output: -1

//===> Example 4
console.log("banana".lastIndexOf("a"));  //===> Output: 5

//===> Example 5
let str = "the quick brown fox jumps over the lazy dog";
console.log(str.lastIndexOf("the"));  //===> Output: 31




//  9. `replace()`
// Replaces the first occurrence of a substring with another string.


let sentence = "I love JavaScript";

//===> Example 1
console.log(sentence.replace("JavaScript", "coding"));  //===> Output: "I love coding"

//===> Example 2
console.log("hello world".replace("world", "there"));  //===> Output: "hello there"

//===> Example 3
let newSentence = sentence.replace("Java", "Type");
console.log(newSentence);  //===> Output: "I love TypeScript"

//===> Example 4
console.log("I love Java".replace("love", "adore"));  //===> Output: "I adore Java"

//===> Example 5
let greeting = "Hi there!";
console.log(greeting.replace("Hi", "Hello"));  //===> Output: "Hello there!"




//  10. `slice()`
// Extracts a part of a string and returns it as a new string.


let sentence = "JavaScript is awesome";

//===> Example 1
console.log(sentence.slice(0, 10));  //===> Output: "JavaScript"

//===> Example 2
console.log(sentence.slice(4, 10));  //===> Output: "Script"

//===> Example 3
console.log(sentence.slice(-7));  //===> Output: "awesome"

//===> Example 4
console.log("Hello, World!".slice(7, 12));  //===> Output: "World"

//===> Example 5
let str = "abcdef";
console.log(str.slice(2));  //===> Output: "cdef"



// 11. `substring()`
// Returns the characters between two specified indexes in a string.


let str = "JavaScript";

//===> Example 1
console.log(str.substring(0, 4));  //===> Output: "Java"

//===> Example 2
console.log(str.substring(4, 10));  //===> Output: "Script"

//===> Example 3
console.log(str.substring(4));  //===> Output: "Script"

//===> Example 4
console.log("Hello, World!".substring(7, 12));  //===> Output: "World"

//===> Example 5
console.log("TypeScript".substring(4));  //===> Output: "Script"




// 12. `substr()`
// Similar to `substring()`, but the second argument specifies the length of the extracted substring.


let str = "JavaScript";

//===> Example 1
console.log(str.substr(0, 4));  //===> Output: "Java"

//===> Example 2
console.log(str.substr(4, 6));  //===> Output: "Script"

//===> Example 3
console.log(str.substr(4));  //===> Output: "Script"

//===> Example 4
console.log("Hello, World!".substr(7, 5));  //===> Output: "World"

//===> Example 5
let sentence = "Learning JavaScript";
console.log(sentence.substr(9, 10));  //===> Output: "JavaScript"




// 13. `split()`
// Splits a string into an array of substrings based on a specified delimiter.


let str = "apple, banana, cherry";

//===> Example 1
console.log(str.split(", "));  //===> Output: ["apple", "banana", "cherry"]

//===> Example 2
console.log("one two three".split(" "));  //===> Output: ["one", "two", "three"]

//===> Example 3
console.log("abc|def|ghi".split("|"));  //===> Output: ["abc", "def", "ghi"]

//===> Example 4
console.log("a,b,c,d".split(","));  //===> Output: ["a", "b", "c", "d"]

//===> Example 5
console.log("Hello".split(""));  //===> Output: ["H", "e", "l", "l", "o"]




// 14. `toLowerCase()`
// Converts a string to lowercase letters.


let str = "JavaScript";

//===> Example 1
console.log(str.toLowerCase());  //===> Output: "javascript"

//===> Example 2
console.log("HELLO WORLD".toLowerCase());  //===> Output: "hello world"

//===> Example 3
console.log("HELLO, JavaScript!".toLowerCase());  //===> Output: "hello, javascript!"

//===> Example 4
console.log("MixedCase".toLowerCase());  //===> Output: "mixedcase"

//===> Example 5
console.log("STRING".toLowerCase());  //===> Output: "string"




// 15. `toUpperCase()`
// Converts a string to uppercase letters.


let str = "JavaScript";

//===> Example 1
console.log(str.toUpperCase());  //===> Output: "JAVASCRIPT"

//===> Example 2
console.log("hello world".toUpperCase());  //===> Output: "HELLO WORLD"

//===> Example 3
console.log("hello, JavaScript!".toUpperCase());  //===> Output: "HELLO, JAVASCRIPT!"

//===> Example 4
console.log("MixedCase".toUpperCase());  //===> Output: "MIXEDCASE"

//===> Example 5
console.log("string".toUpperCase());  //===> Output: "STRING"




// 16. `trim()`
// Removes whitespace from both sides of a string.


let str = "   Hello World!   ";

//===> Example 1
console.log(str.trim());  //===> Output: "Hello World!"

//===> Example 2
console.log("   JavaScript   ".trim());  //===> Output: "JavaScript"

//===> Example 3
console.log("   ".trim());  //===> Output: ""

//===> Example 4
console.log("NoExtraSpace".trim());  //===> Output: "NoExtraSpace"

//===> Example 5
let sentence = "  Trim the white space  ";
console.log(sentence.trim());  //===> Output: "Trim the white space"




// 17. `padStart()`
// Pads the current string with another string from the start until the resulting string reaches the given length.


let str = "5";

//===> Example 1
console.log(str.padStart(3, "0"));  //===> Output: "005"

//===> Example 2
console.log("123".padStart(6, "0"));  //===> Output: "000123"

//===> Example 3
console.log("AB".padStart(5, "-"));  //===> Output: "AB"

//===> Example 4
console.log("12".padStart(5, "*"));  //===> Output: "***12"

//===> Example 5
let str2 = "42";
console.log(str2.padStart(4, "0"));  //===> Output: "0042"




// 18. `padEnd()`
// Pads the current string with another string from the end until the resulting string reaches the given length.


let str = "5";

//===> Example 1
console.log(str.padEnd(3, "0"));  //===> Output: "500"

//===> Example 2
console.log("123".padEnd(6, "0"));  //===> Output: "123000"

//===> Example 3
console.log("AB".padEnd(5, "-"));  //===> Output: "AB"

//===> Example 4
console.log("12".padEnd(5, "*"));  //===> Output: "12***"

//===> Example 5
let str2 = "42";
console.log(str2.padEnd(4, "0"));  //===> Output: "4200"




// 19. `repeat()`
// Returns a new string with a specified number of copies of an existing string.


let str = "Hello ";

//===> Example 1
console.log(str.repeat(3));  //===> Output: "Hello Hello Hello "

//===> Example 2
console.log("Ha".repeat(5));  //===> Output: "HaHaHaHaHa"

//===> Example 3
console.log("abc".repeat(2));  //===> Output: "abcabc"

//===> Example 4
console.log("! ".repeat(4));  //===> Output: "! ! ! ! "

//===> Example 5
let laugh = "Ha!";
console.log(laugh.repeat(3));  //===> Output: "Ha!Ha!Ha!"




// 20. `valueOf()`
// Returns the primitive value of a `String` object.


let strObj = new String("Hello");

//===> Example 1
console.log(strObj.valueOf());  //===> Output: "Hello"

//===> Example 2
let str = new String("JavaScript");
console.log(str.valueOf());  //===> Output: "JavaScript"

//===> Example 3
console.log(new String("test").valueOf());  //===> Output: "test"

//===> Example 4
let sentence = new String("Learning JavaScript");
console.log(sentence.valueOf());  //===> Output: "Learning JavaScript"

//===> Example 5
console.log(new String("Primitive").valueOf());  //===> Output: "Primitive"




// 21. `match()`
// Retrieves the matches of a string against a regular expression.


let str = "The rain in Spain stays mainly in the plain";

//===> Example 1
console.log(str.match(/ain/g));  //===> Output: ["ain", "ain", "ain"]

//===> Example 2
console.log("123abc456".match(/\d+/g));  //===> Output: ["123", "456"]

//===> Example 3
console.log("hello world".match(/o/g));  //===> Output: ["o", "o"]

//===> Example 4
console.log("JavaScript123".match(/\d+/));  //===> Output: ["123"]

//===> Example 5
console.log("apple, orange, banana".match(/a/g)); //===> Output: ["a", "a", "a", "a", "a", "a"]






