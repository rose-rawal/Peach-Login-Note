import mongoose from "mongoose";
const schema=mongoose.Schema({
    message:{
        type: String,
        required:true
    },
    author:{
        type:String,
    }
})
export default mongoose.model('message',schema);