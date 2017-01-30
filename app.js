var program = require('commander')
var args = process.argv;
var flagsPresent = [];

program
  .option('-s, --sum', 'sum')
  .option('-p, --product', 'product')
  .parse(process.argv);

// if(!program.sum && !program.product) {
//   //Remove after replacing with commander version
//   throw 'Error: Incorrect number of flags'
// }
var isNumber = function(x) {
  return !isNaN(parseFloat(x));
}
var numbers = args.filter(isNumber).map(parseFloat);
var result;
if(program.sum){
  result = numbers.reduce(function(a,b){return a+b});
}
if(program.product){
  result = numbers.reduce(function(a,b){return a*b});
}
console.log("hey")
console.log("result is %d", result)
