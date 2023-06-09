function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let evennumbers = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] %2 == 0) //odd number
      evennumbers.push(nums[i]);
  }
  let sum = 0;
  for(let i = 0; i < evennumbers.length; i++){
    sum = sum + evennumbers[i];
  }
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
