// var op = process.argv[2];
var n1 = parseFloat(process.argv[2]);
var n2 = parseFloat(process.argv[3]);

console.log(n1, n2);

if (n1 === n2)
  console.log("equal");
else
  console.log("not equal");

if (!(n1 % 7) && !(n2 % 7))
  console.log("both divisible by 7");
else
  console.log("both not divisible by 7");
