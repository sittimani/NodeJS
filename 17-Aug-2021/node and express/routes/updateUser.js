const express = require('express');
const users = require('../service/connection')

const router = express.Router();

router.put('/updateUser/:id', async (request, response, next) => {
    const idString = request.params.id;
    const body = request.body;
    users.findOneAndUpdate({employeeID: idString}, body, (err,data) => {
   // users.updateOne({ employeeID: idString }, { $set: { name: body.name, age: body.age } }, (err, data) => {
        if (err) {
            response.end("error in updating");
        } else {
            response.end("update successfully completed");
        }
    })
})

module.exports = router;