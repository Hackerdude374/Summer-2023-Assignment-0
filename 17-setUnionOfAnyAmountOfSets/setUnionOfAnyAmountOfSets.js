function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
let result = new Set();
  for(let set of args){ 
    for(let num of set){ //add unique numbers in a set
      result.add(num);
    }
  }
  return result;
}
const s1 = new Set([1, 2, 4]);
const s2 = new Set([4, 5, 6]);
console.log(setUnionOfAnyAmountOfSets(s1,s2));

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
