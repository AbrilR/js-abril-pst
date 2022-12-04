// function myFunction() {

//   let text;
//   let person = prompt("Please enter your name:");

//   if (person == null || person == "") {
//       text = "User cancelled the prompt.";
//   } else {
//       text = "Hello " + person + "! How are you today?";
//   }

//   document.getElementById("demo").innerHTML = text;
// }

function reversingString(str) {
        
  // empty string
  let aNewString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      aNewString += str[i];
  }
  return aNewString;
}
      
// take input from the user
const string = prompt('What is your name?');
      
const result = reversingString(string);
alert("Hello " + result + "! How are you today?");