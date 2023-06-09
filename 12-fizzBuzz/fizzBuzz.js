function fizzBuzz(start, end) {
  // Insert code here;
  let result = [];
  for(let i = start; i <=end;i++){
    if (i%3 == 0 && i % 5 == 0) { //both multiple of 3 qand 5 
      result.push("FizzBuzz");
    } 
    else if (i%3 == 0) { //multiple of 3
      result.push("Fizz");
    } 
    else if (i%5 == 0) { //multiple of 5
      result.push("Buzz");
    } 
    else { //not multiple of 3 and 5 
      result.push(i);
    }
}
  return result;
}
console.log(fizzBuzz(1, 15));

// Do not edit this line;
module.exports = fizzBuzz;
