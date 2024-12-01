/*----------------------------------------1.Using a Simple For Loop-------------------------------------------------*/
function isPrime(num) {
    if (num <= 1) return false; // 1 and less are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }
    return true; // No divisors found, it's prime
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
/*----------------------------------------2.Optimized Approach (Skipping Even Numbers)-------------------------------------------------*/
function isPrime(num) {
    if (num <= 1) return false; // 1 and less are not prime
    if (num === 2) return true; // 2 is prime
    if (num % 2 === 0) return false; // No even numbers greater than 2 are prime
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // Divisible by an odd number
    }
    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
/*--------------------------------------------------3.Using Recursion------------------------------------------------------------------*/
function isPrime(num, divisor = 2) {
    if (num <= 1) return false; // 1 and less are not prime numbers
    if (divisor > Math.sqrt(num)) return true; // No divisors found, it's prime
    if (num % divisor === 0) return false; // Found a divisor, so it's not prime
    return isPrime(num, divisor + 1); // Check the next divisor
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

/*-----------------------------------------4. Using Array Methods (every method)---------------------------------------------------------*/
function isPrime(num) {
    if (num <= 1) return false; // 1 and less are not prime numbers
    return [...Array(num - 2).keys()].every(i => num % (i + 2) !== 0);
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
/*---------------------------5. Using the Sieve of Eratosthenes (for finding all primes up to a limit)----------------------------------*/
function sieveOfEratosthenes(limit) {
    let primes = new Array(limit + 1).fill(true);
    primes[0] = primes[1] = false; // 0 and 1 are not prime numbers
    
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primes[j] = false; // Mark all multiples of i as non-prime
            }
        }
    }

    return primes.map((isPrime, index) => isPrime ? index : -1).filter(x => x !== -1);
}

console.log(sieveOfEratosthenes(30));  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


/*-----------------------------------------6. Using Set (Optimization for Checking Multiple Numbers)------------------------------------------*/
function generatePrimes(limit) {
    let primes = new Set();
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.add(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primeSet = generatePrimes(50);
console.log(primeSet.has(29)); // true
console.log(primeSet.has(30)); // false
/*-----------------------------------------7. Using while Loop (Alternative to for Loop)---------------------------------------------------------*/
function isPrime(num) {
    if (num <= 1) return false; // 1 and less are not prime numbers
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) return false;
        i++;
    }
    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


/*-------------------------------------------------------8.for loop and if and else if statement-----------------------------------------------------------*/
let num=15;
if(num==1){
  console.log(`${num} is a prime are composite number`)
}else if(num<1){
  console.log(`${num} is not a prime number`)
}else{
  //num 15
  for(let i=2;i<num;i++){
    //15%2 = R:1
    //15/2 = Q:7
    if(num%i==0){
      var res=`${num} is not a prime number`
    }else{
      var res=`${num} is  a prime number`
    }
  }
  console.log(res)
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
for (let i = 2; i <= 100; i++) {
    let isPrime = true;  // Assume i is prime initially
  
    // Check if i is divisible by any number from 2 to the square root of i
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {  // If i is divisible by j, it's not prime
        isPrime = false;
        break;
      }
    }
  
    // If isPrime is still true, then i is prime, so print it
    if (isPrime) {
      console.log(i);
    }
  }
  /*--------------------------------------------------------------------------------------------------------------------------------------------------*/
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;  // Assume i is prime initially
  
    // Check if i is divisible by any number from 2 to i-1
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {  // If i is divisible by j, it's not prime
        isPrime = false;
        break;
      }
    }
  
    // If isPrime is still true, then i is prime, so print it
    if (isPrime) {
      console.log(i);
    }
  }
    /*----------------------------------------------------------------------butterfly patten----------------------------------------------------------------------------*/
    let n=5;
for(i=1;i<=n;i++){
  let line='';
  for(j=1;j<=i;j++){
    line += '*';
  }
  let space=2*(n-i)
  for(k=1;k<=space;k++){
    line +=' '
  }
  for(j=1;j<=i;j++){
    line +='*'
  }
  // console.log(space)
  console.log(line)
}
for(i=n;i>0;i--){
  let line='';
  for(j=1;j<=i;j++){
    line += '*';
  }
  let space=2*(n-i)
  for(k=1;k<=space;k++){
    line +=' '
  }
  for(j=1;j<=i;j++){
    line +='*'
  }
  // console.log(space)
  console.log(line)
}

  
  