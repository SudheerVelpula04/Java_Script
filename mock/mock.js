

//prime number print 1 to  100
for(i=2;i<=100;i++){
    let prime=true
    for(j=2;j<i;j++){
      if(i%j==0){
        prime=false;
        break
      }
    }
    if(prime){
      console.log(i)
    }
  }
  // call back example
  function funone(callback){
    console.log(10,2,3)
    let result=callback(10,2,3)
    console.log(result)
    
  }
  function funtwo(a,b,c){
    return a+b+c
    
  }
  funone(funtwo)
  //devid a world 
  let str='helloworld';
  let str2=str.slice(5)
  console.log(str2)
  
  //without using a methods
  let str3=''
  for(i=0;i<=str.length-1;i++){
  
    if(str[i]===4){
      str3+=str[i]
    }
  
  }
  console.log(str2)
  
  // find a length without using length method
  let str4='venkatasudheer'
  let count=0
  for(i=0;str4[i]!=undefined;i++){
    count++
  }
  console.log(count)
  
  //asynchronous example 
setTimeout(function() {
    console.log('hello')
  }, 1000);
  
  //output for this code
  for(i=1;i<=10;i++){
    setTimeout(function(){
      console.log(i)
    },1000)
  }
  //with var 
  for(var i=1;i<=10;i++){
    setTimeout(function(){
      console.log(i)
    },1000)
  }
//over come of the setTimeout async we can use a IIFC(Immediately Invoked Function Expression);
for (var i = 0; i <= 10; i++) {
  (function (currentI) {
    setTimeout(function () {
      console.log(currentI);
    }, 1000);
  })(i);
}  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  