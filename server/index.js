const express = require("express");
const mongoose = require("mongoose");
const authrouter = require("./router/auth");


const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());
app.use(authrouter);

const DB ="mongodb+srv://naveenmca04:abcd1234@cluster0.czyd3z4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB)
.then(()=>{
    console.log('connection sucessfull');
})
.catch((e)=>{
    console.log(e)
})
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected to the port ${PORT}`);
})