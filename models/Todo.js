

const mongoose = require("mongoose");
const { title } = require("process");
const todoschema = new mongoose.Schema(
    {
        title:{
           type:String,
           require:true,
           maxLength:50
        },
        description:{
            type:String,
            require:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            require:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now()
        }
    }
);
module.exports=mongoose.model('Todo',todoschema);