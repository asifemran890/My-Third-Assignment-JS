// /** Problem 04 - (Delete / Store) */
// var fileName = "1.jpg";
// //write your code here
// if (
//   fileName.includes("pdfData.jpg" || "docx.txt" || "docx.xpdf" || "slipdf.txt")
// ) {
//   console.log("Delete");
// } else fileName.includes("result.pdf" || "data.docx" || "#exp.mp4");
// console.log("Store");

var fileName = "docx.txt";
//write your code here
if (
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docx") ||
  fileName.startsWith("#")
) {
  console.log("Store");
} else {
  console.log("Delete");
}
