function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let oddnumbers = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] %2 != 0) //odd number
      oddnumbers.push(nums[i]);
  }
  let sum = 0;
  for(let i = 0; i < oddnumbers.length; i++){
    sum = sum + oddnumbers[i];
  }
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
