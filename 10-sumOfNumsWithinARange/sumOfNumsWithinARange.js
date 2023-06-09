function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let sum = 0;
  //find indexes 
  let index1 = 0; //beginning
  let index2 = 0; //end
  for(let i = 0;i< nums.length; i++){
    if(nums[i] == start){
      index1 = i;
    }
    if(nums[i] == end){
      index2 = i;
    }
  }
  
  for(let i = index1; i < index1; i++){
    sum = nums[i] + sum;
  }
  return sum;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
