const comments=require("../Model/CommentModel");
const Post=require("../Model/PostModel");

exports.CreateComment=async(req,res)=>{
    try{
      const {post,body, user}=req.body;
      const comment=new comments({
        post,body,user
      });
      const savecomment=await comment.save();
      const updatecomment= await Post.findByIdAndUpdate(post,{$push:{comments:savecomment._id}},{new:true})
      .populate("comments").exec();
      res.json({
        message:"comment Created",
        post:updatecomment
      })
    }
    catch(error){
      res.json({
        message:Error.message
      })
    }
};
exports.getcomments= async (req,res)=>{
  try{
     const id= req.params.id;
     const getcomments = await Post.findById({_id:id}).populate("comments").populate("likes").exec();
     res.json({
      post:getcomments,
      message:"the comments are shown"
     }) 
  }
  catch(error)
  {
    res.json({
      message:"some error for displaying those users"
    })
  }
}
exports.getPost= async (req,res) => {
  try{
     const seePost=await Post.find({}).populate("comments").exec();
     res.status(200).json({
      message:"yaa all the post are here",
      post:seePost
     })
  }
  catch(error){
    res.status(500).json({
      message:Error.message,
      // console.log("some problem is there")
    })
  }
};

