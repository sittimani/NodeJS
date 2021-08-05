
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const inquirer = require('inquirer');
  
//readline.write("hello")

// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// })


var questions = [
    {
      type: 'input',
      name: 'name',
      message: "What's your name?"
    }
]
  
inquirer.prompt(questions).then(answers => {
    console.log(answers.name)
})