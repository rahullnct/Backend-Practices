const express=require('express');
const app=express();

require('dotenv').config();
const PORT = process.env.PORT || 4000

app.use(express.json());
const dummynode=require("./Router/BogRouter");
app.use("/api/v1",dummynode);

app.listen(PORT,()=>{
   console.log(`server started at ${PORT}`);
})

const Dbconnect=require('./Config/Database');
Dbconnect();

app.get("/",(req,res)=>{
  res.send(`<h1>This is my Homepage</h1>`)
})