
const express = require("express")
const app =express();
const  dbConnect =require("./config/database");
const todoRoutes = require("../todoapp/routes/todos");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());



app.use('/api/v1', todoRoutes)

app.listen(PORT,()=>(
        console.log(`server started succesfully at ${PORT}`)
    )

)

dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>This is home page baby</h1>`)
})