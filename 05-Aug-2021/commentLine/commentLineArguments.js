const { red } = require('chalk');
const chalk = require('chalk');

const args = process.argv.slice(2);
console.log(args)
console.log();

process.argv.forEach((value,index) => {
    console.log(value + "-->" + index);
})

console.clear()
console.log("Data received from console is :")
console.log(args)


const print = "hello"
console.count(print)
console.count(print)
console.log(print)
console.count(print)

console.log('\x1b[33m%s\x1b[0m', 'hi!')
console.log(chalk.red("red text"))