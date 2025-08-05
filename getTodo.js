const Todo=require('../Models/Todo');

exports.getTodo= async(req,res)=>{
    try{
        //   const id= req.params.id;
        const Todos=await Todo.find();
        res.status(200).json({
        success:true,
        data:Todos,
        message:"entire todo data is fetched",
    });
    }
    catch(err){
        console.log(err);
        console.err(message);
        res.status(500).json({
            success:false,
            data:err.message,
            message:"server error is there",
        });
    }
}
exports.getTodobyId= async(req,res)=>{
     try{
        const id=req.params.id;
        console.log(id);
        const requestbyId= await Todo.findById( {_id: id});
        if(!requestbyId)
        {
            return res.status(404).json({
                success:false,
                message:"the id is not found"
            })
        }
        res.status(200).json({
            success:true,
            data:requestbyId,
            message:"yes the search id data is found",
        });
     }
     catch(err){
       console.log(err);
       console.err(err);
       res.status(500).json({
        success:false,
        data:err.message,
        message:"the given id is not found",
       })
     }
}