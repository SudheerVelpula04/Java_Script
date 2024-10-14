for(let i=0;i<3;i++){
    console.log("outer loop iteration:"+i)
    for( let j=0;j<2;j++){
        console.log("inner loop ineration:"+j)
    }
}

// debugger
let array=[[1,2,3],[4,5,6],[7,8,9]];
for(i=0;i<array.length;i++){
    console.log("array leanth in index:"+i)
    for(j=0;j<array[i].length;j++){
        console.log("inner of array length of each array"+j)
    }

}

let array2=[[1,2,3],[4,5,6],[7,8,9]];
for(i=0;i<array2.length;i++){
    for(j=0;j<array2[i].length;j++){
        console.log(array2[i][j])
    }
}

let array3=[[1,2,3],[4,5,6],[7,8,9]];
for(i=0;i<array3.length;i++){
    for(j=0;j<array3[i].length;j++){
        console.log(j+"index number of array"+array3[i][j])
    }
}


// for (let i = 0; i < 3; i++) {         // Outer loop
//     console.log("Outer loop iteration:", i);
    
//     for (let j = 0; j < 2; j++) {     // Inner loop
//         console.log("  Inner loop iteration:", j);
//     }
// }
