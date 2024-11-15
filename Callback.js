//anonamas Funtions

// let a=function(a){
//     return a + "this is a anonamas function"
// }
// console.log(a("this "))

// let a=function(a){
//   return a + "this is triky"
// }
// console.log(a("js"))
// let a=function(a){
//   console.log(a+"this is very triky")
// }
// a("js")
// let fun=function(a,b) return a+b;
// console.log(fun(5,10))

// let funone=(a,b)=>{
//   console.log(a+b)
//   return a*20
// }
// console.log(funone(20,10))
// let a=(a,b,c)=>{a+b+c}
// console.log(a(10,20,30))


//wee need to add retan
// let a=(a,b,c)=>{return a+b+c}
// console.log(a(10,20,30))


// call backs--------------------------------------------------------------------------------------------------------

// function demo(a,b,c){
//   console.log(a+b+c)
// }
// demo(20,40,50)
// let resalt=demo//hear we convert dem in to new varable
// resalt(20,30,41) //this will call by refarence
// function x(a,b){
//   return a+b
// }
// resalt=x;//this will call by refarence
// console.log(x(20,30))
// //call back

// function demo(callback){
//   console.log("demo function is  calling")
//   callback()
// }
// function hello(){
//   console.log("hello function is calling")
// }
// demo(hello)

////one more example of call back



// function demo(callback1,callback2){
//   callback1()
//   console.log("1")
//   callback2();
//   console.log("5")
//   callback1()
//   console.log("10")
// }
// function funone(){
//   console.log("111")
// }
// function funtwo(){
//   console.log("2222")
// }
// demo(funone,funtwo)


////3rd example of call back

function funone(callback){
 
    console.log(10,20,30)// hear will print a values o/p:10 20 30
    
      let resalt=callback(10,20,30) // hear we are call by refarence o/p:60
    console.log(resalt)
      
    
  }
  function one(a,b,c){
    return a+b+c;
  }
  funone(one)
  
  
  
  
// call back 


step1(10,function(resalt1,error){
  if(!error){
    step2(resalt1,function(resalt2,error){
      if(!error){
        step3(resalt2,function(resalt3,error){
          if(!error){
            console.log('resalts',resalt3)
          }
        })
      }
    })
  }
});







function step1(value,calback){
  calback(value+10,false);
}
function step2(value,calback){
  calback(value+10,false);
}
function step3(value,calback){
  calback(value+10,false);
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



