function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let result = 1; // any number multiplied by 1 is itself
  for(let num of args){
    result = num*result; //keep on multiplying
  }
  return result;
}
console.log(productOfAnyAmountOfNumbers(3, 4, 5));
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
