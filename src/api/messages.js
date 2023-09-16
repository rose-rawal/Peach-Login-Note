import axiosInstance from "./axiosInstance";
const getAllMessage=async ()=>{
    const users=await axiosInstance.get('allMessage');
    return users.data;
}
const addMessage=async({message,author})=>{
    const users =await axiosInstance.post('addMessage',{
        message,author
    })
    return users.data;
}
export { getAllMessage,addMessage};