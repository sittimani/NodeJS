const fs = require('fs');

const floderName = "../newfloder2"

// Create a floder
try {
    console.log("entered")
    if (!fs.existsSync(floderName)) {
        fs.mkdirSync(floderName);
    } else {
        console.log("Floder already exists");
    }
} catch (err) {
    console.log(err)
}

// access files inside the floder

fs.readdirSync(__dirname).map(fileName => {
    console.log(fileName)
    console.log(fs.lstatSync(fileName).isFile())
})


fs.rmdir(floderName, (err) => {})