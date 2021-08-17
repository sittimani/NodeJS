const express = require('express')
const env = require('dotenv').config()

const indexRouter = require('./routes/home')
const addUserRouter = require('./routes/addUser')
const readUserRouter = require('./routes/readUser')
const updateUserRouter = require('./routes/updateUser')
const deleteUserRouter = require('./routes/deleteUser')

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug')

app.use("/uploads", express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use(indexRouter);
app.use(addUserRouter)
app.use(readUserRouter)
app.use(updateUserRouter)
app.use(deleteUserRouter)


app.use(function (req, res, next) {
    res.statusCode = 404
    res.write("not found")
    res.end()
});

app.listen(port, () => {
    console.log(" listening on port " + port);
})
