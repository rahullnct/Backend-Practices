const mongoose=require('mongoose');

const CommentModel= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
    },
    body:{
        type:String,
        require:true,
    },
    user:{
        type:String,
        require:true,
    }
});
module.exports= mongoose.model("comment",CommentModel);
