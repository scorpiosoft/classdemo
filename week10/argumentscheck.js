// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
var one = parseFloat(process.argv[2]);
var two = parseFloat(process.argv[3]);
if (one === two)
  console.log("true");
else
  console.log("false");
