const Todo = require("../models/Todo");

exports.getTodo=async (req,res)=>{

      try{
       const todos= Todo.find({});

       res.status(200).json(
        {
            success:true,
            data:todos,
            message:"Successfully Fetched entire Todo data",
        }
       )

     }
     catch(err){
          
        console.error(err);
        console.log(err);
        res.json({
            success:false,
            error:err.message,
            message:'Server Error',
        })

     }
}

exports.getTodoById =async (req,res)=>{
    try{
        const id = req.param.id;
        const todo = await Todo.findById({_id:id});
        if(!todo){
            res.status(404).json({
                success:false,
                message:`no todo by give id`,
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:todo,
                message:`todo by ${id} successfully fetched`
            })
        }
      


    }
    catch(err){
          
        console.error(err);
        console.log(err);
        res.json({
            success:false,
            error:err.message,
            message:'Server Error',
        })

     }
}