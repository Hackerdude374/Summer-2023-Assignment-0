function pairSum(nums, target) {
  // Insert code here;
  //find a complement. that is the target subtracted  by an array value 
  let complement = target - nums[0];
  for(let i = 0; i < nums.length; i++){
    //search for the target. if not found, no complement, the complement is target - nums[i++]
    if(nums[i] == complement){ // complement found 
      return true;
    }
    complement = target - nums[i+1];
    
  }
  return false;
}
console.log(pairSum([0, 1, 2, 3, 4, 5], 8));
// Do not edit this line;
module.exports = pairSum;
