import axiosInstance from "./axiosInstance";
const getAllUser=async ()=>{
    const users=await axiosInstance.get('allUser');
    return users.data;
}
const addUser=async({message,author})=>{
    const users =await axiosInstance.post('addUser',{
        message,author
    })
    return users.data;
}
export { getAllUser,addUser};