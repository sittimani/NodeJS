const fs = require('fs')

const readStream = fs.createReadStream('input.txt')

var chunk = ''
readStream.on('data', data => {
    chunk += data
})

readStream.on('error', error => {
    console.log("Error in reading")
})

readStream.on('end', () => {
    console.log("Data Readed :\n" + chunk)
    readStream.close()
})
