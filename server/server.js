const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/routes')
const app = express()
app.use(bodyParser.json());
app.use('/',router)
const connectionString = 'mongodb://localhost/react-shopping-cart'
mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log("connection success")).catch(err=>console.log(err))

 app.listen(5001,()=>console.log("Server Running"))
