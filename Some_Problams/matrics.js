/**------------------------------------------------------------ */

let a=[[1,2,3],[4,5,6],[7,8,9]];
let b=[[1,1,3],[4,3,6],[7,8,10]];
for(i=0;i<a.length;i++){
    for(j=0;j<a[i].length;j++){
        if(a[i][j]===b[i][j]){
            console.log('same',a[i])
        }else{
            console.log('not same',b[i])
        }
    }
}
