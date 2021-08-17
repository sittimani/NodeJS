const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect("mongodb://127.0.0.1:27017/dbs", {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

var collection = true;

db.on('error', ()=>{
    collection = false;
    console.log("Error in connecting to db");
})
db.once('open', () => {
    console.log("Connected Successfully");    
})

const schema = mongoose.Schema

const userSchema = new schema({
    employeeID:{
        type: String
    },
    name:{
        type: String
    },
    age:{
        type: String
    },
    email:{
        type: String
    },
    avator:{
        type: String
    }
}, {timestamps : true, versionKey:false})

const user = mongoose.model(process.env.COLLECTION_NAME,userSchema)

module.exports = user;
