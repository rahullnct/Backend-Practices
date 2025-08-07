const express=require('express');
const router=express.Router();

const {CreateTodo}=require('../Controller/CreateTodo');
const {getTodo,getTodobyId} = require('../Controller/getTodo');
const {UpdateTodo}=require('../Controller/UpdateTodo');
const {DeleteTodo}=require('../Controller/DeleteTodo');
router.post("/CreateTodo",CreateTodo);
router.get("/getTodo",getTodo);
router.get("/getTodobyId/:id",getTodobyId);
router.put('/updateTodo/:id',UpdateTodo);
router.delete('/deleteTodo/:id',DeleteTodo);
module.exports=router;