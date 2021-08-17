const express = require('express');
const users = require('../service/connection')

const router = express.Router();

router.get('/getUser', async (request, response, next) => {

    await users.find({}, async (err, data) => {
        var dataToSend = []
        if (err) {
            response.json("Error in reading");
        } else {
            if (data.length == 0) {
                response.json("No Users available")
            } else {
                await data.forEach(element => {
                    dataToSend.push(element)
                    console.log(element)
                });
                response.json(dataToSend)
            }
        }
    })
})

router.get('/getUser/:id', async (request, response, next) => {
    const idString = request.params.id;
    console.log(idString)
    await users.find({ employeeID: idString }, (err, data) => {
        if (err) {
            response.json("Error in connection")
        } else {
            if (data.length == 0) {
                response.statusCode = 400
                response.json("No User Found")
            } else {
                console.log(data)
                response.json(data[0])
            }
        }
    })
})

module.exports = router;