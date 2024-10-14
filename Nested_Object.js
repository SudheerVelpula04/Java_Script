debugger
let nestedObject = {
    person1: {
        name: "Sanju",
        age: 25,
        address: {
            city: "New York",
            country: "USA"
        }
    },
    person2: {
        name: "Sandy",
        age: 30,
        address: {
            city: "London",
            country: "UK"
        }
    }
};
for(let obj in nestedObject){
    console.log(obj)
    for(let in_obj in nestedObject[obj]){
        if(typeof nestedObject[obj][in_obj]==='object'){
            console.log(in_obj+":")

            for (let addr in nestedObject[obj][in_obj]) {
                console.log("  " + addr + ": " + nestedObject[obj][in_obj][addr]); 
            }
        }else{
            console.log(in_obj + ": " + nestedObject[obj][in_obj]);

        }
        
    }
    console.log("------------------")
}
// let nestedObject = {
//     person1: {
//         name: "Sanju",
//         age: 25,
//         address: {
//             city: "New York",
//             country: "USA"
//         }
//     },
//     person2: {
//         name: "Sandy",
//         age: 30,
//         address: {
//             city: "London",
//             country: "UK"
//         }
//     }
// };

// for (let obj in nestedObject) {
//     console.log(obj); // Prints 'person1', 'person2'
    
//     for (let in_obj in nestedObject[obj]) {
//         // Corrected the check for object type
//         if (typeof nestedObject[obj][in_obj] === 'object') {
//             console.log(in_obj + ":");
            
//             // Loop through the inner object ('address')
//             for (let addr in nestedObject[obj][in_obj]) {
//                 console.log("  " + addr + ": " + nestedObject[obj][in_obj][addr]);
//             }
//         } else {
//             console.log(in_obj + ": " + nestedObject[obj][in_obj]); // Prints simple key-value pairs
//         }
//     }
//     console.log("------------------");
// }
