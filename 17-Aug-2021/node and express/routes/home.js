const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    // response.write("base url : " + request.baseUrl + "\n")
    // response.write("original url : " + request.originalUrl + "\n")
    // response.write("Cookies : " + request.cookies + "\n")
    // response.end()
    response.render('display',{title:"1629196373269.png", source:"../uploads/1629196373269.png"})

    //response.send("Entry Handler")
})

module.exports = router