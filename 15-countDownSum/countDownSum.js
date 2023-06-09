class MySolution {
  countDownSum(num) {
    // Insert code here;
    let sum = num;// starting sum be the number.
    let subtract = num-1;
    for(let i = 0; i < num; i++){
      sum = sum + subtract;
      subtract--;
    }
    return sum;
  }
}

// Do not edit this line;
let StudentSolution = new MySolution();
console.log(StudentSolution.countDownSum(5));
module.exports = StudentSolution;
