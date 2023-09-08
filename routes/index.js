
import { Router } from 'express';
import messageSchema from '../models/messageSchema.js';


const router=Router()
async function seeAllMessage(req,res){
    const message= await messageSchema.find();
    return res.json(message);
}
router.get('/allUser',seeAllMessage);

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
router.post('/addUser',addMessage)
export default router