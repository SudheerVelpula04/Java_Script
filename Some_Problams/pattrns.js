/*----------------------------------------------------------------------------- *
                                                                               ***
                                                                              *****
                                                                             *******
                                                                            **********-------------------------------------------------------------------------------------  */ 

let n=5
for(i=1;i<=n;i++){
  let line=''
  for(j=1;j<=n-i;j++){
    line+=' '
  }
  for(k=1;k<=(2*i-1);k++){
    line+='*'
  }
  console.log(line)
}
/**--------------------------------------- */
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