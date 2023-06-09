function titleCaseEdit(title) {
  // Insert code here;
  //first letter always cap
  title[0].toUpperCase();
  //find an individual word
  const words = title.split(" "); 
  //loop to find words, then capitalzie first letter and add the remaining letters.
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

const result = words.join(" ");

return result; 
}
console.log(titleCaseEdit("the quick brown fox"));
// Do not edit this line;
module.exports = titleCaseEdit;
