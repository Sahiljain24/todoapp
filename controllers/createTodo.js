
const Todo = require("../models/Todo")

exports.createTodo =async(req,res)=>{
    try{
        const {title,description} = req.body;

        const response = await todo.create({title,description});
    res.status(200).json(

    {success:true,
    data:response,
    message:"Entry created Succesfully",}
    )
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(200).json({
            success:false,
            data:"entry could not be created",
            message:err.message,
        })
       
    }
}
