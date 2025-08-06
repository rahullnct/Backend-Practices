const mongoose=require('mongoose');
const TodoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxlength:50,
        },
        description:{
            type:String,
            required:true,
            maxlength:50,
        },
        created_at:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updated_at:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)
module.exports=mongoose.model("Todo",TodoSchema); 