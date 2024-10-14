const obj = Object.freeze({
    name: "Sudheer_V",
    info: {
      age: 25
    }
  });
  
  try {
    obj.name = "Velpula_Sudheer";     // Attempt to change the 'name' property
    obj.info.age = 30;     // Attempt to change the nested 'age' property
  } catch (e) {
    console.log("Error:", e.message);
  }
  
  console.log(obj.name, obj.info.age); // Output the final values


  // this is the explanation:
  // The info property (which is an object itself) is not frozen by Object.freeze(). 
  // Object.freeze() makes the top-level properties immutable, but nested objects can still be modified unless you explicitly freeze them.
  // Therefore, obj.info.age = 30; successfully changes the age property from 25 to 30.