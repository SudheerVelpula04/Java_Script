let day=10;
let dayName;
switch(day){
    case 1:
        dayName="monday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5: 
        dayName="friday";
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="sunday";
        break;
    default:
        dayName="invalid Day";

}
console.log(dayName)



// continue Statement:
for(let i=0;i<=10;i++){
    if(i%2==3)continue;
    console.log(i)
}
//Brack Statement:
for(i=0;i<=10;i++){
    if(i==9)break;
    console.log(i)
}
//brack in while loop
let loop=2;
while(loop<=8){
    console.log(loop)
    if(loop===3){
        break;
    }
    loop++
}
//do while loop
let name =1;
do{
    console.log(name);
    if(name===3){
        break
    }
    name++
}while(name<=5)