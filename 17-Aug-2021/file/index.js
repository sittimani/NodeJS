const express = require('express')
const multer = require('multer')
const path = require('path')

const stroage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname)
        callback(null, file.fieldname + '-' + Date.now()+"."+ext)
    }
})

const upload = multer({
    storage: stroage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
            callback(null, true)
        } else {
            console.log("Only jpg and png file allowed")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})
const app = express()

app.post("/postMsg", upload.array('avator'), (req, res) => {
    //console.log(req.file)
})

app.listen(3000)