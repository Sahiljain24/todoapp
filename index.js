
const express = require("express")
const app =express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("../todoapp/routes/todos");

app.use('/api/vi', todoRoutes)

app.listen(PORT,()=>(
        console.log(`server started succesfully at ${PORT}`)
    )

)

const  dbConnect =require("./config/database")
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>This is home page baby</h1>`)
})