let fib1=0;
let fib2=1;
for(i=0;i<=20;i++){
  console.log(fib1)
  let newFib=fib1+fib2;
  fib1=fib2;
  fib2=newFib
}