const express = require('express')
const runDB = require('./config/db')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/routes')
const orderRouter = require('./routes/orderRoutes')
const app = express()
app.use(bodyParser.json());
app.use('/',router);
app.use('/',orderRouter)
runDB()
 app.listen(5001,()=>console.log("Server Running"))
