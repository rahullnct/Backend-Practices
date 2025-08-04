const Todo=require('../Models/Todo');

exports.DeleteTodo= async(req,res)=>{
    try{
        const id=req.params.id;
    const deletetodo= await Todo.findByIdAndDelete({_id:id});
    res.status(200).json({
        success:true,
        message:"the item is deleted",
    });
    }
    catch(err)
    {
        console.log(err);
        console.err();
        res.status(500).json({
            success:false,
            message:"message is not deleted"
        })
    }
}