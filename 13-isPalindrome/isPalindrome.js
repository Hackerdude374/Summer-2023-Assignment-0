function isPalindrome(word) {
  // Insert code here;
  //case 1 the first letter and last dont match = no palindrome 
  if(word[0] != word[word.length -1]){
    return false; 
  }
  if(word[0] == word[word.length -1]){
    word === word.split('').reverse().join();
    return word;
  }
  return false;
}
console.log(isPalindrome("big"));
console.log(isPalindrome("mom"));
// Do not edit this line;
module.exports = isPalindrome;
