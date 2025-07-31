
const mongoose=require('mongoose');

const PostModel= mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        requrie:true,
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like",
    }]
});
module.exports= mongoose.model("post",PostModel);
