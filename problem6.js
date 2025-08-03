/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
for (var a = 0; a < experience; a++) {
  startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));
