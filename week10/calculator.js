var op = process.argv[2];
var n1 = parseFloat(process.argv[3]);
var n2 = parseFloat(process.argv[4]);

console.log(n1, op, n2);

if (op === "add")
{
  console.log(n1 + n2);
} else
if (op === "subtract")
{
  console.log(n1 - n2);
} else
if (op === "multiply")
{
  console.log(n1 * n2);
} else
if (op === "divide")
{
  console.log(n1 / n2);
} else
if (op === "remainder")
{
  console.log(n1 % n2);
} else
if (op === "exp")
{
  console.log(Math.pow(n1, n2));
} else {
  console.log("op ", op, "not recognized");
}