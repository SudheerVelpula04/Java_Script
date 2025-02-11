
//    var date=new Date()
// //    var day=date.
//    var fullyear=date.getFullYear()
//    var hours =date.getHours()
//    var month=date.getUTCMonth()
//    var day=date.getDate()
//    var minutes =date.getMinutes()
//    var seconds =date.getSeconds()
//    var ampm = hours >= 12 ? 'PM' : 'AM';
//     var formted_time=`${fullyear}:year,${hours}:hovers,${minutes}:mins,${seconds}:seconds ${ampm}. `
//     let formted_time2=`${fullyear}/${month}/${day}`
//     let time = document.getElementById('time')
//     time.innerHTML=formted_time
//     let time2 = document.getElementById('time2')
//     time2.innerHTML=formted_time2

//     console.log(formted_time)
//     // console.log(day)
//    console.log(date)
//    console.log(hours)
//    console.log(minutes)
//    console.log(seconds)
//    console.log(ampm)
//    console.log(Date())


// let gettime=date.gettime()
// console.log(gettime)


var Current_date= new Date()
var Current_time=Current_date.getTime()
console.log(Current_time)
    let Current_time2=new Date(1731663683439)
    console.log(Current_time2)

// Current timestamp
var timestamp=1731664260822
var currentTimestamp = Date.now(); // Or new Date().getTime()

// Difference in milliseconds
var differenceInMilliseconds = currentTimestamp - timestamp;

console.log("Difference in milliseconds: ", differenceInMilliseconds);

// Convert the difference to seconds, minutes, hours, days:
var differenceInSeconds = differenceInMilliseconds / 1000;
var differenceInMinutes = differenceInSeconds / 60;
var differenceInHours = differenceInMinutes / 60;
var differenceInDays = differenceInHours / 24;

console.log(`Difference: ${differenceInMilliseconds} ms`);
console.log(`Difference: ${differenceInSeconds} seconds`);
console.log(`Difference: ${differenceInMinutes} minutes`);
console.log(`Difference: ${differenceInHours} hours`);
console.log(`Difference: ${differenceInDays} days`);







