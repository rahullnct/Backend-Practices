
const express=require('express')
const app= express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;
app.use(express.json());

const todoRoutes=require("./Routes/todo");
app.use("/api/v1",todoRoutes);

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})
const dbConnect= require("./Config/Database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to my Homepage</h1>`);
})