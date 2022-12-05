function welcomeTheUser() {

    let firstName = document.getElementById("first-name").value; 
    let lastName= document.getElementById("last-name").value;
    console.log(firstName);
    alert("Welcome "+ lastName);
}



function myFunction() {

  let text;
  let birthday = prompt("Please enter your birthday:");

  if (birthday == null || birthday == "") {
      text = "User cancelled the prompt.";
  } else {
      text = "Your birthday is " + birthday
  }

  document.getElementById("demo").innerHTML = text;
}



let YOB = prompt('What is your Year of Birth?', 1900);

const currentYear = new Date().getFullYear();

if(YOB === null) {
    YOB = ''
}

alert("`You are ＄{currentYear - YOB} years old!`" + YOB); // You are 100 years old!