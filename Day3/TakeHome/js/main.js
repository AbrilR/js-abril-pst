function welcomeTheUser() {

    let firstName = document.getElementById("first-name").value; 
    let lastName= document.getElementById("last-name").value;
    
    console.log(firstName);
    alert("Welcome "+ lastName);
}

// birthday bonus
function bday() {

  let birthday = prompt("When is your birthday?");

  if( birthday == null || birthday == "") {
    alert("You forgot to type in your birthday");
    bday();
  } else {

    if (confirm("Are you sure?") == true) {
      alert("Your birthday is: " + birthday);
    } else {
      bday();
    }
  }
}
