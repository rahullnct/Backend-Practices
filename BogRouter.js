
const express=require('express');
const router=express.Router();

const {dummycontroller}=require('../Controller/LikeController');
const {CreateComment,getPost,getcomments}=require('../Controller/CommentController');
const {likePost}=require('../Controller/LikeController');
const {createPost} =require('../Controller/PostController');


router.get('/dummycontroller',dummycontroller);
router.post('/comment/createcomment',CreateComment);
router.get('/post',getPost);
router.post('/like',likePost);
router.get('/getcomments/:id',getcomments);
router.post('/createpost',createPost);

module.exports=router;