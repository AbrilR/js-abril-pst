function userNumber() {

    let myNum = prompt('Enter a number');
    let mySecondNum  = prompt('Enter another Number');

    console.log(myNum);
    console.log(mySecondNum);

    console.log(isNaN(myNum));
    console.log(isNaN(mySecondNum));

    function validate() {
        // checks both and sees they are both numbers if so console.log theyr both numbers!!!
        if( isNaN(myNum) == false && isNaN(mySecondNum) == false ){
            let firstNumber = parseInt(myNum);
            let secondNumber = parseInt(mySecondNum);

            let myNewNum = firstNumber + secondNumber;
            alert( firstNumber + " + " + secondNumber + " = " + myNewNum );
            // if firest number is not a number and the second numbers is a number
        } else if( isNaN(myNum) == true && isNaN(mySecondNum) == false ) {
            myNum = prompt("please insert an actual number for your first number");
            validate();
            // if first number is a number and the second number is not a number
        } else if( isNaN(myNum) == false  && isNaN(mySecondNum) == true ) {
            mySecondNum = prompt("please insert an actual number for your second number");
            validate();
        } else {
            myNum = prompt("please insert an actual number for your first number");
            mySecondNum = prompt("please insert an actual number for your second number");
            validate();
        }
    }

    validate();
} 