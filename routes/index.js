
import { Router } from 'express';
import messageSchema from '../models/messageSchema.js';
import userSchema from '../models/userSchema.js';

const router=Router()
async function seeAllMessage(req,res){
    const message= await messageSchema.find();
    return res.json(message);
}
router.get('/allMessage',seeAllMessage);

async function addMessage(req,res){
    try{
    const {message,author}=req.body;
    const added= await messageSchema.create({
        message,author
    })
    return res.json(added)
    }
    catch(err){
        return res.status(500).json({message:err});
    }
}
router.post('/addMessage',addMessage)

async function seeAllUser(req,res){
    const user=await userSchema.find();
    return res.json(user);
}
router.get('/allUser',seeAllUser);

async function addUser(req,res){
    try{
    const {Name,Email,Password}=req.body;
    const added=await userSchema.create({Name,Email,Password});
    return res.json(added);
    }
    catch(err){
        return res.status(500).json({message:err})
    }
}
router.post('/addUser',addUser);
export default router