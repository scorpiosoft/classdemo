// file system package
var fs = require("fs");
// bank file
var bank_file = 'bank.txt';
// last balance
var balance = 0;
// cmd line arguments
var op = process.argv[2];
var n1 = 0;

// read last value from bank.txt
fs.readFile(bank_file, "utf8", function(error, data)
{
  // If the code experiences any errors it will log the error to the console.
  if (error)
    return console.log(error);
  // We will then print the contents of data
  console.log(data);
  // Then split it by commas (to make it more readable)
  var bba = data.split(/, /);
  // We will then re-display the content as an array for later use.
  balance = parseFloat(bba[bba.length - 1]);

  console.log(op);

  switch(op)
  {
    case 't':
    case 'total':
      console.log("balance:", balance);
      return true;
      break;
    case 'd':
    case 'deposit':
      n1 = parseFloat(process.argv[3]);
      balance += n1;
      break;
    case 'w':
    case 'withdraw':
      n1 = parseFloat(process.argv[3]);
      balance -= n1;
      break;
    case 'l':
    case 'lotto':
      balance -= 1;
      var rnd = Math.floor(Math.random() * 10) + 1;
      if (rnd === 1)
        balance += 1000;
      break;
    default:
      console.log("unknown operation:", op);
      return false;
  }
  fs.appendFile(bank_file, ", " + balance, function(err)
  {
    if (err)
      console.log(err);
    else
      console.log("balance updated:", balance);
  });
});
