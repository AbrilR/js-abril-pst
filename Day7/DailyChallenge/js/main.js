function fizzBuzz(){
    for (var num = 0; num <=100; num +=1){
        if (num %3 == 0 && num%5 == 0){
        console.log(`${num} = FizzBuzz`);
        } else if (num %3 == 0 && num %5 >= 0){
        console.log(`${num} = Fizz`);
        } else if (num %3 >= 0 && num %5 == 0){
        console.log(`${num} = Buzz`);
        }
    }
}
fizzBuzz();