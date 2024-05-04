
const Todo = require("../models/Todo");

exports.updateTodo = async (req,res)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
         
        )
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo updated successfully",
        });

        }
    catch(err){
           console.err(err);
           console.log(err);
           res.status(404).json({
            success:false,
            error:err.message,
            message:"Could not be updated"
           })
          
    }
}