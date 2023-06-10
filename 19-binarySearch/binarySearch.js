class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) { //nums is sorted. so faster search 
    // Insert code here;
    let left = 0;
    let right = nums.length -1;
while(left <=right){
    let middle = (left+right)/2;
    if(nums[middle] == target){ //found
      return true;
    }
    if(nums[middle] > target){ //less than, so decrement right.
      right = middle -1;
    }
  if(nums[middle] < target){ //greater so increase left.
    left = middle + 1;
  }
  return false;
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
