/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here
console.log(area / 2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 30000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "result.pdf";
//write your code here
if (
  fileName.includes("pdfData.jpg" || "docx.txt" || "docx.xpdf" || "slipdf.txt")
) {
  console.log("Delete");
} else fileName.includes("result.pdf" || "data.docx" || "#exp.mp4");
console.log("Store");

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var result =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(result);

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
for (var a = 0; a < experience; a++) {
  startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));
