const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const writestream = fs.createWriteStream('output.txt')

readline.question("Enter some data to write?", data => {
    writestream.write(data)
    readline.close()
})