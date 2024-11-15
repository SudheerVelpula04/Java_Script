// function changeBackgroundColor(){
//     let colors=['red','green','orange','white','pink']
//     let randomIndex=Math.floor(Math.random()*colors.length);
//     document.body.style.backgroundColor=colors[randomIndex]
// }
let colors=['red','green','orange','white','pink']
let index=0
 function changeBackgroundColor(){
    document.body.style.backgroundColor=colors[index];
    index=(index+1)%colors.length;
 }
// function suffleArray(array){
//  for(let i=array.length-1;i>0;i--){
//     let j=i-1
//     [array[i],array[j]=array[j],array[i]];
//  }
// }
// function changeBackgroundColor(){
//     suffleArray(colors);
//     document.body.style.backgroundColor=colors[0];
// }


document.getElementById('colorButton').addEventListener('click',changeBackgroundColor)