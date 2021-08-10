const fs = require('fs');
const duplex = require('stream').Duplex

const readableStream = new duplex.Readable({
    read(){}
})
const writableStream = new duplex.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('firstTime called')
readableStream.push('secondTime called')
