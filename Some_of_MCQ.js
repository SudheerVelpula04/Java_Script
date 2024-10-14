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
  