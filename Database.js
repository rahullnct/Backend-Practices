const mongoose=require('mongoose');
require('dotenv').config();
const Dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Database Connectivity is Successful");
    })
    .catch((error)=>{
        console.log("Issue on Connectivity");
    });
}
module.exports=Dbconnect;