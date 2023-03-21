//Exercise 1
"use strict";

//Exercise 3
function parseToJSON(data) { //Removed duplicate parameter because of Strict Mode.
  try{
    return JSON.parse(data); 
  }
  catch(err){
    console.log(err);
    return null;
  }
}

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
