 
/*--------------------------------------------------Array Methods-----------------------------------------------------*/
//  1. **`push()`**
/*- **Adds one or more elements to the end of an array.***/

    
let arr1 = [1, 2];
arr1.push(3); // [1, 2, 3]

let arr2 = ['a', 'b'];
arr2.push('c', 'd'); // ['a', 'b', 'c', 'd']

let arr3 = [true, false];
arr3.push(true); // [true, false, true]

let arr4 = [];
arr4.push(1); // [1]

let arr5 = [1, 2, 3];
arr5.push(4, 5, 6); // [1, 2, 3, 4, 5, 6]

let arr6 = ['apple'];
arr6.push('banana', 'cherry'); // ['apple', 'banana', 'cherry']
 

//   2. **`pop()`**
/*- **Removes the last element from an array.**/

    
let arr1 = [1, 2, 3];
arr1.pop(); // [1, 2]

let arr2 = ['a', 'b', 'c'];
arr2.pop(); // ['a', 'b']

let arr3 = [true, false, true];
arr3.pop(); // [true, false]

let arr4 = [100, 200];
arr4.pop(); // [100]

let arr5 = ['apple', 'banana', 'cherry'];
arr5.pop(); // ['apple', 'banana']

let arr6 = [1, 2];
arr6.pop(); // [1]
 

//   3. **`shift()`**
/*- **Removes the first element from an array.***/

    
let arr1 = [1, 2, 3];
arr1.shift(); // [2, 3]

let arr2 = ['a', 'b', 'c'];
arr2.shift(); // ['b', 'c']

let arr3 = [true, false, true];
arr3.shift(); // [false, true]

let arr4 = [100, 200];
arr4.shift(); // [200]

let arr5 = ['apple', 'banana', 'cherry'];
arr5.shift(); // ['banana', 'cherry']

let arr6 = [1, 2];
arr6.shift(); // [2]
 

//   4. **`unshift()`**
/*- **Adds one or more elements to the beginning of an array.**/

    
let arr1 = [1, 2];
arr1.unshift(0); // [0, 1, 2]

let arr2 = ['b', 'c'];
arr2.unshift('a'); // ['a', 'b', 'c']

let arr3 = [false, true];
arr3.unshift(true); // [true, false, true]

let arr4 = [200];
arr4.unshift(100); // [100, 200]

let arr5 = ['banana', 'cherry'];
arr5.unshift('apple'); // ['apple', 'banana', 'cherry']

let arr6 = [2];
arr6.unshift(1); // [1, 2]
 

//   5. **`concat()`**
/*- **Merges two or more arrays.**/

    
let arr1 = [1, 2];
let arr2 = [3, 4];
let result1 = arr1.concat(arr2); // [1, 2, 3, 4]

let arr3 = ['a'];
let arr4 = ['b', 'c'];
let result2 = arr3.concat(arr4); // ['a', 'b', 'c']

let arr5 = [true];
let arr6 = [false, true];
let result3 = arr5.concat(arr6); // [true, false, true]

let arr7 = [100];
let arr8 = [200, 300];
let result4 = arr7.concat(arr8); // [100, 200, 300]

let arr9 = ['apple'];
let arr10 = ['banana', 'cherry'];
let result5 = arr9.concat(arr10); // ['apple', 'banana', 'cherry']

let arr11 = [1];
let arr12 = [2, 3, 4];
let result6 = arr11.concat(arr12); // [1, 2, 3, 4]
 

//   6. **`slice()`**
/*- **Returns a shallow copy of a portion of an array.**/

    
let arr1 = [1, 2, 3, 4];
let result1 = arr1.slice(1, 3); // [2, 3]

let arr2 = ['a', 'b', 'c', 'd'];
let result2 = arr2.slice(0, 2); // ['a', 'b']

let arr3 = [true, false, true, false];
let result3 = arr3.slice(2); // [true, false]

let arr4 = [100, 200, 300, 400];
let result4 = arr4.slice(1, -1); // [200, 300]

let arr5 = ['apple', 'banana', 'cherry', 'date'];
let result5 = arr5.slice(2); // ['cherry', 'date']

let arr6 = [1, 2, 3, 4, 5];
let result6 = arr6.slice(3); // [4, 5]
 

//   7. **`splice()`**
/*- **Adds/removes items to/from an array.**/

    
let arr1 = [1, 2, 3, 4];
arr1.splice(1, 2); // [1, 4]

let arr2 = ['a', 'b', 'c', 'd'];
arr2.splice(2, 1); // ['a', 'b', 'd']

let arr3 = [true, false, true];
arr3.splice(1, 0, false); // [true, false, false, true]

let arr4 = [100, 200, 300];
arr4.splice(2, 0, 400); // [100, 200, 400, 300]

let arr5 = ['apple', 'banana'];
arr5.splice(1, 1, 'cherry'); // ['apple', 'cherry']

let arr6 = [1, 2, 3];
arr6.splice(1, 1, 4, 5); // [1, 4, 5, 3]
 

//   8. **`join()`**
/*- **Joins all elements of an array into a string.**/

    
let arr1 = [1, 2, 3];
let result1 = arr1.join('-'); // '1-2-3'

let arr2 = ['a', 'b', 'c'];
let result2 = arr2.join(','); // 'a,b,c'

let arr3 = [true, false];
let result3 = arr3.join(' '); // 'true false'

let arr4 = [100, 200];
let result4 = arr4.join('|'); // '100|200'

let arr5 = ['apple', 'banana', 'cherry'];
let result5 = arr5.join(' and '); // 'apple and banana and cherry'

let arr6 = [1, 2, 3];
let result6 = arr6.join(''); // '123'
 

//  9. **`reverse()`**
/*- **Reverses the order of the elements in an array.**/

    
let arr1 = [1, 2, 3];
arr1.reverse(); // [3, 2, 1]

let arr2 = ['a', 'b', 'c'];
arr2.reverse(); // ['c', 'b', 'a']

let arr3 = [true, false];
arr3.reverse(); // [false, true]

let arr4 = [100, 200, 300];
arr4.reverse(); // [300, 200, 100]

let arr5 = ['apple', 'banana', 'cherry'];
arr5.reverse(); // ['cherry', 'banana', 'apple']

let arr6 = [1, 2, 3, 4];
arr6.reverse(); // [4, 3, 2, 1]
 

//  10. **`sort()`**
/*- **Sorts the elements of an array.**/

    
let arr1 = [3, 1, 2];
arr1.sort(); // [1, 2, 3]

let arr2 = ['b', 'a', 'c'];
arr2.sort(); // ['a', 'b', 'c']

let arr3 = [true, false];
arr3.sort(); // [false, true]

let arr4 = [300, 100, 200];
arr4.sort(); // [100, 200, 300]

let arr5 = ['banana', 'apple', 'cherry'];
arr5.sort(); // ['apple', 'banana', 'cherry']

let arr6 = [1, 3, 2];
arr6.sort((a, b) => b - a); // [3, 2, 1]
 

//  11. **`indexOf()`**
/*- **Returns the first index of a specified element.**/

    
let arr1 = [1, 2, 3, 2];
arr1.index
 

//  12. **`lastIndexOf()`**
/*- **Purpose**: Returns the last index of a specified element.
- **Returns**: The index, or -1 if the element is not found.*/

    
let arr1 = [1, 2, 3, 2];
arr1.lastIndexOf(2); // 3

let arr2 = ['a', 'b', 'a'];
arr2.lastIndexOf('a'); // 2

let arr3 = [true, false, true];
arr3.lastIndexOf(true); // 2

let arr4 = [100, 200, 100];
arr4.lastIndexOf(100); // 2

let arr5 = ['apple', 'banana', 'apple'];
arr5.lastIndexOf('apple'); // 2

let arr6 = [1, 2, 3, 4];
arr6.lastIndexOf(5); // -1 (not found)
 

 

//  13. **`includes()`**
/*- **Purpose**: Checks if an array contains a specified element.
- **Returns**: `true` or `false`.*/

    
let arr1 = [1, 2, 3];
arr1.includes(2); // true

let arr2 = ['a', 'b', 'c'];
arr2.includes('b'); // true

let arr3 = [true, false];
arr3.includes(true); // true

let arr4 = [100, 200];
arr4.includes(300); // false

let arr5 = ['apple', 'banana'];
arr5.includes('banana'); // true

let arr6 = [1, 2, 3];
arr6.includes(5); // false
 

 

//  14. **`find()`**
/*- **Purpose**: Returns the first element that satisfies a provided function.
- **Returns**: The value of the first element that passes the test.*/

    
let arr1 = [1, 2, 3];
arr1.find(el => el > 1); // 2

let arr2 = ['a', 'b', 'c'];
arr2.find(el => el === 'b'); // 'b'

let arr3 = [true, false];
arr3.find(el => el === false); // false

let arr4 = [100, 200];
arr4.find(el => el > 150); // 200

let arr5 = ['apple', 'banana'];
arr5.find(el => el.length > 5); // 'banana'

let arr6 = [1, 2, 3];
arr6.find(el => el > 3); // undefined
 

 

//  15. **`findIndex()`**
/*- **Purpose**: Returns the index of the first element that satisfies a provided function.
- **Returns**: The index, or -1 if no element is found.*/

    
let arr1 = [1, 2, 3];
arr1.findIndex(el => el > 1); // 1

let arr2 = ['a', 'b', 'c'];
arr2.findIndex(el => el === 'b'); // 1

let arr3 = [true, false];
arr3.findIndex(el => el === false); // 1

let arr4 = [100, 200];
arr4.findIndex(el => el > 150); // 1

let arr5 = ['apple', 'banana'];
arr5.findIndex(el => el.length > 5); // 1

let arr6 = [1, 2, 3];
arr6.findIndex(el => el > 3); // -1 (not found)
 

 

//  16. **`filter()`**
/*- **Purpose**: Creates a new array with all elements that pass a test function.
- **Returns**: A new array with the filtered elements.*/

    
let arr1 = [1, 2, 3];
arr1.filter(el => el > 1); // [2, 3]

let arr2 = ['a', 'b', 'c'];
arr2.filter(el => el === 'b'); // ['b']

let arr3 = [true, false];
arr3.filter(el => el === false); // [false]

let arr4 = [100, 200, 300];
arr4.filter(el => el > 150); // [200, 300]

let arr5 = ['apple', 'banana', 'cherry'];
arr5.filter(el => el.length > 5); // ['banana', 'cherry']

let arr6 = [1, 2, 3, 4];
arr6.filter(el => el % 2 === 0); // [2, 4]
 

 

//  17. **`map()`**
/*- **Purpose**: Creates a new array with the results of calling a function on every element.
- **Returns**: A new array with transformed elements.*/

    
let arr1 = [1, 2, 3];
arr1.map(el => el * 2); // [2, 4, 6]

let arr2 = ['a', 'b', 'c'];
arr2.map(el => el.toUpperCase()); // ['A', 'B', 'C']

let arr3 = [true, false];
arr3.map(el => !el); // [false, true]

let arr4 = [100, 200];
arr4.map(el => el / 2); // [50, 100]

let arr5 = ['apple', 'banana'];
arr5.map(el => el.length); // [5, 6]

let arr6 = [1, 2, 3, 4];
arr6.map(el => el + 10); // [11, 12, 13, 14]
 

 

//  18. **`reduce()`**
/*- **Purpose**: Executes a reducer function on each element, resulting in a single value.
- **Returns**: The reduced value.*/

    
let arr1 = [1, 2, 3];
arr1.reduce((acc, el) => acc + el, 0); // 6

let arr2 = [100, 200, 300];
arr2.reduce((acc, el) => acc * el, 1); // 6000000

let arr3 = [true, true, false];
arr3.reduce((acc, el) => acc && el); // false

let arr4 = ['a', 'b', 'c'];
arr4.reduce((acc, el) => acc + el); // 'abc'

let arr5 = [1, 2, 3, 4];
arr5.reduce((acc, el) => acc - el); // -8

let arr6 = [10, 20, 30];
arr6.reduce((acc, el) => acc + el, 100); // 160
 

 

//  19. **`reduceRight()`**
/*- **Purpose**: Executes a reducer function on each element, from right to left.
- **Returns**: The reduced value.*/

    
let arr1 = [1, 2, 3];
arr1.reduceRight((acc, el) => acc + el, 0); // 6

let arr2 = [100, 200, 300];
arr2.reduceRight((acc, el) => acc * el, 1); // 6000000

let arr3 = [true, true, false];
arr3.reduceRight((acc, el) => acc && el); // false

let arr4 = ['a', 'b', 'c'];
arr4.reduceRight((acc, el) => acc + el); // 'cba'

let arr5 = [1, 2, 3, 4];
arr5.reduceRight((acc, el) => acc - el); // 2

let arr6 = [10, 20, 30];
arr6.reduceRight((acc, el) => acc + el, 100); // 160



//  20. **`some()`**
/*- **Purpose**: Checks if at least one element in the array passes the test.
- **Returns**: `true` or `false`.*/

    
let arr1 = [1, 2, 3];
arr1.some(el => el > 2); // true

let arr2 = ['a', 'b', 'c'];
arr2.some(el => el === 'b'); // true

let arr3 = [true, false];
arr3.some(el => el === false); // true

let arr4 = [100, 200];
arr4.some(el => el < 100); // false

let arr5 = ['apple', 'banana'];
arr5.some(el => el.length > 5); // true

let arr6 = [1, 2, 3, 4];
arr6.some(el => el === 5); // false
 

 

//  21. **`every()`**
/*- **Purpose**: Checks if all elements in the array pass the test.
- **Returns**: `true` or `false`.*/

    
let arr1 = [1, 2, 3];
arr1.every(el => el > 0); // true

let arr2 = ['a', 'b', 'c'];
arr2.every(el => typeof el === 'string'); // true

let arr3 = [true, true];
arr3.every(el => el === true); // true

let arr4 = [100, 200];
arr4.every(el =>






    function(){
        var x=99;
        var y=x/4
        return y conv()
    }
console.log(x , "rgfgbf" conv())