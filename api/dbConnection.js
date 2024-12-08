const express = require("express")
const mongoose= require("mongoose");
require('dotenv').config();
const app=express();
const mongousername= process.env.MONGO_USERNAME;
const mongopassword= process.env.MONGO_PASSWORD;
const mongocluster= process.env.MONGO_CLUSTER;

const uri= `mongodb+srv://${mongousername}:${mongopassword}@${mongocluster}/`

function dbConnection(){
    mongoose.connect(uri)
    .then(response=>console.log("DB CONNECTED"))
    .catch(err=>console.log(err))
}

module.exports=dbConnection;