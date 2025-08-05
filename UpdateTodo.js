const Todo = require('../Models/Todo');

exports.UpdateTodo= async(req,res)=>{
  try{
    const id=req.params.id;
    const {title,description}=req.body;

    const update=await Todo.findByIdAndUpdate(
    {_id:id},
    {title,description,updated_at:Date.now()
    })
    res.status(200).json({
        success:true,
        data:update,
        message:"message updated successfully"
    })
  } 
  catch(err){
    console.log(err);
    console.err(err);
    res.status(500).json({
        success:false,
        message:"not updated"
    })
  }    
}