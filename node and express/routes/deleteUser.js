const express = require('express');
const users = require('../service/connection')

const router = express.Router();

router.delete('/deleteUser/:id', (request, response, next) => {
    const id = request.params.id;
    users.findOne({ employeeID: id }, (err, data) => {
        if (err) {
            response.json("error in accessing database")
        } else {
            if (data == null) {
                response.statusCode = 400
                response.json("User not available")
            } else {
                users.deleteOne({ employeeID: id }, (err, data) => {
                    response.json("deleted")
                })
            }
        }
    })
})

module.exports = router;