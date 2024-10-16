//charAt()


let str="string"
console.log(str.charAt(0))/// it will find a charactor of string.

let str1="string1"
console.log(str1.length-1)// it will index length-1

console.log("hello".charAt(2))


//charCodeAt()


let str2="strig2"
console.log(str2.charCodeAt(5))

//slice()
let str3 = "abcdef";
console.log(str3.slice(2)); 

//substr()
//Similar to `substring()`, but the second argument specifies the length of the extracted substring.


let str = "JavaScript";

//===> Example 1
console.log(str.substr(0, 4));// ===> Output: "Java"

//===> Example 2
console.log(str.substr(4, 6)); // ===> Output: "Script"

//===> Example 3
console.log(str.substr(4)); // ===> Output: "Script"

//===> Example 4
console.log("Hello, World!".substr(7, 5));//  ===> Output: "World"

//===> Example 5
let sentence = "Learning JavaScript";
console.log(sentence.substr(9, 10)); // ===> Output: "JavaScript"

    