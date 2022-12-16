const mongoose=require('mongoose')
const connectionString = 'mongodb://localhost/react-shopping-cart'
function runDB(){
mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log("connection success")).catch(err=>console.log("errr is"+err))
}
module.exports=runDB