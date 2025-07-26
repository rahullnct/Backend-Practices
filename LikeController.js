const Post=require('../Model/PostModel');
const Like=require('../Model/LikeModel');

exports.likePost= async(req,res)=>{
    try{
       const {post,user}=req.body;
       const like= new Like({
        post,user,
    })
    const savedlike = await like.save();
    const updatepost= await Post.findByIdAndUpdate(post,{$push:{likes:savedlike._id}},{new:true}).populate("comments").exec();
    res.json({
        post:updatepost
    })
}
    catch(error){
      res.json({
        message:"Error message for likepost"
      })
    }
};



exports.dummycontroller= async(req,res)=>{
    res.send("dummy node is created")
}