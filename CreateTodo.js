const Todo=require('../Models/Todo')
exports.CreateTodo = async(req,res)=>{
    try{
     const {title,description}=req.body;
     const response=await Todo.create({title,description});
     res.status(200).json(
        {
            success:true,
            data:response,
            message:"entry created successfully"
        });
    }
    catch(error){
    console.log(error);
    console.error(error);
    res.status(500).json({
        success:false,
        data:"internal server error",
        message:error.message,
    })
    }
}
exports.getTodobyId = async(req,res) =>{
    try{
       const id=req.params.id;
       const todos= await Todo.find({_id:id})
       res.status(200).json({
        success:true,
        data:todos,
        message: "data is present here"
       });
    }
    catch(err){
         console.log(err);
         console.err(err);
         res.status(500).json({
            success:false,
            data: err.message,
            message:"some error is there"
         })
    }
}