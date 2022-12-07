function number() {
    let number = prompt('enter a number');
        let numberTwo = prompt('enter second number');
        let firstNumber = parseInt(number);
        let secondNumber = parseInt(numberTwo);
    
        if (firstNumber === secondNumber) {
            alert ('invalid both numbers are the same and is equal!');
        }
        else {
            if (firstNumber > secondNumber) {
                alert ('The bigger number is ' + firstNumber)
            }
            else {
                alert ('The bigger number is ' + secondNumber)
            }
        }
    }