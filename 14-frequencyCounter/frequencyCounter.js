function frequencyCounter(word) {
  // Insert code here;
  let freq = {};
  for(let i = 0; i < word.length; i++){
    let char = word.charAt(i); //find letter
    if(freq[char]){ //increment 1 every time found
      freq[char]++;
    }
    else 
      freq[char] = 1; //1 if no duplicates found
  }
  return freq;
}
console.log(frequencyCounter("computer"));
// Do not edit this line;
module.exports = frequencyCounter;
